import fetch from 'isomorphic-fetch'
import {API} from '../config'
import {isLoggedIn} from './handleCookie'
import {handleTokenExpiry} from './auth'



//get member profile
export const getProfile = token => {

	let endPoint 

	 if(isLoggedIn() && isLoggedIn().role === "admin"){
	 	endPoint = `${API}/admin/profile`
	 } else if(isLoggedIn() && isLoggedIn().role === "member"){
	 	endPoint = `${API}/member/profile`
	 }

	return fetch(endPoint,{
		method: 'GET',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		}
	})
	.then(response=>{
		handleTokenExpiry(response)
		return response.json()
	})
	.catch(error => console.log(error))
}


export const updateProfile = (token,member) => {

	let endPoint 

	 if(isLoggedIn() && isLoggedIn().role === "admin"){
	 	endPoint = `${API}/admin/update`
	 } else if(isLoggedIn() && isLoggedIn().role === "member"){
	 	endPoint = `${API}/member/update`
	 }

	return fetch(`${API}/admin/update`,{
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: member
	})
	.then(response=>{
		handleTokenExpiry(response)
		return response.json()
	})
	.catch(error => console.log(error))
}


export const getProfileAndJournal = token => {

	let endPoint 

	 if(isLoggedIn() && isLoggedIn().role === "admin"){
	 	endPoint = `${API}/admin/profile/journal`
	 } else if(isLoggedIn() && isLoggedIn().role === "member"){
	 	endPoint = `${API}/member/profile/journal`
	 }

	return fetch(endPoint,{
		method: 'GET',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		}
	})
	.then(response => {
		handleTokenExpiry(response)
		return response.json()
	})
	.catch(error=>console.log(error))
}