import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import RenderNode from './renderNode';

class RenderNodesTree extends Component {

	renderMarks = nodes =>
		nodes.map(node => (
			<RenderNode key={node.id} id={node.id} Type={node.type}>
				{node.blocks && node.blocks.map((block, id) => (
					<Fragment key={id}>
						{block.value}
						{block.nodes && this.renderMarks(block.nodes)}
					</Fragment>))}
			</RenderNode>));

	render = () => this.renderMarks(this.props.nodes)
}


RenderNodesTree.propTypes = {
	nodes: PropTypes.array.isRequired
};

export default RenderNodesTree;