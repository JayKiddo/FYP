import {useState} from 'react'
import {validateAccount} from '../actions/auth'
import Router from 'next/router'

const RegisterComponent = () => {
	const [values,setValues] = useState({
		name: '',
		email:'',
		password: '',
		error: '',
		loading: false,
		message: '', 		//show User success message
		displayForm: true		//hide the form when user created account
	})

	//grab values as user type,grab value from the state and set input component

	const {name,email,password,error,loading,message,displayForm} = values;

	const handleSubmit = event => {
        event.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const member = { name, email, password };

        //submit member info to the database
        validateAccount(member).then(member => {
            if (member.error) {
                setValues({ ...values, error: member.error, loading: false });
                console.log(message.error)
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    loading: false,
                    message: member.message,
                    displayForm: false
                });
            }
        });
    };


	const handleChange = name => event => {
		setValues({...values,[name]: event.target.value})
	}

	const displayLoadingStatus = () => (loading ? <div>Loading.....</div> : '');
	const displayError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
	const displayMessage = () => (message ? <div className="alert alert-success">{message}</div> : '');


	const registerForm = () => {
	if(displayForm)
	return(
		<form onSubmit={handleSubmit}>
		<div className="form-group">
			<input value={name} onChange={handleChange('name')} type="text" className="form-control" placeholder="Your name" /> 
		</div>
		<div className="form-group">
			<input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Your email" /> 
		</div>
		<div className="form-group">
			<input value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="Your password" /> 
		</div>
		<div>
			<button className="btn btn-primary offset-md-5">Register</button>
		</div>
		</form>
	) 
	}

	return (
		<div>
			{displayError()}
			{displayMessage()}
			{displayLoadingStatus()}
			{registerForm()}
		</div>
	)
}

export default RegisterComponent
