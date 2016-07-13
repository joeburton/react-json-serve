import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <aside>
                There are {this.props.numberProjects} projects in the store: {this.props.hasProjects ? 'Yes' : 'No'}
            </aside>
        )
    }
});