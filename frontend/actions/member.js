import fetch from 'isomorphic-fetch'
import {API} from '../config'
import {isLoggedIn} from './handleCookie'



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
		return response.json()
	})
	.catch(error => console.log(error))
}


export const updateProfile = (token,member) => {
	return fetch(`${API}/member/update`,{
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: member
	})
	.then(response=>{
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
		return response.json()
	})
	.catch(error=>console.log(error))
}