import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class RenderNodesTree extends Component {

	renderMarks = nodes =>
		nodes.map(node => (
			<node.type key={node.id}>
				{node.blocks && node.blocks.map((block, id) => (
					<Fragment key={id}>
						{block.value}
						{block.nodes && this.renderMarks(block.nodes)}
					</Fragment>))}
			</node.type>));

	render = () => this.renderMarks(this.props.nodes)
}

RenderNodesTree.propTypes = {
	nodes: PropTypes.array.isRequired
};

export default RenderNodesTree;