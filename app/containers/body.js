import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ children }) =>
	<div className={'body'}>{children}</div>;

Body.propTypes = {
	children: PropTypes.element
};

Body.defaultProps = {
	children: null
};

export default Body;