import React from 'react';
import AddProject from './add-project';
import { connect } from 'react-redux';
import store from 'store';

const AddProjectContainer = React.createClass({
    render: function() {
        return (
            <AddProject {...this.props} />
        )
    }
});

const dispatchToProps = function() {
    return {
        disptachAddProject: (e, data) => {
            e.preventDefault();
            store.dispatch({
                type: 'ADD_PROJECT',
                project: data
            });
        }
    }
}

export default connect(dispatchToProps)(AddProjectContainer)
