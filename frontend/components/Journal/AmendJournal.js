import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { withRouter } from 'next/router'; //use router,export component with router
import { getCookie, isLoggedIn } from '../../actions/handleCookie';
import { listCategory } from '../../actions/category';
import { listTag } from '../../actions/tag';
import { createJournal,readJournal,updateJournal } from '../../actions/journal';
import dynamic from 'next/dynamic';
import { API } from '../../config';

//this modules will be imported dynamically
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false }); //making sure that react quill only runs in frontend

const AmendJournal = ({router}) => {

    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    const [checkedCategory, setCheckedCategory] = useState([]); 
    const [checkedTag, setCheckedTag] = useState([]); 

    const [content,setContent] = useState('')
    const [values,setValues] = useState({
        error: '',
        success:'',
        formData: '',
        title: ''
    })

    const {error,success,formData,title} = values
    const token = getCookie('token'); 

    useEffect(()=>{
        setValues({...values,formData: new FormData()})
        loadJournal()
        loadCategories()
        loadTags()
    },[router])


    const loadJournal = () => {
        const slug = router.query.slug
        if(slug){
            readJournal(slug).then(data=>{
                if(data.error){
                    console.log(data.error)
                } else {
                    setValues({...values,title: data.title})
                    setContent(data.content)
                    loadCheckedCategories(data.categories)
                    loadCheckedTags(data.tags)
                }
            })
        }
    }

      const loadCategories = () => {
        listCategory().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setCategories(data);
            }
        });
    };

    const loadTags = () => {
        listTag().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setTags(data);
            }
        });
    };

        const loadCheckedCategories = categories => {
        let oldCategories = []
        categories.map((category)=>{
            oldCategories.push(category._id)
        })
        console.log(oldCategories)
        setCheckedCategory(oldCategories)

    }

      const loadCheckedTags = tags => {
        let oldTags = []
        tags.map((tag)=>{
            oldTags.push(tag._id)
        })
        console.log(oldTags)
        setCheckedTag(oldTags)

    }

    const checkOldCategories = category => {
         const oldCategory = checkedCategory.indexOf(category)
         if(oldCategory === -1){
            return false
         } else {
            return true
         }
    }

      const checkOldTags = tag => {
         const oldTag = checkedTag.indexOf(tag)
         if(oldTag === -1){
            return false
         } else {
            return true
         }
    }

    const handleContent = event => {
        setContent(event)
        formData.set('content', event)
    }

    const setData = () => {
        formData.set("title",title)
        formData.set("content",content)
        formData.set("categories",checkedCategory)
        formData.set("tags",checkedTag)
    }

    const editJournal = event => {
        event.preventDefault()
        setData()
        updateJournal(formData,token,router.query.slug).then(data=>{
            if(data.error) {
                setValues({...values,error: data.error})
            } else {
                setValues({...values,title: '',success: `Journal titled ${data.title} is updated`})
                if(isLoggedIn() && isLoggedIn().role === 'admin'){
                    Router.replace(`/admin/${router.query.slug}`)
                } else if (isLoggedIn() && isLoggedIn().role === 'member'){
                    Router.replace(`/member`)
                }
            }
        })
    }


  const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, formData, error: '' });
    };

    const handleCheckCategory = category => () => {
        setValues({ ...values, error: '' });
        // return the first index or -1
        const clickedCategory = checkedCategory.indexOf(category);
        const all = [...checkedCategory];

        if (clickedCategory === -1) {
            all.push(category);
        } else {
            all.splice(clickedCategory, 1);
        }
        console.log(all);
        setCheckedCategory(all); //update state
        formData.set('categories', all);
    };


     const handleCheckTag = tag => () => {
        setValues({ ...values, error: '' });
        // return the first index or -1
        const clickedTag = checkedTag.indexOf(tag);  //finding index of that tag
        console.log(clickedTag);
        const all = [...checkedTag];

        if (clickedTag === -1) { //if that tag is not in checkedTag array
            all.push(tag);  //push tag
        } else {
            all.splice(clickedTag, 1);
        }
        console.log(all);
        setCheckedTag(all); //update state
        formData.set('tags', all);
    };

     const showCategories = () => {
        return (
            categories.map((category, index) => (
                <li key={index} className="list-unstyled">
                    <input onChange={handleCheckCategory(category._id)} checked={checkOldCategories(category._id)}  type="checkbox" className="mr-2" />
                    <label className="form-check-label">{category.name}</label>
                </li>
            ))
        );
    }
    
    const showTags = () => {
        return (
            tags.map((tag,index) => (
                <li key={index} className="list-unstyled">
                    <input onChange={handleCheckTag(tag._id)} checked={checkOldTags(tag._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">#{tag.name}</label>
                </li>
            ))
        );
    }

    const showStatus = () => {
        if(success){
            return <div className="alert alert-success">{success}</div>
        } else if(error){
            return <div className="alert alert-danger">{error}</div>
        }
    }

    const updateJournalForm = () => {
        return (
            <form onSubmit={editJournal}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" 
                    value={title} 
                    placeholder="Write your title here"
                    onChange={handleChange('title')} />
                </div>

                <div className="form-group">
                    <ReactQuill 
                    modules={AmendJournal.modules} 
                    formats={AmendJournal.formats} 
                    value={content} 
                    placeholder="Write something..."
                    onChange = {handleContent} />
                </div>

                <div>
                    <button type="submit" className="btn btn-primary mb-2">
                        Update
                    </button>
                </div>
            </form>
        );
    };


    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    {showStatus()}
                </div>


                <div className="col-md-8">
                {content && (
                    <img className="center" style={{ width: 'auto',height: 'auto' }} src={`${API}/journal/photo/${router.query.slug}`} alt={title} />
                    )}
                </div>

                <div className="col-md-8">
                    {updateJournalForm()}
                </div>

                 <div className="col-md-4">
                        <div className="form-group pb-2">
                            <h5>Featured Image</h5>
                            <hr/>
                            <small className="text-muted">Maximum Size: 1MB</small>
                            <br/>
                            <label className="btn btn-outline-info">
                                <p>Change Featured Image</p>
                                <input onChange={handleChange('photo')} type="file" accept="images/*" hidden/> 
                            </label>
                        </div>
                        <h4>Categories</h4>
                        <hr/>
                        <ul style={{maxHeight: '100px',overflowY: 'scroll'}}>{showCategories()}</ul>
                        <hr/>
                        <h4>Tags</h4>
                        <hr/>
                        <ul style={{map: '100px',overflowY:'scroll'}}>{showTags()}</ul>
                    </div>
            </div>
        </div>
    )
}

AmendJournal.modules = {
    toolbar: [
        [{ header: [1,2,3,4,5,6] }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ]
};
 
AmendJournal.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',    
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block'
];

export default withRouter(AmendJournal)
