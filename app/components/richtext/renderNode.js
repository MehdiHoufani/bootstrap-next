import React from 'react';
import PropTypes from 'prop-types';

const RenderNode = ({ id, Type, children }) =>
	<Type data-key={`node-${id}`}>{children}</Type>;

RenderNode.propTypes = {
	id: PropTypes.string.isRequired,
	Type: PropTypes.string.isRequired,
	children: PropTypes.any
};

RenderNode.defaultProps = {
	children: null
};

export default RenderNode;