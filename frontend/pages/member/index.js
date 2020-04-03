import Layout from '../../components/Layout'
import Member from '../../components/Member'
import Link from 'next/link'
import {getProfileAndJournal} from '../../actions/member'
import {useEffect,useState} from 'react'
import {getCookie} from '../../actions/handleCookie'
import moment from 'moment'
import {API} from '../../config'

const MemberDashboard = () => {
	const [member,setMember] = useState({})
	const [journals,setJournals] = useState([])

	const token = getCookie('token')

	useEffect(()=>{
		loadProfileAndJournal()
	},[])

	const {username,name,createdAt} = member

	const loadProfileAndJournal = () => {
		getProfileAndJournal(token).then(data=>{
			if(data.error){
				console.log(data.error)
			} else {
				setMember(data.member)
				setJournals(data.journals)
			}
		})
	}

	const showMemberJournal = () => {
		return journals.map((journal,index)=>{
			return (
				<div className="mt-2 mb-2" key={index}>
					<Link href={`/journals/${journal.slug}`}>
						<a className="lead">{journal.title}</a>
					</Link>
				</div>
			)
		})
	}

	return (
		<React.Fragment>
		<Layout>

				<div className="container-fluid">

					<div className="row">
						<div className="col-md-12">
							<div className="card">
								<div className="card-body">
									<div className="row">
										<div className="col-md-8">
											<h5>{name}</h5>
											<p className="text-muted">User joined {moment(createdAt).fromNow()}</p>
										</div>
										<div className="col-md-4">
											<img 
												src={`${API}/member/photo/${username}`}
												alt="User profile picture"
												style={{maxWidth: '100%',height: '250px'}}
												className="img img-fluid" 
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<br/>

					<div className="pb-5">
					<div className="row">
						<div className="col-md-6">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-light ">Recent journals</h5>
									{showMemberJournal()}
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-light ">Statistics</h5>
									<div className="mt-2 mb-2">{journals.length} journals created</div>
								</div>
							</div>
						</div>
					</div>
					</div>




					<div className="row pb-5" >
						<div className="col-md-12 pt-5 pb-5">
							<h2>Member Dashboard</h2>
						</div>
						<div className="col-md-6">
							<ul className="list-group">

								<li className="list-group-item">
		  							<Link href="/member/update">
		  								<a>Update Profile</a>
		  							</Link>
	  							</li>

	  							<li className="list-group-item">
		  							<Link href="/member/journal">
		  								<a>Create Journal</a>
		  							</Link>
	  							</li>

	  							<li className="list-group-item">
		  							<Link href="/member/journal-manage">
		  								<a>Update/Delete Journal</a>
		  							</Link>
	  							</li>

							</ul>
						</div>
						<div className="col-md-6">
								<ul className="list-group">

								<li className="list-group-item">
		  							<Link href="/member/update">
		  								<a>A feature</a>
		  							</Link>
	  							</li>

	  							<li className="list-group-item">
		  							<Link href="/member/journal">
		  								<a>A feature</a>
		  							</Link>
	  							</li>

	  							<li className="list-group-item">
		  							<Link href="/member/journal-manage">
		  								<a>A feature</a>
		  							</Link>
	  							</li>

							</ul>
						</div>
					</div>
				</div>

		</Layout> 
		</React.Fragment>
	)
}


export default MemberDashboard;