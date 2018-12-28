import React from 'react';
import PropTypes from 'prop-types';

const Node = ({id, Type, children, attributes}) =>
	<Type data-key={id} { ...attributes}>
		{children}
	</Type>;

Node.propTypes = {
	id: PropTypes.string.isRequired,
	Type: PropTypes.string.isRequired,
	children: PropTypes.any,
	attributes: PropTypes.object
};

Node.defaultProps = {
	children: null,
	attributes: {}
};

export default Node;