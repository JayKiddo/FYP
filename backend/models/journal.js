const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const journalSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            min: 3,
            max: 200,
            required: true
        },
        slug: {
            type: String,
            unique: true
        },
        content: {
            type: {}, //storing all types of data
            required: true,
            min: 200,
            max: 2000000 //2mb
        },
        democontent: {
            type: String,
            max: 1000
        },
        metatitle: {
            type: String
        },
        metadesc: {
            type: String
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        categories: [{ type: ObjectId, ref: 'Category', required: true }], 
        tags: [{ type: ObjectId, ref: 'Tag', required: true }],
        author: {
            type: ObjectId,
            ref: 'Member'
        }
    },
    { timestamps: true });

module.exports = mongoose.model('Journal', journalSchema);