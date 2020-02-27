import fetch from 'isomorphic-fetch'
import {API} from '../config'
import {removeCookie,removeLocalStorage} from './handleCookie'

export const register = member => {
	return fetch(`${API}/register`,{
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
//make request to backend, backend create new user and response in JSON format

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

export const logout = (next) => {
	removeCookie('token')
	removeLocalStorage('member')
	next()

	return fetch(`{API}/logout`, {
		method: 'GET'
	})
	.then(response =>{
		console.log('Logged out successfully')
	})
	.catch(error => console.log(error));
}

