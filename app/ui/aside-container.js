import React from 'react';
import { connect } from 'react-redux';
import Aside from './aside';

const stateToProps = function(state) {
	console.log(state);
    return {
        hasProjects: state.projectReducer.projects.length ? true : false,
        numberProjects: state.projectReducer.projects.length
    }
}

export default connect(stateToProps)(Aside);