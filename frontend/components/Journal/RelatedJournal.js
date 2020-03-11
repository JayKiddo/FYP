import Link from 'next/link'
import renderHTML from 'react-render-html'
import moment from 'moment'
import {API} from '../../config'


const RelatedJournal = ({ journal }) => {
	return (
			<div className="card">
				<section>
					<Link href={`/journals/${journal.slug}`}>
						<a>
							<img 
									className="img img-fluid" 
									style={{maxHeight: 'auto',width: '100%'}} 
									//making request to photo routes
									src={`${API}/journal/photo/${journal.slug}`}
									alt={journal.title}
									/>
						</a>
					</Link>
				</section>

				<div className="card-body">
					<section>
						<Link href={`/journals/${journal.slug}`}>
							<a><h5>{journal.title}</h5></a>
						</Link>
						<p className="card-text">
							{renderHTML(journal.democontent)}
						</p>
					</section>
				</div>

				<div className="card-body">
					Created At: {moment(journal.updatedAt).fromNow()}
				</div>

			</div>
	)
}

export default RelatedJournal