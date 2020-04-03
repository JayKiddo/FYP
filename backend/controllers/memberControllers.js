const Member = require('../models/member')
const Journal = require('../models/journal')
const fs = require('fs')
const _ = require('lodash')
const formidable = require('formidable')


//avoid returning hashed_password to user
exports.read = (req,res) => {
	req.profile.hashed_password = undefined
	return res.json(req.profile)
}

exports.readMemberAndJournals = (req,res) => {
	let member = req.profile
	let memberId = member._id

	Journal.find({author: memberId})
	.select('-photo -categories -tags')
	.exec((err,data)=>{
		if(err){
			return res.status(400).json({
				error: error
			})
		}
		member.photo = undefined
		member.hashed_password = undefined
		res.json({
			member,
			journals: data
		})
	})
 } 

exports.memberMiddleware =(req,res,next) => {
	const memberId = req.user._id
	Member.findById({_id: memberId}).exec((error,member)=>{
		if(error){
			return res.status(400).json({
				error: 'Please log in to access this feature'
			})
		}

		if(member.role !== 'member'){
			return res.status(400).json({
				error: 'This feature is for Member'
			})
		} 

		req.profile = member
		next()
	})
}

exports.adminMiddleware =(req,res,next) => {
	const adminId = req.user._id
	Member.findById({_id: adminId}).exec((error,member)=>{
		if(error){
			return res.status(400).json({
				error: 'Please log in to access this feature'
			})
		}

		if(member.role !== 'admin'){
			return res.status(400).json({
				error: 'This feature is for Admin'
			})
		} 

		//req.profile is a newly created property
		req.profile = member
		next()
	})
}

exports.updateMember = (req,res) => {
	const form = formidable.IncomingForm()
	form.keepExtensions = true;
	form.parse(req ,(error,fields,files)=>{
		if(error){
			return res.status(400).json({
				error: error
			})
		}

		const {name,username,email} = fields

		if (!name || !name.length) {
            return res.status(400).json({
                error: 'Name is required'
            });
        }

        if (!username || !username.length) {
            return res.status(400).json({
                error: 'Username is required'
            });
        }

        if (!email || !email.length) {
            return res.status(400).json({
                error: 'Email is required'
            });
        } 

		let member = req.profile
		member = _.extend(member,fields)

		if(files.photo) {
			if(files.photo.size > 100000) {
				return res.status(400).json({
					error: 'Image size should be less than 1MB'
				})
			}
			member.photo.data = fs.readFileSync(files.photo.path)
			member.photo.contentType = files.photo.type
		}


			member.save((error,result)=>{
				if(error){
					return res.status(400).json({
						error: error
					})
				}
				member.hashed_password = undefined
				member.photo = undefined
				res.json(member)
			})
	})
}

exports.photo = (req,res) => {
	const username = req.params.username
	Member.findOne({username}).exec((error,member)=>{
		if(error || !member) {
			return res.status(400).json({
				error: error
			})
		}
		if(member.photo.data){
			res.set('Content-Type',member.photo.contentType)
			return res.send(member.photo.data)
		}
	})
}