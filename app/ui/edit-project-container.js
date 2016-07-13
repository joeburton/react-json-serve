import React from 'react';
import EditProject from './edit-project';
import { connect } from 'react-redux';
import store from 'store';

const EditProjectContainer = React.createClass({
    render: function() {
        return (
            <EditProject {...this.props} />
        )
    }
});

const dispatchToProps = function(dispatch) {
    return {
        updateInputField: (e) => {

            var editInput = document.getElementById('edit-input');
            var id = editInput.getAttribute ('data-id');
            var projectName = editInput.value;

            store.dispatch({
                type: 'EDIT_PROJECT',
                project: {
                    "_id": id,
                    "project": projectName,
                    "link": "none",
                    "company": "none",
                    "skills": "Backbone, JavaScript, Jasmine, Require",
                    "description": "Whilst working for lastminute.com I worked on two specific projects. For the first project I created an HTML5, LESS/ CSS3 & JavaScript mobile-first responsive search form component that used the Bootstrap framework for the underlying grid and basic styling."
                }
            })
        }
    }
}

export default connect(dispatchToProps)(EditProjectContainer);


