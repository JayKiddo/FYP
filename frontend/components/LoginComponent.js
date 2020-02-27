import {useState} from 'react'
import {login} from '.././actions/auth'
import {authenticate,isLoggedIn} from '../actions/handleCookie'
import Router from 'next/router'

const LoginComponent = () => {
	const [values,setValues] = useState({
		email:'',
		password: '',
		error: '',
		loading: false,
		message: '', 		//show User success message
		displayForm: true		//hide the form when user created account
	})

	//grab values as user type,grab value from the state and set input component

	const {email,password,error,loading,message,displayForm} = values;

	const handleSubmit = event => {
        event.preventDefault();
        setValues({ ...values, loading: true, error: false });
        const member = { email, password };

        //submit member info to the database
        login(member).then(member => {
            if (member.error) {
                setValues({ ...values, error: member.error, loading: false });
                console.log(message.error)
            } else {
            	//save user token to cookie
            	//save user info to local storage
            	//authenticate user
            	//redirect user to homepage
            	authenticate(member, () => {
            		if(isLoggedIn() && isLoggedIn().role ==='admin'){
            			Router.push(`/admin`)
            		} else {
            			Router.push(`/member`)
            		}
            	})
            }
        });
    };


	const handleChange = name => event => {
		setValues({...values,[name]: event.target.value})
	}

	const displayLoadingStatus = () => (loading ? <div>Loading.....</div> : '');
	const displayError = () => (error ? <div>{error}</div> : '');
	const displayMessage = () => (message ? <div>{message}</div> : '');


	const loginForm = () => {
	if(displayForm)
	return(
		<form onSubmit={handleSubmit}>
		<div className="form-group">
			<input value={email} onChange={handleChange('email')} type="email" className="formControl" placeholder="Your email" /> 
		</div>
		<div className="form-group">
			<input value={password} onChange={handleChange('password')} type="password" className="formControl" placeholder="Your password" /> 
		</div>
		<div>
			<button className="btn btn-primary offset-md-3">Login</button>
		</div>
		</form>
	) 
	}

	return (
		<div>
			{displayError()}
			{displayMessage()}
			{displayLoadingStatus()}
			{loginForm()}
		</div>
	)
}

export default LoginComponent
