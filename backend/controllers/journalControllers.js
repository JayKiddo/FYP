const formidable = require('formidable'); //handling form data,uploading images
const slugify = require('slugify');
const stripHtml = require('string-strip-html'); //strip-out html
const fs = require('fs');
const Journal = require('../models/journal');
const Category = require('../models/category');
const Tag = require('../models/tag');

const _ = require('lodash');

exports.listJournal = (req,res) => {
    Journal.find({})
    //populate categories and specific fields
    .populate('categories','_id name slug') 
    .populate('tags','_id name slug')
    .populate('author','_id name username')
    .sort({createdAt: -1}) //-1 is descending
    //select specific field
    .select('_id title slug democontent categories tags author createdAt updatedAt')
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
    //loading journal on request
    //additional request is sent when loading more journals
    //Pagination
    let limit = req.body.limit ? parseInt(req.body.limit) : 10
    let skip = req.body.skip ? parseInt(req.body.skip) : 0

    let journals
    let categories
    let tags

    Journal.find({})
    //populate categories and specific fields
    .populate('categories','_id name slug') 
    .populate('tags','_id name slug')
    .populate('author','_id name username profileURL')
    //latest created journals are sorted first
    .sort({createdAt: -1})
    .skip(skip)
    .limit(limit)
    .select('_id title slug democontent categories tags author createdAt updatedAt')
    .exec((error,journalData)=>{
        if(error){
            return res.json({
                error: error
            })
        }
        journals = journalData //all journals is here
        //listing all categories
        Category.find({}).exec((error,categoriesData)=>{
            if(error){
                return res.json({
                    error: error
                })
            }
            categories = categoriesData
            //get all tags
            Tag.find({}).exec((error,tagData)=>{
                if(error){
                    return res.json({
                        error: error
                    })
                }
                tags = tagData
                //return all variables
                res.json({journals,categories,tags,size: journals.length})
            })
        })
    })


}

//return a single journal
exports.readJournal = (req,res) => {
    const slug = req.params.slug.toLowerCase(); //pass slug from req params
    console.log(req.params)
    Journal.findOne({slug})
    .populate('categories','_id name slug') 
    .populate('tags','_id name slug')
    .populate('author','_id name username')
    //select specific field
    .select('_id title content slug metatitle metadesc categories tags author createdAt updatedAt')
    .exec((error,journal)=>{
        if(error){
            return res.json({
                error: error
            })
        }
        res.json(journal)
    })
}

exports.deleteJournal = (req,res) => {
    const slug = req.params.slug.toLowerCase();

    Journal.findOneAndRemove({slug}).exec((error,journal)=>{
        if(error){
            return res.json({
                error: error
            })
        }
        res.json({
            message: "Journal Deleted"
        })
    })
}



//update journal
exports.updateJournal = (req,res) => {
    const slug = req.params.slug.toLowerCase();
    Journal.findOne({slug}).exec((error,oldJournal)=>{
        if(error){
            return res.json({
                error: error
            })
        }
        //set journal data to form data 
        let form = new formidable.IncomingForm();
        form.keepExtensions = true;
        //parse request and 
        form.parse(req, (error, fields, files) => { //parsing data as javacscript object
        if (error) {
            console.log(error)
            return res.status(400).json({
                error: error
            });
        }

        const { title, content, categories, tags ,metadesc } = fields


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

        //Apply SEO principles
        let oldSlug = oldJournal.slug
        //merge old data to new data
        oldJournal=_.merge(oldJournal,fields)
        //setting slug of updated journal to the old slug
        oldJournal.slug = oldSlug 

        if(content){
            oldJournal.democontent = content.substring(0, 250) + ' ...';
            oldJournal.metadesc = stripHtml(content.substring(0, 250)) + ' ...';
        }

         if(categories){
            oldJournal.categories = categories.split(',')
        }

        if(tags){
            oldJournal.tags = tags.split(',')
        }

        //handling files
        if (files.photo) {
            if (files.photo.size > 10000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                });
            }
            oldJournal.photo.data = fs.readFileSync(files.photo.path);
            oldJournal.photo.contentType = files.photo.type;
        }

        //update journal after merging new contents
        oldJournal.save((error, result) => {
            if (error) {
                return res.status(400).json({
                    error: error
                });
            }
            res.json(result)
        });
    });

    })
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
        journal.democontent = content.substring(0, 250) + ' ...';
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

exports.showPhoto = (req,res) => {
    const slug = req.params.slug.toLowerCase()
    Journal.findOne({slug})
    .select('photo')
    .exec((error,journal)=>{
        if(error){
            return res.status(400).json({
                error: error
            })
        }
        //set content type for response
        res.set('Content-Type',journal.photo.contentType)
        res.send(journal.photo.data)
    })
}

exports.listRelatedJournals = (req,res) => {
    const {_id,categories} = req.body.journal

    Journal.find({_id: {$ne: _id},categories: {$in: categories}})
    .limit(3)
    .populate('author','_id name profileURL')
    .select('_id title slug democontent author createdAt updatedAt')
    .exec((error,journals)=>{
        if(error){
            return res.status(400).json({
                error: error
            })
        } 
        res.json(journals)
    })
}


exports.listSearch = (req,res) => {
    const {search} = req.query
    if(search) {
        Journal.find({ title: { $regex: search, $options: 'i' } })
        .select('-photo -content')
        .exec((error,journals)=>{
            if(error){
                return res.status(400).json({
                    error: error
                })
            }
            res.json(journals)
        })
    }
}

