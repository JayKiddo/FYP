
//Information is derived from request body
const Journal = require('../models/journal')
const Member = require('../models/member')
const shortId = require('shortId')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-Jwt')
const mailgun = require("mailgun-js");
const _ = require('lodash')

exports.login = (req,res) => {
	//check if user exists
	const {email,password} = req.body
	Member.findOne({email: req.body.email}).exec((error,member)=>{
		if(error || !member) {
			return res.status(400).json({
				error: "Your account have not been registered,please sign up"
			})
		}
		//authenticate account
		//memberSchema method
		if(!member.authenticate(password)) {
			return res.status(400).json({
				error: "Wrong email or password"
			});
		}
		//generate json web token and send to client 
		//payload,signature,expiration date
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
		if(err ){
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

exports.forgotPassword = (req,res) => {
	const {email} = req.body
	Member.findOne({email}).exec((err,member)=>{

		if(err || !member){
			return res.status(400).json({
				error: "Email has not been registered"
			})
		}

		//generate token
		const resetToken = jwt.sign({_id: member._id},process.env.JWT_RESET,{expiresIn: '10m'})
		
		//create email
		const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

		const data = {
	        from: process.env.AUTHOR_EMAIL,
	        to: `${email}`,
	        subject: `'Reset password link - EVERLY'`,
	        text: `Please click on the following link to reset your password: \n ${process.env.CLIENT_URL}/password/reset/${resetToken}`
	        };

	    return member.updateOne({resetPasswordLink: resetToken},(err,success)=>{
	    	if(err){
	    		return res.json({
	    			error: err
	    		})
	    	} else {
	    		  mg.messages().send(data, (error, body) => {
			        if(error){
			            console.log(error)
			            return res.status(400).json({
			                error: error
			            })
			        } else {
			            console.log(body)
			            res.json({
			                message: `Email has been sent. Please follow the instruction to reset your password. \n Link is expired in 10 minutes`
			            })
			        }
			    });
	    	}

	    })    
	})

}
 
exports.resetPassword = (req,res) => {
	const {resetPasswordLink,newPassword} = req.body

	jwt.verify(resetPasswordLink,process.env.JWT_RESET,(err,success)=>{
		if(err){
			return res.status(400).json({
				error: "Reset link is expired. Please send a request again"
			})
		}
		Member.findOne({resetPasswordLink}).exec((err,member)=>{
			if(err){
				return res.status(400).json({
					error: err
				})
			}
			const updateInfo = {
				resetPasswordLink:"",
				password: newPassword

			}
			member = _.extend(member,updateInfo)
			member.save((err,data)=>{
				if(err){
					return res.status(400).json()
				}
				res.json({
					message: "Your password is reset. You can now log in with your new password"
				})
			})
		})
	})
}


exports.validateAccount = (req,res) => {
	const {name,email,password} = req.body
	Member.findOne({email}).exec((err,member)=>{
		if(member){
			return res.status(400).json({
				error: "Your account has been activated. Logging in to start journaling"
			})
		}

		const activateToken = jwt.sign({name: name,email: email,password: password},process.env.JWT_ACCOUNT_VALIDATION)

		const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

		const data = {
	        from: process.env.AUTHOR_EMAIL,
	        to: `${email}`,
	        subject: `'Account Activation - EVERLY'`,
	        text: `Please click on the following link to activate your account: \n ${process.env.CLIENT_URL}/member/account-validate/${activateToken}`
	        };

		  mg.messages().send(data, (error, body) => {
			        if(error){
			            console.log(error)
			            return res.status(400).json({
			                error: error
			            })
			        } else {
			            console.log(body)
			            res.json({
			                message: `Email has been sent. Please follow the instruction in your email to activate your account.\n You can only log in after activating your account`
			            })
			        }
			});
	})
}

exports.register = (req,res) => {
	const {accountValidationLink} = req.body

	const {name,email,password} = jwt.decode(accountValidationLink)

	Member.findOne({email}).exec((err,member)=>{
		if(member){
			return res.status(400).json({
				error: "Email is registered"
			})
		}

		let username = shortId.generate()
		let newMember = new Member({name,email,password,username})

		newMember.save((error,data)=>{
			if(error){
				return res.status(400).json({
					error: error
				})
			}
			res.json({
				message: "Registered successfully",
				email: email,
				password: password
			})
		})
	})
};



/*exports.register = (req,res) => {
	//mongoose query, Mongoose will not execute a query until then or exec has been called
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
		let newMember = new Member({name,email,password,username})

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
};*/










