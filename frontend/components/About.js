import {useState} from 'react'
import {sendMail} from '../actions/contact'

const About = () => {

	const [values,setValues] = useState({
		name:"",
		email:"",
		message:"",
		error:"",
		success:""
	})

	const {name,email,message,error,success} = values

	const handleSubmit = () => {
		event.preventDefault()
		let mail = {name,email,message} 

		//send mail
		sendMail(mail).then(result=>{
			if(result.error){
				setValues({...values,error: result.error})
			} else {
				setValues({...values,success: result.success,name:"",email:"",message:""})
			}
		})
		
	}

	const handleChange = name => event => {
		const value = event.target.value
		setValues({...values, [name]:value })
	}

	const displayStatus = () => {
		if(error){
			return <div className="alert alert-danger">{error}</div>
		} else if(success){
			return <div className="alert alert-success">Message Sent</div>
		}
	}

	const displayForm = () => {
		return (
			<form onSubmit={handleSubmit}>
				<div className="form-group pt-2 pb-2">
					<input onChange={handleChange('name')} value={name}  className="form-control" type="text" placeholder="Your name" />
				</div>
				<div className="form-group pt-2 pb-2">
					<input onChange={handleChange('email')} value={email} className="form-control" type="email" placeholder="Your email" />
				</div>
				<div className="form-group pt-2 pb-2">
					<textarea onChange={handleChange('message')} value={message} className="form-control" type="text" placeholder="Write your message and feedbacks here"/>
				</div>
				<button className="btn btn-primary offset-md-4">Submit</button>
			</form>
		)
	}

	return (
		<div>
			{displayStatus()}
			{displayForm()}
		</div>
	)
}

export default About