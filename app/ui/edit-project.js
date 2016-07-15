import React from 'react';

export default React.createClass({
	
	getInitialState: function () {
		return {value: ''};
	},

    render: function() {
        return (
            <div className="edit-project hidden">
		      <input
		      	id="edit-input"
		        type="text"
		        value={this.state.value}
		        onChange={this.handleChange}
		      />
		      <input type="button" value="GO" onClick={this.setValue} />
            </div>
        )
    },

    setValue: function (e) {
        let editInput = document.getElementById('edit-input'),
	       	id = editInput.getAttribute ('data-id'),
	        projectName = editInput.value;

    	this.setState({value: projectName});
    	this.props.disptachProjectUpdate(e, id, projectName)
    },

    handleChange: function (e) {
    	this.setState({value: e.target.value});
    }

});