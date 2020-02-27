import Layout from '../components/Layout'
import RegisterComponent from '../components/RegisterComponent'
import Link from 'next/link'

const Register = () => {
	return (
		<Layout>
			<h1 className="text-center pt-4 pd-4">Register</h1>
			<div className="row">
				<div className="col-md-2 offset-md-5">
					<RegisterComponent/>
				</div>
			</div>
		</Layout>
	)
}

export default Register
