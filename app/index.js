import React, { Component, Fragment } from 'react';
import './index.scss';

import Header from './containers/header';
import Body from './containers/body';

class App extends Component {
	render() {
		return (
			<div className={'site'}>
				<Header>
					<div className={'header-left'}>
						<img src="./static/Logo_Arrow.svg" className={'logo'}/>
					</div>
					<div className={'header-center'}>
						<div className={'text header-title'}>
							<h2>Mobilier et signaletique en zone Urbaine</h2>
						</div>
					</div>
				</Header>
				<Body>
					<div className={'section-slide'}>
						<div className={'block-slide'}>
							<div className={'block-slide-header'}>
								<h3>SOLUTIONS</h3>
								<h3>COLLECTIVES</h3>
							</div>
						</div>
						<div className={'block-slide'}>
							<div className={'block-slide-header'}>
								<div className={'block-slide-header-title'}>
									<h3>SOLUTIONS</h3>
									<h3>PROMOTEURS</h3>
								</div>
							</div>
						</div>
						<div className={'block-slide'}>
							<div className={'block-slide-header'}>
								<h3>NOTRE</h3>
								<h3>GAMME</h3>
							</div>
						</div>
					</div>
				</Body>
			</div>
		);
	}
}

export default App;