import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './projects';
import EditProjectContainer from './edit-project-container';
import { connect } from 'react-redux';
import axiosAjax from 'api/projects';

const ProjectContainer = React.createClass({

    componentWillMount: function() {
        //axiosAjax.getProjects()
    },

    render: function() {
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
        openEditInput: (e) => {
            let editInputEle = document.querySelectorAll('.edit-project')[0],
                editInputField = editInputEle.querySelectorAll('.edit-project input')[0];

            if (editInputEle.classList.contains('hidden')) {
                editInputEle.classList.remove("hidden");    
            }

            editInputField.setAttribute('data-id', e.target.getAttribute('data-id'));
            editInputField.value = e.target.getAttribute('data-project');
        }
    }
}

export default connect(stateToProps, dispatchToProps)(ProjectContainer)
