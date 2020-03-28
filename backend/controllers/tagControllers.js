const Tag = require('../models/tag')
const Journal = require('../models/journal')
const slugify = require('slugify')


exports.createTag = (req, res) => {
    const {name} = req.body;
    let slug = slugify(name).toLowerCase();

    let newTag = new Tag({name,slug});

    newTag.save((error, tag) => {
        if (error) {
            return res.status(400).json({
                error: 'Duplicated tag'
            });
        }
        res.json(tag);
    });
};

exports.listTag = (req, res) => {
    Tag.find({}).exec((error, tag) => {
        if (error) {
            return res.status(400).json({
                error: error
            });
        }
        res.json(tag);
    });
};

exports.readTag = (req, res) => {
    const slug = req.params.slug.toLowerCase();

    Tag.findOne({ slug }).exec((error, tag) => {
        if (error) {
            return res.status(400).json({
                error: error
            });
        }
        Journal.find({tags: tag})
        .populate('author','_id name profileURL')
        .populate('categories','_id name slug')
        .populate('tags','_id name slug')
        .select('_id title slug democontent author createdAt updatedAt')
        .exec((error,journals)=>{
            if(error){
                return res.status(400).json({
                    error: error
                })
            } else {
                res.json({tag: tag,journals: journals})
            }
        })
    });
};

exports.deleteTag = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    
    Tag.findOneAndRemove({ slug }).exec((error, data) => {
        if (error) {
            return res.status(400).json({
                error: error
            });
        }
        res.json({
            message: 'Tag deleted successfully'
        });
    });
};