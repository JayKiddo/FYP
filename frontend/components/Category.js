import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { isLoggedIn, getCookie } from '../actions/handleCookie';
import { createCategory,listCategory,deleteCategory } from '../actions/category';

const Category = () => {
    const [values, setValues] = useState({
        name: '',
        error: false,
        categories: [],
        isReload: false
    });

    const { name, error, categories,isReload } = values;
    const token = getCookie('token');


    useEffect(()=>{ //call when state is changed 
    	loadCategories()
    },[isReload])  //localCategories is invoked only when reload change value

    //load all categories when the page is mounted(lifecycle)
    const loadCategories = () => {
    	listCategory().then(categories=>{
    		if(categories.error){
    			console.log(categories.error)
    		} else {
    			setValues({...values,categories: categories})
    		}
    	})
    }

    const showCategories = () => {
    	return categories.map((item,index)=>{
    		return(
    		  <button onDoubleClick={() => handleDelete(item.slug)}
    		   title="Double click to delete" 
    		   key={index} 
    		   className="btn btn-outline-primary mr-1 ml-1 mt-3">
                    {item.name}
               </button>
               )
    	})
    }

    const handleDelete = slug => {
    	let answer = window.confirm('Are you sure you want to delete this category?')
    	if (answer) {
    		deleteCategory(slug, token).then(data => {
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
        createCategory({ name }, token).then(category => {
            if (category.error) {
                setValues({ ...values, error: category.error });
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
    		return <p className="text-danger">Category already existed</p>
    	}
    }

    const removeMessage = () => {
    	setValues({ ...values,error: false});
    }

    const newCategoryForm = () => (
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
            <h3 className="text-muted">Categories</h3>
    		{showDupplicationError()}
    		
    		<div onClick={removeMessage}> 
    			{newCategoryForm()}
    			{showCategories()}
    		</div>
    	</React.Fragment>;
};

export default Category;