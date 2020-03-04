import fetch from 'isomorphic-fetch';
import { API } from '../config';

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