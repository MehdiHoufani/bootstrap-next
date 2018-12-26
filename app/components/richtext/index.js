import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RenderNodesTree from './renderNodesTree';

export default class Index extends Component {
	constructor(props){
		super(props);
		this.editor = null;
	}

	componentDidMount() {
		this.editor = document.getElementById('richtext');
		this.editor.addEventListener('mousedown', event => console.log(event.type, event));
		this.editor.addEventListener('mouseenter', event => console.log(event.type, event));
		this.editor.addEventListener('mouseleave', event => console.log(event.type, event));
		this.editor.addEventListener('mouseout', event => console.log(event.type, event));
		this.editor.addEventListener('mouseover', event => console.log(event.type, event));
		this.editor.addEventListener('mouseup', event => console.log(event.type, event));
		this.editor.addEventListener('selectstart', event => console.log(event.type, event));
		document.addEventListener('selectionchange', event => {
			console.log(event.type, event); window.getSelection();
		});

	}

	render = () => {
		const { value } = this.props;
		return (<div id={'richtext'}><RenderNodesTree nodes={value.nodes}/></div>);
		

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
				type: 'span',
				blocks: [{
					nodes: [{
						type: 'p',
						blocks: [
							{
								value: 'je suis '
							},
							{
								nodes: [
									{
										type: 'strong',
										blocks: [{
											value: 'medmed'
										}]
									}
								]
							}
						]
					}]

				}
				]
			},
			{
				type: 'span',
				blocks: [{
					nodes: [{
						type: 'p',
						blocks: [
							{
								value: 'je suis '
							},
							{
								nodes: [
									{
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