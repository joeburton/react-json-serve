var projectsInitialState = {
    projects: []
};

export default function(state = projectsInitialState, action) {
    switch(action.type) {
        
        case 'GET_PROJECTS':

            var newState = Object.assign({}, state)
            newState.projects = action.projects;
            return newState;
		
		case 'ADD_PROJECT':

			var newState = Object.assign({}, state);
			newState.projects.push(action.project);

			return newState;
			
        case 'EDIT_PROJECT':
			
			return Object.assign({}, state, {
				projects: state.projects.map((project, index) => {
					if (project._id === action.project._id) {
						// update the project 
						project.company = action.project.company;
						project.projects[action.project.key].description = action.description;
						project.projects[action.project.key].link = action.project.link;
						project.projects[action.project.key].project = action.project.project;
						project.projects[action.project.key].skills = action.project.skills;
					}
					return project;
				})
			})

        default:
            return state;
            
    }
}