import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { withRouter } from 'next/router'; //use router,export component with router
import { getCookie, isLoggedIn } from '../../actions/handleCookie';
import { listJournalForManage,deleteJournal,updateJournal } from '../../actions/journal';
import renderHTML from 'react-render-html'
import moment from 'moment'

const ManageJournal = ({username,role}) => {

	const [journals,setJournals] = useState([])
	const [message,setMessage] = useState('')
	const token = getCookie('token')

	//when component mount
	useEffect(()=>{
		loadJournals()
	},[])

	const loadJournals = () => {
		listJournalForManage(username).then(data=>{
			if(data.error){
				console.log(data.error)
			} else {
				setJournals(data)
			}
		})
	}

	const removeJournal = (slug,token) => {
		deleteJournal(slug,token).then(data=>{
			if(data.error){
				console.log(data.error)
			} else {
				setMessage(data.message)
				loadJournals()
			}
		})
	}

	const deleteConfirm = (slug,token) => {
			let answer = window.confirm('Delete this journal ?')
			if(answer){
				removeJournal(slug,token)
			}
	}

	const showMessage = () => {
		if(message){
			return <div className="alert alert-warning">{message}</div>
		}
	}

	const showUpdateButton = (journal) => {

		let updateLink = role === 'admin' ? `/admin/${journal.slug}` : `/member/${journal.slug}`

		return (
			<Link href={updateLink}>
				<a className="btn btn-sm btn-warning ml-2">Update</a>
			</Link>
		)
	}

	const showJournals = () => {
		return journals.map((journal,index)=>{
			return (
				<div className="pb-5" key={index}>
				<h3>{journal.title}</h3>
				<p className="mark">
				Written by {journal.author.name}  || Created at {moment(journal.createdAt).fromNow()} 
				</p>
				<button className="btn btn-sm btn-danger" onClick={()=>deleteConfirm(journal.slug,token)}>Delete</button>
				{showUpdateButton(journal)}
				</div>
			)
		})
	}

	return (
		<React.Fragment>
				<div className="row">
					<div className="col-md-12">
						{showMessage()}
						{showJournals()}
					</div>
				</div>	
		</React.Fragment>
	)
}

export default ManageJournal