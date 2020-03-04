const mongoose = require('mongoose');
const crypto = require('crypto');

const memberSchema = new mongoose.Schema({
	username: {
		type: String,
		trim: true, //trim out whitespace
		required: true,
		max: 32,
		unique: true,
		/*index: true,*/ // defining index of this property,support execution of db queries
		lowercase: true
	},
	name: {
		type: String,
		trim: true, 
		required: true,
		max: 32
	},
	email: {
		type: String,
		trim: true, //trim out whitespace
		required: true,
		unique: true,
		max: 32
	},
	profileURL: {
		type: String,
		required: true
	},
	//hashed password is stored in db
	hashed_password: {
		type: String,
		required: true
	},
	about: {
		type: String,
	},
	role: {
		type: String,
		default: 'member'
	},
	photo: { //photo will be stored in binary data type
		data: Buffer, //work with binary data
		contentType: String
	},
	resetPasswordLink:{
		data: String,
		default:''
	}
	//config to automatically create time and update time)
},{timestamp: true});



memberSchema.virtual('password')
	.set(function(password) {
		//encrypt password
		this.hashed_password = this.encryptPassword(password);
	})


memberSchema.methods = {
	encryptPassword: function(password) {
		if (!password) return 'error'
		try {
			return crypto.createHash('sha256').update(password).digest('hex');
		}catch (err){
			return'error'
		}
	},

	authenticate: function(plainText) {
		return this.encryptPassword(plainText) === this.hashed_password
	}
};


module.exports = mongoose.model('Member',memberSchema);

/*Further research
User Schema Virtual Field: get password from client,create salt and convert to hashed password, 
and save in the database as hashed password*/

	/*return crypto.createHmac('sha1',this.encryptKey).update(password).digest('hex');*/
