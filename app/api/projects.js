import axios from 'axios';
import store from 'store';

let axiosAjax = {
	getProjects: function() {
	    return axios.get('http://localhost:3000').then(function(response) {
	        store.dispatch({
	            type: 'GET_PROJECTS',
	            projects: response.data
	        })
	        return response;
	    }).catch(function(err) {
	        console.error(err);
	    });
	},
	addProject: function(data) {
		// return axios.post('/projects', {
		// 	firstName: 'Fred',
		// 	lastName: 'Flintstone'
		// })
		// .then(function (response) {
		// 	console.log(response);
		// })
		// .catch(function (error) {
		// 	console.log(error);
		// });
	}
}; 

export default axiosAjax;



