import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div className="projects-page">
                <h1>Projects</h1>
                <ul>
                    {this.props.projects.map((proj, i) => {
                        // console.log(proj, i);
                        return (
                            <li key={i}>{proj.project} - <a href="#" data-id={proj._id} data-project={proj.project} onClick={this.props.openEditInput}>edit</a></li>
                        );
                    })}
                </ul>
            </div>
        )
    }
});