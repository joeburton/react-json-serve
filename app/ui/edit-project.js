import React from 'react';

export default React.createClass({
	
	componentWillMount: function() {
	    console.log('componentWillMount');
	},	
	
	componentWillUnmount: function() {
	    console.log('componentWillUnmount');
	},

	getInitialState: function() {
    	return {value: this.props.project};
 	},

    render: function() {
        return (
            <div className="edit-project">
		      <input
		      	id="edit-input"
		        type="text"
		        value={this.state.value}
		        data-id={this.props.id}
		        onChange={this.handleChange}
		      />
		      <input type="button" value="GO" onClick={this.props.updateInputField} />
            </div>
        )
    },

    handleChange: function (e) {
    	console.log(e.target.value, this.props);
    	this.setState({value: e.target.value});
    }

});