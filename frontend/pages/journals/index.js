//build-in component for sticking elements to 'head' of the page
import Head from 'next/head'

import Link from 'next/link'
import Layout from '../../components/Layout'
import {useState} from 'react'
import {listJournals} from '../../actions/journal'
import {API} from '../../config'
import renderHTML from 'react-render-html'
import moment from 'moment'
import SingleJournal from '../../components/Journal/SingleJournal'
//need to write a metatitle and meta description,opengraph title descrip

const Journal = ({journals,categories,tags,size}) => {
	const showAllCategories = () => {
		return categories.map((category,index)=>{
			return <Link key={index} href={`/categories/${category.slug}`}>
				<a className="btn btn-primary mr-1 ml-1 mt-3">{category.name}</a>
			</Link>
		})
	}


	const showAllJournals = () => {
		return journals.map((journal,index)=>{
			return <article key={index}>
				<SingleJournal journal={journal} />
				<hr/>
			</article>
		})
	}


	return(
		<React.Fragment>
			<Layout>
				<main>
					<div className="container-fluid">
					<header>
						<div className="col-md-12 pt-3">
							<h1 className="display-4 font-weight-bold text-center">Journals</h1>
						</div>
						<section>
						
						<div className="display-4">Journal Categories: {showAllCategories()} </div>

						</section>
						<br/>
					</header>
					</div>
					<div className="container-fluid">
						<div className="row">
						<div className="col-md-12">{showAllJournals()}</div>
						</div>
					</div>
				</main>
			</Layout>
		</React.Fragment>
	)
}

//using lifecycle method,make request to backend and return the data
Journal.getInitialProps = () => {
	return listJournals().then(data=>{
		if (data.error) {
			console.log(data.error)
		} else {
			//return properties from response
			//props can be passed to funtion to be rendered
			return {
				journals: data.journals,
				categories: data.categories,
				tags: data.tags,
				size: data.size
			}
		}
	})
}

Journal.defaultProps = {
	name: "Duc"
}


export default Journal

//getInitialProps: server-side rendered method. Can only be used on pages, not in the components
//server side render the page