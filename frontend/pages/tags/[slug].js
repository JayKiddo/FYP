import Link from 'next/link'
import Layout from '../../components/Layout'
import {useState,useEffect} from 'react'
import {listSingleTag} from '../../actions/tag'
import {API,APP_NAME} from '../../config'
import renderHTML from 'react-render-html'
import moment from 'moment'
import SingleJournal from '../../components/Journal/SingleJournal'
import {withRouter} from 'next/router'

const Tags = ({tag,journals}) => {

const showJournals = () => {
	return journals.map((journal,index)=>{
		return <SingleJournal key={index} journal={journal} />
	})
}

	return (
		<React.Fragment>
			<Layout>
				<main>
					<header>
						<div className="container-fluid">
							<div className="col-md-12 pt-3">
								<h1 className="display-4 text-center">
									#{tag.name}
								</h1>
								{showJournals()}
							</div>
						</div>
					</header>
				</main>
			</Layout>
		</React.Fragment>
	)
}

Tags.getInitialProps = (router) => {
	return listSingleTag(router.query.slug).then((data)=>{
		if(data.error){
			console.log(data.error)
		} else {
			return {
				tag: data.tag,
				journals: data.journals
			}
		}
	})
}


export default withRouter(Tags)
