import Link from 'next/link'
import renderHTML from 'react-render-html'
import moment from 'moment'
import {API} from '../../config'


const SingleJournal = ({journal}) => {

//loop through categories and return category in jsx code
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
	
		//navigating between dynamic pages
	return (
			<div className="lead pb-4">
					<header>
						<Link href={`/journals/${journal.slug}`}>
							<a><h3 className="pt-3 pb-3">{`${journal.title}`}</h3></a>
						</Link>
					</header>
					<section>
						<p className="mark ml-1 pt-2 pb-2">
							Author: {journal.author.name} || Created At: {moment(journal.updatedAt).fromNow()}
						</p>
					</section>
					<section>
						{showJournalCategories(journal)}
						{showJournalTags(journal)}
						<br/><br/>
						<br/>
					</section>
					<div className="row">
						<div className="col-md-4">
							<section>
									<img 
									className="img img-fluid" 
									style={{maxHeight: '150px',width: 'auto'}} 
									//making request to photo routes
									src={`${API}/journal/photo/${journal.slug}`}
									//seo friendly, this image can be searched in google
									alt={journal.title}
									/>
							</section>
						</div>
						<div className="col-md-8">
						<section>
						<div className="pb-3">{renderHTML(journal.democontent)}</div>
							<Link href={`/journals/${journal.slug}`}>
								<a className="btn btn-primary pt-2">Read more</a>
							</Link>
						</section>
						</div>
					</div>
				</div>
	)
}

export default SingleJournal