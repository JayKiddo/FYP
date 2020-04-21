import fetch from 'isomorphic-fetch'
import {API} from '../config'


export const sendMail = mail => {
	return fetch(`${API}/contact`,{
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(mail)
	}).then(response=>{
		return response.json()
	}).catch(err => console.log(err))
}