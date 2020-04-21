import Layout from '../components/Layout'
import About from '../components/About'
import Link from 'next/link'
import {withRouter} from 'next/router'

const AboutPage = () => {
 return (
 	<Layout>
 		<h2 className="col-md-2 offset-md-5">Contact Form</h2>
			<div className="row">
				<div className="col-md-2 offset-md-5">
					<About/>
				</div>
			</div>
 	</Layout>
 )
}

export default AboutPage