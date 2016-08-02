import React from 'react';

export default React.createClass({

	componentDidMount: function () {
		window.onhashchange = function() { 
			console.log('url change');
		}
	},

    render: function() {
        return (
            <p>View companies and projects</p>
        )
    }

});
