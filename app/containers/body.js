import React from "react";
import PropTypes from "prop-types";

const Body = ({ children }) => <div className={"body"}>{children}</div>;

Body.propTypes = {
  children: PropTypes.array
};

Body.defaultProps = {
  children: null
};

export default Body;
