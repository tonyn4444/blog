import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
	render() {
		return (
			<div>New Post Form</div>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['titles', 'categories', 'content']
})(PostsNew);