import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) =>
	<header className={'header'}>{children}</header>;

Header.propTypes = {
	children: PropTypes.element
};

Header.defaultProps = {
	children: null
};

export default Header;

