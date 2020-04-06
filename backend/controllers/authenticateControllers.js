
//Information is derived from request body
const Journal = require('../models/journal')
const Member = require('../models/member')
const shortId = require('shortId')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-Jwt')

exports.register = (req,res) => {
	//mongoose query, Mongoose will not execute a query until then or exec has been called
	//when callback is passed, operation is executed, member takes result of query( json document)
	Member.findOne({email: req.body.email}).exec((error,member)=>{ 
		//request body holds parameter sent up from the client as POST
		if(member){
			return res.status(400).json({
				error: 'Email is registered'
			})
		}

		//create new instance and save data
		const {name,email,password} = req.body
		let username = shortId.generate()
		let profileURL = `${process.env.CLIENT_URL}/profile/${username}`
		let newMember = new Member({name,email,password,profileURL,username})

		newMember.save((err,success)=>{
			if(err)
				return res.status(400).json({
					error: err
				})
			res.json({
				message: "Successfully registered"
			})
		})
	})
};

exports.login = (req,res) => {
	//check if user exist
	const {email,password} = req.body
	Member.findOne({email: req.body.email}).exec((error,member)=>{
		if(error || !member) {
			return res.status(400).json({
				error: "Your account have not been registered,please sign up"
			})
		}
		//authenticate account
		if(!member.authenticate(password)) {
			return res.status(400).json({
				error: "Wrong email or password"
			});
		}
		//generate json web token and send to client 
		const token = jwt.sign({ _id: member._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
		//save this token in cookie
		res.cookie('token', token, { expiresIn: '1d' });
		//give json response with user permission and token
		// validate the user
		const {_id,username,name,email,role} = member;
		return res.json({
			token,
			member: {_id,username,name,email,role}
		});
	});
}

exports.logout = (req,res) => {
	res.clearCookie('token')
	res.json({
		message: 'Logged out'
	})
}

//Middleware that validates JsonWebTokens and sets req.user.
exports.requireLogIn = expressJwt({
	secret: process.env.JWT_SECRET
	//make member available in request object 
})

//improve security for member
//authenticate member for amending journals
exports.verifyMemberId = (req,res,next) => {
	const slug = req.params.slug.toLowerCase();
	Journal.findOne({slug}).exec((err,journal)=>{
		if(err){
			return res.status(400).json({
				error: err
			})
		}
		let authentication = journal.author._id.toString() === req.profile._id.toString()
		if(!authentication){
			return res.status(400).json({
				error: "You are not authorized"
			})
		}
		next()
	})
}










