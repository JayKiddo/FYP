import Layout from '../components/Layout'
import LoginComponent from '../components/LoginComponent'
import Link from 'next/link'
import {withRouter} from 'next/router'

const Login = ({router}) => {

	const showError = () => {
		if(router.query.message){
			return <div className="alert alert-danger text-center ">{router.query.message}</div>
		} else {
			return ;
		}
	}

	return (
		<Layout>
			<div className="container-fluid">
			<div className="col-md-6 offset-md-3">
				{showError()}
			</div>

			<h1 className="text-center pt-4 pb-4">Log In</h1>
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<LoginComponent/>
				</div>
			</div>
			</div>
		</Layout>
	)
}

export default withRouter(Login)
