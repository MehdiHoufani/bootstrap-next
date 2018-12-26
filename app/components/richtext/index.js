import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RenderNodesTree from './renderNodesTree';

export default class Index extends Component {
	constructor(props){
		super(props);
		this.editor = null;
		this.selection = null;
	}

	componentDidMount() {
		this.editor = document.getElementById('richtext');
		/*this.editor.addEventListener('mousedown', event => console.log(event.type, event));
		this.editor.addEventListener('mouseenter', event => console.log(event.type, event));
		this.editor.addEventListener('mouseleave', event => console.log(event.type, event));
		this.editor.addEventListener('mouseout', event => console.log(event.type, event));
		this.editor.addEventListener('mouseover', event => console.log(event.type, event));
		this.editor.addEventListener('mouseup', event => console.log(event.type, event));*/
		// this.editor.addEventListener('selectstart',
		// 	event => console.log(event.type, event));
		document.addEventListener('selectionchange', this.handleSelectionChange
		);
	}

	componentWillUnmount() {
		document.removeEventListener(
			'selectionchange',
			this.handleSelectionChange
		);
	}

	handleSelectionChange = () => {
		const selection = window.getSelection();
		console.log('selection', selection);

		if(selection.type === 'Range') { // range is selection of min 1 caractere and Caret is 0 caractere
			console.log('selection in', selection.anchorNode);
			console.log('selection info', selection.anchorOffset);
		}
		console.log('range', selection.getRangeAt(0)); // get the first selection of user not multi selection with ctrl key
		this.setState( () => ({ selection }));
	};

	handleFocus = () => console.log('focus', event);

	handleBeforeInput = event => {
		console.log('event', event.data);
		event.preventDefault();
	};

	handleKey = event => console.log('key', event);

	handleSelect = () => {
		console.log('select', event);
		console.log('select', event.value);
	};

	render = () => {
		const { value } = this.props;
		return (
			<div id={'richtext'}
				contentEditable
				/*	onBeforeInput={this.handleBeforeInput}
				onKeyDown={this.handleKey}
				onFocus={this.handleFocus}
				onSelect={this.handleSelect}*/
				style={{
					height: '200px',
					width: '600px',
					backgroundColor: 'grey'
				}}>
				<RenderNodesTree nodes={value.nodes}/>
			</div>);

	}
}

Index.propTypes = {
	value: PropTypes.object
};

Index.defaultProps = {
	value: {
		id: 1,
		nodes: [
			{
				id: '1',
				type: 'span',
				blocks: [{
					nodes: [{
						id: '2',
						type: 'p',
						blocks: [
							{
								value: 'je suis '
							},
							{
								nodes: [
									{
										id: '3',
										type: 'strong',
										blocks: [{
											value: 'medmed '
										}]
									}
								]
							},
							{
								value: 'je suis derriere'
							}
						]
					}]

				}
				]
			},
			{
				id: '5',
				type: 'span',
				blocks: [{
					nodes: [{
						id: '6',
						type: 'p',
						blocks: [
							{
								value: 'je suis '
							},
							{
								nodes: [
									{
										id: '7',
										type: 'strong',
										blocks: [{
											value: 'medmed sur la 2e'
										}]
									}
								]
							}
						]
					}]

				}
				]
			}
		]
	}
};