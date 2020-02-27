import {useEffect} from 'react'
import {isLoggedIn} from '../actions/handleCookie'
import Router from 'next/router'

//funtion will be called when component is rendered
const Member = ({children}) => {
	useEffect(()=>{
		if(!isLoggedIn()) {
			Router.push('/register')
		}
	},[])
	return <React.Fragment>
		{children}
	</React.Fragment>
} 

export default Member