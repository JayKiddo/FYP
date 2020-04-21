import {useState} from 'react'
import Layout from '../../components/Layout';
import {forgotPassword} from '../../actions/auth'

const ForgotPassword = () => {
	const [values,setValues] = useState({
		email: '',
		message: '',
		error: '',
		isSent: false
	})

	const {email,message,error,isSent} = values

	const handleChange = e => {
		setValues({...values,email:e.target.value,error:''})
	}

	const handleSubmit = e => {
		e.preventDefault()
		forgotPassword({email}).then((data)=>{
			if(data.error){
				setValues({...values,error:data.error,isSent: false})
			} else {
				setValues({...values,email:'',error:'',isSent: true,message:data.message})
			}
		})
	}

	const showForm = () => {
			if(!isSent){
				return (
					<form onSubmit={handleSubmit}>
					<div className="form-group pt-4">
					<input
						onChange={handleChange}
						value={email}
						type="email" 
						className="form-control"
						placeholder="Please enter your email"
						required
					/>
					<br/>
					<div>
					<button className="btn btn-primary">Submit</button>
					</div>
				</div>
			</form>
			)
		}
	}

	const showStatus = () => {
		if(error){
			console.log(error)
			return <div className="alert alert-danger">{error}</div>
		} else if(isSent) {
			return <div className="alert alert-success">{message}</div>
		}
	}

	return (
		<Layout>
			<div className="container">
				<h3>Forgot Password</h3>
				<hr/>
					{showStatus()}
					{showForm()}
			</div>
		</Layout>
	)
}

export default ForgotPassword