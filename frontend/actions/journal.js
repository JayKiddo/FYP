 import fetch from 'isomorphic-fetch';
import { API } from '../config';
import queryString from 'query-string'
import {isLoggedIn} from './handleCookie'
import {handleTokenExpiry} from './auth'

export const listJournals = (skip,limit) => {
    //skip and limit are sent from client side
    const data = {
        skip,
        limit
    }

    return fetch(`${API}/blogs-categories-tags`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)   
    })
        .then(response => {
            return response.json();
        })
        .catch(error => console.log(error));
};

export const createJournal = (journal, token) => {

    let endPoint 

    if(isLoggedIn() && isLoggedIn().role === "admin"){
        endPoint = `${API}/journal`
    } else if (isLoggedIn() && isLoggedIn().role === "member"){
        endPoint = `${API}/member/journal`
    }

    return fetch(`${endPoint}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: journal
    })
        .then(response => {
            handleTokenExpiry(response)
            return response.json();
        })
        .catch(error => console.log(error));
};




export const readJournal = slug => {
    return fetch(`${API}/journal/${slug}`,{
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(error=>console.log(error))
}

export const listRelatedJournal = (journal) => {
    //skip and limit are sent from client side

    return fetch(`${API}/journals/relatedJournal`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(journal)   
    })
        .then(response => {
            return response.json();
        })
        .catch(error => console.log(error));
};

export const deleteJournal = (slug,token) => {

    let endPoint

    if(isLoggedIn() && isLoggedIn().role === "admin"){
        endPoint = `${API}/journal/${slug}`
    } else if (isLoggedIn() && isLoggedIn().role === "member") {
        endPoint = `${API}/member/journal/${slug}`
    }
    
    return fetch(endPoint,{
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}` 
        }
    })
    .then(response=>{
        handleTokenExpiry(response)
        return response.json()
    })
    .catch(error => console.log(error))
}

export const updateJournal = (journal,token,slug) => {

    let endPoint

    if(isLoggedIn() && isLoggedIn().role === "admin"){
        endPoint = `${API}/journal/${slug}`
    } else if (isLoggedIn() && isLoggedIn().role === "member") {
        endPoint = `${API}/member/journal/${slug}`
    }

    return fetch(endPoint, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: journal
    })
        .then(response => {
            handleTokenExpiry(response)
            return response.json();
        })
        .catch(error => console.log(error));
};

//send params from frontend
export const listSearch = (params) => {
    console.log('search params',params) //assumption: params is an object
    let query = queryString.stringify(params)   
    console.log('query params',query)   //query = object stringified 

    return fetch(`${API}/journals/search?${query}`,{
        method: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .catch(error=> console.log(error))
}

export const listJournalForManage = (username) => {

    return fetch(`${API}/${username}/journals`,{
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(error=>console.log(error))
}

