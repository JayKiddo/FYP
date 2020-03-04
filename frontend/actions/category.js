import fetch from 'isomorphic-fetch'
import {API} from '../config'

//create new category
export const createCategory = (category,token) => {
	return fetch(`${API}/category`,{
		method: 'POST',
		headers : {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify(category) //stringify javascript object
	})
	.then(response => {
		return response.json()
	})
	.catch(error => console.log(error))
}

export const listCategory = () => {
	return fetch(`${API}/categories`,{
		method: 'GET'
	})
	.then(response => {
		return response.json()
	})
	.catch(error => console.log(error))
}

export const listSingleCategory = (slug) => {
	return fetch(`${API}/category/${slug}`,{
		method: 'GET'
	})
	.then(response => {
		return response.json()
	})
	.catch(error => console.log(error))
}

export const deleteCategory = (slug,token) => {
	return fetch(`${API}/category/${slug}`,{
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