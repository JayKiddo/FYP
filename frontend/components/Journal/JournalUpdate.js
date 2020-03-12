import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { withRouter } from 'next/router'; //use router,export component with router
import { getCookie, isLoggedIn } from '../../actions/handleCookie';
import { listCategory } from '../../actions/category';
import { listTag } from '../../actions/tag';
import { createJournal } from '../../actions/journal';

import dynamic from 'next/dynamic';

//this modules will be imported dynamically
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false }); //making sure that react quill only runs in frontend

const JournalUpdate = () => {
    return <div className="container-fluid">
                <div className="row">
            <div className="col-md-8">
            <p>Upadte Status</p>
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

export default JournalUpdate
