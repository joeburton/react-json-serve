import axios from 'axios';
import store from 'store';

export function getProjects() {
    return axios.get('http://localhost:3000/projects').then(function(response) {

        store.dispatch({
            type: 'GET_PROJECTS',
            projects: response.data
        })
        
        return response;

    }).catch(function(err) {
        console.error(err);
    });
}
