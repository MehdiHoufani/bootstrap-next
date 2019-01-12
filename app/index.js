import React, { Component, Fragment } from 'react';
import './index.scss';

import Header from './containers/header';
import Body from './containers/body';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header>
					<div> salut </div>
				</Header>
				<Body>

				</Body>
			</Fragment>
		);
	}
}

export default App;