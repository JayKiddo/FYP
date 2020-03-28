import Link from 'next/link'
import Layout from '../../components/Layout'
import {useState,useEffect} from 'react'
import {listSingleCategory} from '../../actions/category'
import {API,APP_NAME} from '../../config'
import renderHTML from 'react-render-html'
import moment from 'moment'
import SingleJournal from '../../components/Journal/SingleJournal'
import {withRouter} from 'next/router'


const Categories = ({category,journals}) => {
	return (
		<React.Fragment>
			<Layout>
				<main>
					<div className="container-fluid">
						
							<div className="col-md-12 pt-3">
								<h1 className="display-4 text-center">{category.name}</h1>
								{journals.map((journal,index)=>{
									return <SingleJournal key={index} journal={journal}/>
								})}
							</div>
					
					</div>
				</main>
			</Layout>
		</React.Fragment>
	)
}

Categories.getInitialProps = (router)  => {
	 return listSingleCategory(router.query.slug).then(data=>{
		if(data.error){
			console.log(data.error)
		} else {
			return {
				category: data.category,
				journals: data.journals
			}
		}
	})
}


export default withRouter(Categories)