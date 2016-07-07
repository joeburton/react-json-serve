import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './projects';
import EditProjectContainer from './edit-project-container';
import { connect } from 'react-redux';
import { getProjects } from 'api/projects';
import store from 'store';

const ProjectContainer = React.createClass({

    componentWillMount: function() {
        getProjects()
    },

    render: function() {
        console.log(...this.props);
        return (
            <Projects {...this.props} />
        )
    }
});

const stateToProps = function(state) {
    return {
        projects: state.projectReducer.projects
    }
}

const dispatchToProps = function() {
    return {
        onClick: (e) => {
            console.log(e.target.getAttribute('data-id'), e.target.getAttribute('data-project'));
            ReactDOM.unmountComponentAtNode(document.getElementById('edit-container'));
            ReactDOM.render((
                <EditProjectContainer store={store} id={e.target.getAttribute('data-id')} project={e.target.getAttribute('data-project')} />   
            ), document.getElementById('edit-container'));
        }
    }
}

export default connect(stateToProps, dispatchToProps)(ProjectContainer)
