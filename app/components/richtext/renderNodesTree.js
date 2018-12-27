import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import RenderNode from './renderNode';

const RenderNodesTree = ({ nodes }) =>
	nodes.map(node => (
		<RenderNode key={node.id} id={node.id} Type={node.type}>
			{node.blocks && node.blocks.map((block, id) => (
				<Fragment key={id}>
					{block.value}
					{block.nodes && <RenderNodesTree nodes={block.nodes} />}
				</Fragment>))}
		</RenderNode>));



RenderNodesTree.propTypes = {
	nodes: PropTypes.array.isRequired
};

export default RenderNodesTree;