import React from 'react';
import { Link } from 'react-router';
import EditProjectContainer from 'ui/edit-project-container';
import AddProjectContainer from 'ui/add-project-container';
import NumberCompanies from 'ui/number-companies';
import NumberProjects from 'ui/number-projects';
import axiosAjax from 'api/projects';

export default React.createClass({

    componentWillMount: function() {
        axiosAjax.getProjects()
    },

    closeEditInput: function () {
        let editProjectEle = document.querySelectorAll('.edit-project')[0]

        if (!editProjectEle.classList.contains('hidden')) {
            editProjectEle.classList.add("hidden");    
        }
    },

    openAddProject: function (e) {
        e.preventDefault();
        let addProjectEle = document.querySelectorAll('.add-project')[0]

        if (addProjectEle.classList.contains('hidden')) {
            addProjectEle.classList.remove("hidden");    
        } else {
            addProjectEle.classList.add("hidden"); 
        }
    },

    render: function(state) {
        return (
            <div className="app">
                {/* <h1>Company & Project Directory</h1> */}
                <ul className="main-nav">
                    <li><Link to="/" onClick={this.closeEditInput}>Home</Link></li>
                    <li><Link to="/companies" onClick={this.closeEditInput}>Companies</Link>(<NumberCompanies />)</li>
                    <li><Link to="/projects">Projects</Link>(<NumberProjects />)</li>
                    <li><a href="#" onClick={this.openAddProject}>Add New Project / Company</a></li>
                </ul>
                <main>
                    {this.props.children}
                </main>
                <EditProjectContainer />
                <AddProjectContainer />
            </div>
        )
    }
    
});