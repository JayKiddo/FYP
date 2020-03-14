import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { withRouter } from 'next/router'; //use router,export component with router

import { getCookie, isLoggedIn } from '../../actions/handleCookie';
import { listCategory } from '../../actions/category';
import { listTag } from '../../actions/tag';
import { createJournal } from '../../actions/journal';

import dynamic from 'next/dynamic';

//Quill does not suppport SSR, so it's only loaded and rendered in the browser.
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CreateJournal = ({ router }) => {

  //grabbing journal from local storage and set as default
    const grabJournalInLS = () => {
    	if(typeof window === 'undefined'){
    		return false;
    	}

    	if(localStorage.getItem('journal')){
    		return JSON.parse(localStorage.getItem('journal'))
    	} else {
    		return false
    	}
    }

    //creating state using react Hook
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    const [checkedCategory, setCheckedCategory] = useState([]); // categories
    const [checkedTag, setCheckedTag] = useState([]); // tags

	const [content, setContent] = useState(grabJournalInLS());
    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        status: '',
        formData: '',
        title: '',
        hidePublishButton: false
    });

     const { error, sizeError, status, formData, title, hidePublishButton } = values;
     const token = getCookie('token');

      useEffect(() => {
        //Browser API to create form data
        setValues({ ...values, formData: new FormData() });
        initCategories();
        initTags();
    }, [router]); //when router change,setValue is called

       const initCategories = () => {
        listCategory().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setCategories(data);
            }
        });
    };

       const initTags = () => {
        listTag().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setTags(data);
            }
        });
    };


   const publishJournal = event => {
        event.preventDefault();
        console.log(formData);
        createJournal(formData, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, title: '', error: '', status: `A new journal titled "${data.title}" is created` });
                setContent('');
                setCategories([]);
                setTags([]);
            }
        });
    };

     const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, formData, error: '' });
    };

     const handleBodyContent = event => {
        setContent(event);
        //bug fixed,set wrong name for form data key
        formData.set('content', event);	//populated form data
        console.log(event);
        //save content to local storage
        if (typeof window !== 'undefined') {
            localStorage.setItem('journal', JSON.stringify(event));
        }   
    };

    	//fix re-render issues
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
            //categories && categories.map
            categories.map((category, index) => (
                <li key={index} className="list-unstyled">
                    <input onChange={handleCheckCategory(category._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">{category.name}</label>
                </li>
            ))
        );
    }


        const showTags = () => {
            //tags && tags.map
        return (
            tags.map((tag,index) => (
                <li key={index} className="list-unstyled">
                    <input onChange={handleCheckTag(tag._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">#{tag.name}</label>
                </li>
            ))
        );
    }

    const showStatus = () => {
        if(error) {
            return <div className="alert alert-danger">{error}</div>
        }
        else if(status) {
            return <div className="alert alert-success">{status}</div>
        }
    }

   /* const showStatus = () => {
        return <div className="alert alert-success" style={{display: status ? '' : 'none'}}>{status}</div>
    }*/


    const handleError = name => () => {
        setValues({...values,error: ''})
    }

    //Quill JS handle parsing image to binary string
 const createJournalForm    = () => {
        return (
            <form onSubmit={publishJournal} onClick={handleError()}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" value={title} placeholder="Write your title here" onChange={handleChange('title')}/>
                </div>

                <div className="form-group">
                    <ReactQuill modules={CreateJournal.modules} formats={CreateJournal.formats} value={content} placeholder="Write something..." onChange={handleBodyContent} />
                </div>

                <div>
                    <button type="submit" className="btn btn-primary">
                        Publish
                    </button>
                </div>
            </form>
        );
    };

    //rendering the page here
    return <div className="container-fluid">
    	<div className="row">
            <div className="col-md-8">
            {showStatus()}
            </div>

    		<div className="col-md-8">
    		{createJournalForm()}
    		</div>

    		<div className="col-md-4">

    <div className="form-group pb-2">
	   <h5>Featured Image</h5>
	   <hr/>

	   <small className="text-muted">Maximum Size: 1MB</small>
	   <label className="btn btn-outline-info">Upload Featured image
	       <input onChange={handleChange('photo')} type="file" accept="images/*" hidden/> 
	   </label>
    </div>

    		<h4>Categories</h4>
    		<hr/>
    		<ul style={{maxHeight: '100px',overflowY: 'scroll'}}>{showCategories()}</ul>
    		<h4>Tags</h4>
    		<hr/>
    		<ul style={{maxHeight: '100px',overflowY: 'scroll'}}>{showTags()}</ul>
    		</div>
    	</div>
    </div>;
};

CreateJournal.modules = {
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
 
CreateJournal.formats = [
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

export default withRouter(CreateJournal);