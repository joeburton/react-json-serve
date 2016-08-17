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
			
			// TODO need to match wrapping id and project item id [key]
			return Object.assign({}, state, {
				projects: state.projects.map((project, index) => {
					if (project._id === action.project._id) {
						console.log(project, action.project);
						return Object.assign({}, project, action.project)
					}
					return project
				})
			})

        default:
            return state;
            
    }
}