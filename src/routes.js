import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PostsIndex from './components/posts_index';

import App from './App';
import PostsNew from './components/posts_new';

const Greeting = () => {
	return <div>Greeting</div>
}

const Greeting2 = () => {
	return <div>Greeting 2</div>
}

export default (
	<Route path="/" component={App} >
		<IndexRoute component ={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="greeting2" component={Greeting2} />
	</Route>
)