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