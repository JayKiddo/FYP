const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true, 
		required: true,
		max: 32
	},
	slug: {
		type: String,
		unique: true,
		max: 32
		/*index: true*/
	}
	//config to automatically create time and update time)
},{timestamp: true});


module.exports = mongoose.model('Category',categorySchema);
