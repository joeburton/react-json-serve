import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div className="add-project hidden">
                <div onClick={this.addProject}>Form</div>
            </div>
        )
    },

    addProject: function (e) {

        this.props.disptachAddProject(e, {
            id: new Date().getTime(),
            name: 'Cambridge Assessment',
            company: 'Cambridge Assessment',
            link: 'www.cambridgeassessment.co.uk',
            skills: 'HTML, JavaScript',
            description: 'Web Components'
        });

    }

});