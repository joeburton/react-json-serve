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
        disptachProjectUpdate: (e, data) => {
            e.preventDefault();
            console.log(data);
            store.dispatch({
                type: 'EDIT_PROJECT',
                project: {
                    "_id": data.id,
                    "project": data.name,
                    "link": data.link,
                    "company": data.company,
                    "skills": data.skills,
                    "description": data.description
                }
            });
        }
    }
}

export default connect(dispatchToProps)(EditProjectContainer);


