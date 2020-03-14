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

const JournalUpdate = () => {

    const updateJournalForm = () => {
        return (
            <form></form>
        )
    }

    return <div className="container-fluid">
                <div className="row">
            <div className="col-md-8">
                <p>Update Status</p>
            </div>

            <div className="col-md-8">
                <p>Create Blog Form</p>
            </div>

            <div className="col-md-4">

        <div className="form-group pb-2">
            <h5>Featured Image</h5>
        </div>
         </div>
            </div>
        </div>
}

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

export default JournalUpdate
