import Link from 'next/link'
import Layout from '../../components/Layout'
import {useState,useEffect} from 'react'
import {readJournal,listRelatedJournal} from '../../actions/journal'
import {API,APP_NAME} from '../../config'
import renderHTML from 'react-render-html'
import moment from 'moment'
import RelatedJournal from '../../components/Journal/RelatedJournal'
import {withRouter} from 'next/router'

//dynamic routing,this url will be journals/:slug
//grab router query,make request to backend

//adding router object to component
const readSingleJournal = ({journal,router}) => {

const [related,setRelated] = useState([])	

useEffect(()=>{
	loadRelatedJournal();
},[])

const loadRelatedJournal = () => {
	listRelatedJournal({journal}).then(data=>{
		if(data.error){
			console.log(data.error)
		} else {
			setRelated(data)
		}
	})
}

const showRelatedJournal =() => {
	return related.map((journal,index)=> (
		<div className="col-md-4" key={index}>
			<article>
				<RelatedJournal journal={journal}/>
			</article>
		</div>
	))
}

const showJournalCategories = (journal) => 
			journal.categories.map((category,index)=>{
			return <Link key={index} href={`/categories/${category.slug}`}>
				<a className="btn btn-primary mr-1 ml-1 mt-3">{category.name}</a>
			</Link>
		})
	
	const showJournalTags = (journal) => 
		journal.tags.map((tag,index)=>{
			return <Link key={index} href={`/tags/${tag.slug}`}>
				<a className="btn btn-outline-primary mr-1 ml-1 mt-3">#{tag.name}</a>
			</Link>
		})

 	return <React.Fragment>
 		<Layout>
 			<main>
 				<article>
 					<div className="container-fluid">
 					<section> 
 						<div className="row" style={{marginTop: '20px'}}>
 							<img 
 							src={`${API}/journal/photo/${journal.slug}`} 
 							alt={journal.title} 
 							className="img img-fluid featured-photo"/>
 						</div>
 					</section>

 					<section>
 						<p className="lead mt-3 mark">
 							Author: {journal.author.name} || Created At: {moment(journal.updatedAt).fromNow()}
 						</p>

 						<div className="text-center">
 							<h1>{journal.title}</h1>
 						</div>

 						<div className="pb-3">
 							{showJournalCategories(journal)}
 							{showJournalTags(journal)}
 							<br/>
 							<br/>
 						</div>

 						<div className="container">
 						<section>
 							<div className="col-md-12 lead">{renderHTML(journal.content)}</div>
 						</section>
 						</div>
 						<br/><hr/>
 						<div className="container">
 							<h5 className="text-center pt-4 pb-5">Related Journals</h5>
 							<div className="row">
 							{showRelatedJournal()}
 							</div>
 						</div>

 						<div className="container pb-5">
 							<h5>Comments</h5>
 						</div>
 					</section>

 					</div>
 				</article>
 			</main>
 		</Layout>
 	</React.Fragment>
}

//send query param to backend
//fetching data to get props
readSingleJournal.getInitialProps = (router) =>{
	return readJournal(router.query.slug).then(data=>{
		if(data.error){
			console.log(data)
		} else {
			return {
				journal: data
			}
		}
	})
}

export default withRouter(readSingleJournal)
//router object is returned by withRouter()
//query string is populated by NextJS
