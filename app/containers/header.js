import React from "react";
import PropTypes from "prop-types";

const Header = ({ children }) => (
  <header className={"header"}>{children}</header>
);

Header.propTypes = {
  children: PropTypes.array
};

Header.defaultProps = {
  children: null
};

export default Header;
