const formidable = require('formidable'); //handling form data,uploading images
const slugify = require('slugify');
const stripHtml = require('string-strip-html'); //strip-out html
const fs = require('fs');
const Journal = require('../models/journal');
const Category = require('../models/category');
const Tag = require('../models/tag');

/*const _ = require('lodash');*/ //for uploading blog


exports.listJournal = (req,res) => {
    Journal.find({})
    //populate categories and specific fields
    .populate('categories','_id name slug') 
    .populate('tags','_id name slug')
    .populate('author','_id name username')
    //select specific field
    .select('_id title slug content democontent categories tags author createdAt updatedAt')
    .exec((error,journal)=>{
        if(error){
            return res.status(400).json({
                error: error
            });
        }
        res.json(journal)
    })
}

exports.listJournalCategoriesTags = (req,res) => {
    //
}

exports.readJournal = (req,res) => {
    //
}

exports.deleteJournal = (req,res) => {
    //
}

exports.updateJournal = (req,res) => {
    //
}



//create journal
exports.createJournal = (req, res) => {
    let form = new formidable.IncomingForm(); //taking form data
    form.keepExtensions = true;		
    form.parse(req, (error, fields, files) => { //parsing data as javacscript object
        if (error) {
            console.log(error)
            return res.status(400).json({
                error: error
            });
        }

        const { title, content, categories, tags } = fields;


        if (!title || !title.length) {
            return res.status(400).json({
                error: 'title is required'
            });
        }

        if (!content || content.length < 200) {
            console.log(content)
            return res.status(400).json({
                error: 'Content is too short'
            });
        }


        if (!categories || categories.length === 0) {
            return res.status(400).json({
                error: 'At least one category is required'
            });
        }

        if (!tags || tags.length === 0) {
            return res.status(400).json({
                error: 'At least one tag is required'
            });
        }


        let journal = new Journal();
        journal.title = title;
        journal.content = content;
        journal.slug = slugify(title).toLowerCase();
        journal.democontent = stripHtml(content.substring(0, 250)) + ' ...';
        journal.metatitle = `${title} - ${process.env.APP_NAME}`;
        journal.metadesc = stripHtml(content.substring(0, 160)); 
        journal.author = req.user._id; //received from requireLogIn

        let arrayOfCategories = categories && categories.split(',');
        let arrayOfTags = tags && tags.split(',');

        //handling files
        if (files.photo) {
            if (files.photo.size > 10000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                });
            }
            journal.photo.data = fs.readFileSync(files.photo.path);
            journal.photo.contentType = files.photo.type;
        }


        journal.save((error, result) => {
            if (error) {
                return res.status(400).json({
                    error: error
                });
            }

            //save new journal into the database and push array of categories and tags in
            /*res.json(result);*/
            Journal.findByIdAndUpdate(result._id, { $push: { categories: arrayOfCategories } }, { new: true }).exec(
                (error, result) => {
                    if (error) {
                        return res.status(400).json({
                            error: error
                        });
                    } else {
                        Journal.findByIdAndUpdate(result._id, { $push: { tags: arrayOfTags } }, { new: true }).exec(
                            (error, result) => {
                                if (error) {
                                    return res.status(400).json({
                                        error: error
                                    });
                                } else {
                                    res.json(result);
                                }
                            }
                        );
                    }
                }
            );
        });
    });
    //$push: special method by Mongo
};

     