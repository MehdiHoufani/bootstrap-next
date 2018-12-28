import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Node from './Node';

const RenderNodesTree = ({nodes}) =>
	nodes.map(node => (
		<Fragment key={node.id}>
			{node.type === 'text'
				? node.data
				: <Node id={node.id} Type={node.type} attributes={node.attr}>
					{node.children && <RenderNodesTree nodes={node.children}/>}
				</Node>}
		</Fragment>));


RenderNodesTree.propTypes = {
	nodes: PropTypes.array.isRequired
};

export default RenderNodesTree;