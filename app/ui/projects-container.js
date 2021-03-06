import React from 'react';
import Projects from './projects';
import { connect } from 'react-redux';

const ProjectContainer = React.createClass({
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
            // get edit field elements
            let editProjectEle = document.querySelectorAll('.edit-project')[0],
                fieldsWrapper = editProjectEle.querySelectorAll('.edit-fields')[0],
                name = editProjectEle.querySelectorAll('.project-name')[0],
                company = editProjectEle.querySelectorAll('.company')[0],
                link = editProjectEle.querySelectorAll('.link')[0],
                skills = editProjectEle.querySelectorAll('.skills')[0],
                description = editProjectEle.querySelectorAll('.description')[0];

            if (editProjectEle.classList.contains('hidden')) {
                editProjectEle.classList.remove("hidden");    
            }

            // set edit field values
            // @TODO get vales from html or pass them as props? Need to research futher.
            fieldsWrapper.setAttribute('data-id', e.target.getAttribute('data-id'));
            name.value = 'www';
            company.value = 'company';
            link.value = 'link';
            skills.value = 'skills';
            description.value = 'description';

        }
    }
}

export default connect(stateToProps, dispatchToProps)(ProjectContainer)
