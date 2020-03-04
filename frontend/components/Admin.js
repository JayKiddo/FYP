import {useEffect} from 'react'
import {isLoggedIn} from '../actions/handleCookie'
import Router from 'next/router'


const Admin = ({children}) => {
	
	useEffect(()=>{
		if(!isLoggedIn()) {
			Router.push('/register');
		} else if(isLoggedIn().role !== 'admin'){
			Router.push('/')
		}
	},[])

	return <React.Fragment>
		{children}
	</React.Fragment>
} 

export default Admin