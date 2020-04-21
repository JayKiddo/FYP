import fetch from 'isomorphic-fetch'
import {API} from '../config'
import {removeCookie,removeLocalStorage} from './handleCookie'
import Router from 'next/router'


//handle Token expiration
export const handleTokenExpiry = response => {
	if(response.status === 401){
		logout(()=>{
			Router.push({
				pathname: '/login',
				query: {
					message: 'You session is expired. Please Log In again'
				}
			})
		})
	} else {
		return;
	}
}

export const validateAccount = member => {
	return fetch(`${API}/account-validation`,{
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type':'application/json'
		},
		body: JSON.stringify(member)
	})
	.then(response=>{
		return response.json()
	})
	.catch(error => console.log(error))
}

export const register = token => {
	return fetch(`${API}/register`,{
		method: 'POST',
		headers : {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(token)
	})
	.then(response => {
		return response.json()
	})
	.catch(error => console.log(error))
}


export const login = member => {
	return fetch(`${API}/login`,{
		method: 'POST',
		headers : {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(member)
	})
	.then(response => {
		return response.json()
	})
	.catch(error => console.log(error))
}

export const logout = next => {
	removeCookie('token')
	removeLocalStorage('member')
	next()

	return fetch(`${API}/logout`, {
		method: 'GET'
	})
	.then(response =>{
		console.log('Logged out successfully')
	})
	.catch(error => console.log(error));
}

export const updateMember = (member,next) => {
	//checking if is it in the client side
	if(process.browser){
		if(localStorage.getItem('member')){
			let oldMember = JSON.parse(localStorage.getItem('member'))
			oldMember = member
			localStorage.setItem('member',JSON.stringify(oldMember));
			next()
		}
	}
}

export const forgotPassword = email => {
	return fetch(`${API}/forgot-password`,{
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type' : 'application/json'
		},
		body: JSON.stringify(email)
	})
	.then(response => {
		return response.json()
	})
	.catch(err=>console.log(err))
}

export const resetPassword = updateInfo => {
	return fetch(`${API}/reset-password`,{
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type' : 'application/json'
		},
		body: JSON.stringify(updateInfo)
	})
	.then(response=>{
		return response.json()
	})
	.catch(err=>console.log(err))
}


