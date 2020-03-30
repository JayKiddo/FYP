import fetch from 'isomorphic-fetch'
import {API} from '../config'


//get member profile
export const getProfile = token => {
	return fetch(`${API}/member/profile`,{
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