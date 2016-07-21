import React from 'react';
import Companies from './companies';
import { connect } from 'react-redux';
import axiosAjax from 'api/projects';

const CompaniesContainer = React.createClass({

    componentWillMount() {
       // axiosAjax.getProjects()
    },

    render() {
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