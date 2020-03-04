import fetch from 'isomorphic-fetch'
import {API} from '../config'

//create new category
export const createTag = (tag,token) => {
	return fetch(`${API}/tag`,{
		method: 'POST',
		headers : {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify(tag) //stringify javascript object
	})
	.then(response => {
		return response.json()
	})
	.catch(error => console.log(error))
}

export const listTag = () => {
	return fetch(`${API}/tags`,{
		method: 'GET'
	})
	.then(response => {
		return response.json()
	})
	.catch(error => console.log(error))
}

export const listSingleTag = (slug) => {
	return fetch(`${API}/tag/${slug}`,{
		method: 'GET'
	})
	.then(response => {
		return response.json()
	})
	.catch(error => console.log(error))
}

export const deleteTag = (slug,token) => {
	return fetch(`${API}/tag/${slug}`,{
		method: 'DELETE',
		headers : {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		}
	})
	.then(response => {
		return response.json()
	})
	.catch(error => console.log(error))
}