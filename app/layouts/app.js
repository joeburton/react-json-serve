import React from 'react';
import { Link } from 'react-router';
import EditProjectContainer from 'ui/edit-project-container';
import NumberCompanies from 'ui/number-companies';
import NumberProjects from 'ui/number-projects';

export default React.createClass({
    render: function(state) {
        return (
            <div className="app">
                <h1>Company & Project Directory</h1>
                <ul className="main-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/companies">Companies</Link>(<NumberCompanies />)</li>
                    <li><Link to="/projects">Projects</Link>(<NumberProjects />)</li>
                </ul>
                <main>
                    {this.props.children}
                </main>
                <EditProjectContainer />
            </div>
        )
    }
});
