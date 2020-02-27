const Category = require('../models/category')
const slugify = require('slugify')


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

exports.readCategory = (req, res) => {
    const slug = req.params.slug.toLowerCase();

    Category.findOne({ slug }).exec((error, category) => {
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