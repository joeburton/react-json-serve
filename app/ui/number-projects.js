import React from 'react';
import { connect } from 'react-redux';

const NumberProjects = React.createClass({
    render: function() {
        return (
            <span>
                {this.props.numberProjects}
            </span>
        )
    }
});

const stateToProps = function(state) {
    return {
        numberProjects: state.projectReducer.projects.length
    }
}

export default connect(stateToProps)(NumberProjects);