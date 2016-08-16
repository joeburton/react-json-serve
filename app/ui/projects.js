import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div className="projects-page">
                <h3>Projects ({this.props.numberProjects})</h3>
                <ul>
                    {this.props.projects.map((proj, i) => {
                        return (
                            <li key={i}>
                            <span>{'Project: ' + proj.project}</span>
                            <span>{'Company:' + proj.company}</span>
                            <span>{'URL: ' + proj.link}</span>
                            <span>{'Skills: ' + proj.skills}</span>
                            <span>{'Description: ' + proj.description}</span> 
                            <a href="#" data-id={proj._id} data-project={proj.project} onClick={this.props.openEditInput}>edit</a></li>
                        );
                    })}
                </ul>
            </div>
        )
    }
});