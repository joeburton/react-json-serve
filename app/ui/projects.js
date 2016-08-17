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
                            <span>{'Company: ' + proj.company}</span>
                            {this.renderProjects(proj.projects, proj._id)}
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    },

    renderProjects (projects, id) {
            return (
            <ul>
                {projects.map((proj, i) => {
                    return (
                        <li key={i}>
                        <span>{'Project: ' + proj.project}</span>
                        <span>{'URL: ' + proj.link}</span>
                        <span>{'Skills: ' + proj.skills}</span>
                        <span>{'Description: ' + proj.description}</span> 
                        <a href="#" data-id={id} data-project={proj.project} data-project-key={i} onClick={this.props.openEditInput}>edit</a>
                        </li>
                    );
                })}
            </ul>
        )
        
    }

});