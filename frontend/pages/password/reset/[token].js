import {useState} from 'react'
import {withRouter} from 'next/router'
import Layout from '../../../components/Layout'
import {resetPassword} from '../../../actions/auth'


const ResetPassword = ({router}) => {

const [values,setValues] = useState({
	newPassword:"",
	confirmPassword:"",
	message:"",
	error:"",
	isSent: false
})

const {newPassword,confirmPassword,message,error,isSent} = values

const handleSubmit = e =>{
	e.preventDefault()
	const resetPasswordLink = router.query.token
	if(newPassword === confirmPassword){
		resetPassword({resetPasswordLink,newPassword}).then(data=>{
			if(data.error){
				setValues({...values,error:data.error,})
			} else {
				setValues({...values,message:data.message,newPassword:"",confirmPassword:"",isSent: true})
			}
		})
	}
	else {
		setValues({...values,error: "Password is not match, please confirm your password again",isSent: false})
	}
}

const handleChange = name => e => {
	setValues({...values,[name]: e.target.value,error:""})
}

const showStatus = () => {
	if(error){
			return <div className="alert alert-danger">{error}</div>
		} else if(isSent) {
			return <div className="alert alert-success">{message}</div>
		}
}

const showResetForm = () => {
	if(!isSent){
		return (
			<form onSubmit={handleSubmit}>
				<div className="form-group pt-4">
					<input
						onChange={handleChange("newPassword")}
						className="form-control"
						value={newPassword}
						type="password"
						placeholder="Enter your new password here"
						required
					/>
				</div>

				<div className="form-group pt-4">
					<input
						onChange={handleChange("confirmPassword")}
						className="form-control"
						value={confirmPassword}
						type="password"
						placeholder="Confirm your new password"
						required
					/>
				</div>

				<div>
					<button className="btn btn-primary">Change your password</button>
				</div>

			</form>
		)
	}
}

return (
	<Layout>
		<div className="container">
			<h3>Reset Password</h3>
			{showStatus()}
			{showResetForm()}
		</div>
	</Layout>
)
}

export default withRouter(ResetPassword)