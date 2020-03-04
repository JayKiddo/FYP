import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { isLoggedIn, getCookie } from '../actions/handleCookie';
import { createTag,listTag,deleteTag } from '../actions/tag';

const Tag = () => {
    const [values, setValues] = useState({
        name: '',
        error: false,
        tags: [],
        isReload: false
    });

    const { name, error,tags,isReload } = values;
    const token = getCookie('token');


    useEffect(()=>{ //call when state is changed 
    	loadTags()
    },[isReload])  //localCategories is invoked only when reload change value

    //load all categories when the page is mounted(lifecycle)
    const loadTags = () => {
    	listTag().then(tags=>{
    		if(tags.error){
    			console.log(tags.error)
    		} else {
    			setValues({...values,tags: tags})
    		}
    	})
    }

    const showTags = () => {
    	return tags.map((item,index)=>{
    		return(
    		  <button onDoubleClick={() => handleDelete(item.slug)}
    		   title="Double click to delete" 
    		   key={index} 
    		   className="btn btn-outline-primary mr-1 ml-1 mt-3">
                    #{item.name}
               </button>
               )
    	})
    }

    const handleDelete = slug => {
    	let answer = window.confirm('Are you sure you want to delete this tag?')
    	if (answer) {
    		deleteTag(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, error: false, name: '', isReload: !isReload });
            }
        });
    	}
    }


    const handleSubmit = event => {
        event.preventDefault();
        createTag({ name }, token).then(tag => {
            if (tag.error) {
                setValues({ ...values, error: tag.error});
            } else {
                setValues({  ...values, error: false, name: '',isReload: !isReload});
            }
        });
    };

    const handleChange = event => {
        setValues({ ...values, name: event.target.value, error: false, removed: '' });
    };

    const showDupplicationError = () => {
    	if(error){
    		return <p className="text-danger">Tag already existed</p>
    	}
    }

    const removeMessage = () => {
    	setValues({ ...values,error: false});
    }

    const newtagForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" className="form-control" onChange={handleChange} value={name} required />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">
                    Create
                </button>
            </div>
        </form>
    );

    return <React.Fragment>
            <h3 className="text-muted">Tags</h3>
    		{showDupplicationError()}  		
    		<div onClick={removeMessage}> 
    			{newtagForm()}
    			{showTags()}
    		</div>
    	</React.Fragment>;
};

export default Tag;