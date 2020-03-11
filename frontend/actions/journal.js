import fetch from 'isomorphic-fetch';
import { API } from '../config';

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
    return fetch(`${API}/journal`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: journal
    })
        .then(response => {
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

export const listJournalForManage = () => {
    return fetch(`${API}/journals`,{
        method: 'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(error=>console.log(error))
}

export const deleteJournal = (slug,token) => {
    return fetch(`${API}/journal/${slug}`,{
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}` 
        }
    })
    .then(response=>{
        return response.json()
    })
    .catch(error => console.log(error))
}

export const updateJournal = (journal,token,slug) => {
    return fetch(`${API}/journal/${slug}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: journal
    })
        .then(response => {
            return response.json();
        })
        .catch(error => console.log(error));
};

