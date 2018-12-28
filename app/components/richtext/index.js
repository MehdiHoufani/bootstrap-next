import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RenderNodesTree from './renderNodesTree';
import Selector from './selector';
import delNodesRange from './utils';

export default class Index extends Component {
	constructor(props){
		super(props);
		this.editor = null;
		this.selector = null;
		this.value = props.value || {};
		this.state = {
			value: props.value
		};
	}

	componentDidMount() {
		document.addEventListener('selectionchange', this.handleSelectionChange);
	}

	componentWillUnmount() {
		document.removeEventListener(
			'selectionchange',
			this.handleSelectionChange
		);
	}

	handleSelectionChange = () => {

		// todo: check the selection if on focus
		const selection = window.getSelection();
		const {
			startContainer,
			startOffset,
			endContainer,
			endOffset
		} = selection.getRangeAt(0);

		this.selector = new Selector({
			type: selection.type,
			startContainer, startOffset, endContainer, endOffset
		});
		
	};

	handleFocus = () => console.log('focus', event);

	handleBeforeInput = event => {
		console.log('event', event.type);

		this.setState({
			value: delNodesRange(this.state.value, this.selector.getStart())
		});
		
	};

	handleKey = event => console.log('key', event.keyCode);

	handleSelect = () => {
		console.log('select', event);
		console.log('select', event.value);
	};

	render = () => {
		const { value } = this.props;
		return (
			<div id={'richtext'}
				contentEditable
				onBeforeInput={this.handleBeforeInput}
				onKeyDown={this.handleKey}
				/*	onFocus={this.handleFocus} */
				style={{
					height: '200px',
					width: '600px',
					backgroundColor: '#e6e5ea'
				}}>
				<RenderNodesTree nodes={value.document}/>
			</div>);

	}
}

Index.propTypes = {
	value: PropTypes.object
};

Index.defaultProps = {
	value: {
		id: 1,
		document: [
			{
				id: '1',
				type: 'span',
				attr: {},
				children: [{
					id: '1.1',
					type: 'p',
					attr: { className: 'test'},
					children: [
						{
							id: '1.1.1',
							type: 'text',
							data: 'je suis '
						},
						{
							id: '1.1.2',
							type: 'strong',
							attr: {},
							children: [
								{
									id: '1.1.2.1',
									type: 'text',
									data: 'medmed'
								}
							]
						},
						{
							id: '1.1.3',
							type: 'text',
							data: 'je suis derriere'
						}
					]
				}]

			},
			{
				id: '2',
				type: 'span',
				children: [{
					id: '2.1',
					type: 'p',
					attr: {},
					children: [
						{
							id: '2.1.1',
							type: 'text',
							data: 'je suis '
						},
						{

							id: '2.1.2',
							type: 'strong',
							attr: {},
							children: [{
								id: '2.1.2.1',
								type: 'text',
								data: 'medmed sur la 2e'
							}]


						}
					]
				}]

			}
		]
	}
};