const Member = require('../models/member')

//avoid returning hashed_password to user
exports.read = (req,res) => {
	req.profile.hashed_password = undefined
	return res.json(req.profile)
}

exports.memberMiddleware =(req,res,next) => {
	const memberId = req.user._id
	Member.findById({_id: memberId}).exec((error,member)=>{
		if(error){
			return res.status(400).json({
				error: 'Please log in to access this feature'
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

		req.profile = member
		next()
	})
}