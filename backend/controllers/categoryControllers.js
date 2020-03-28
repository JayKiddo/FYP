const Category = require('../models/category')
const slugify = require('slugify')
const Journal = require('../models/journal')


exports.createCategory = (req, res) => {
    const {name} = req.body;
    let slug = slugify(name).toLowerCase();

    let newCategory = new Category({name,slug});

    newCategory.save((error, category) => {
        if (error) {
            return res.status(400).json({
                error: 'Duplicated Category'
            });
        }
        res.json(category);
    });
};

exports.listCategory = (req, res) => {
    Category.find({}).exec((error, category) => {
        if (error) {
            return res.status(400).json({
                error: error
            });
        }
        res.json(category);
    });
};



exports.deleteCategory = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    
    Category.findOneAndRemove({ slug }).exec((error, data) => {
        if (error) {
            return res.status(400).json({
                error: error
            });
        }
        res.json({
            message: 'Category deleted successfully'
        });
    });
};

exports.readCategory = (req, res) => {
    const slug = req.params.slug.toLowerCase();

    Category.findOne({ slug }).exec((error, category) => {
        if (error) {
            return res.status(400).json({
                error: error
            });
        }
        Journal.find({categories: category})
        .populate('categories','_id name slug')
        .populate('tags','_id name slug')
        .populate('author','_id name profileURL')
        .select('_id title slug democontent author createdAt updatedAt')
        .exec((error,journals)=>{
            if(error){
                return res.status(400).json({
                    error: error
                })
            }
            res.json({category: category, journals: journals})
        }) 
    });
};