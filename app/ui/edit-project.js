import React from 'react';

export default React.createClass({
	
	getInitialState: function () {
        return {
            name: '',
            company: '',
            link: '',
            skills: '',
            description: ''
        };
	},

    render: function(state) {
        return (
            <div className="edit-project hidden">
                <div className="edit-project-overlay"></div>
                <div className="edit-fields-wrapper">
                    <div className="edit-fields" data-id={this.props.id}>
                        
                        <input type="text"
                        className="project-name"
                        value={this.state.name}
                        onChange={this.handleChange} />

                        <input type="text" 
                        className="company"
                        value={this.state.company}
                        onChange={this.handleChange} />

                        <input type="text" 
                        className="link"
                        value={this.state.link}
                        onChange={this.handleChange} />

                        <input type="text" 
                        className="skills"
                        value={this.state.skills}
                        onChange={this.handleChange} />

                        <input type="text" 
                        className="description"
                        value={this.state.description}
                        onChange={this.handleChange} />

                        <input type="button" value="GO" onClick={this.setValue} />

                    </div>
                </div>
            </div>
        )
    },

    setValue: function (e) {
        let fieldValues = this.getValues();

    	this.setState({
            name: fieldValues.name,
            company: fieldValues.company,
            link: fieldValues.link,
            skills: fieldValues.skills,
            description: fieldValues.description
        });

        this.props.disptachProjectUpdate(e, fieldValues.id, fieldValues.name);

        console.log(this.state);

    },

    handleChange: function (e) {
        let fieldValues = this.getValues();
        
        this.setState({
            name: fieldValues.name,
            company: fieldValues.company,
            link: fieldValues.link,
            skills: fieldValues.skills,
            description: fieldValues.description
        });

        console.log(this.state);

    },

    getValues: function () {
        // wrapping el
        let projectEl = document.getElementsByClassName('edit-fields')[0];
        
        // get elements
        let name = projectEl.querySelectorAll('.project-name')[0];
        let company = projectEl.querySelectorAll('.company')[0];
        let link = projectEl.querySelectorAll('.link')[0];
        let skills = projectEl.querySelectorAll('.skills')[0];
        let description = projectEl.querySelectorAll('.description')[0];

        return {
            id: projectEl.getAttribute('data-id'),
            name: name.value,
            company: company.value,
            link: link.value,
            skills: skills.value,
            description: description.value
        };      
    }

});