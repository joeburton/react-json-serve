import React from 'react';
import Companies from './companies';
import { getProjects } from 'api/projects';
import { connect } from 'react-redux';

const CompaniesContainer = React.createClass({

    componentWillMount: function() {
        getProjects()
    },

    render: function() {
        return (
            <Companies {...this.props} />
        )
    }

});

const stateToProps = function(state) {
    return {
        companies: state.projectReducer.projects
    }
}

export default connect(stateToProps)(CompaniesContainer)