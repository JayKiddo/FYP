import Layout from '../components/Layout'
import LoginComponent from '../components/LoginComponent'
import Link from 'next/link'

const Login = () => {
	return (
		<Layout>
			<h1 className="text-center pt-4 pd-4">Log In</h1>
			<div className="row">
				<div className="col-md-2 offset-md-5">
					<LoginComponent/>
				</div>
			</div>
		</Layout>
	)
}

export default Login
