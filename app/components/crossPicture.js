import React from "react";
import PropTypes from "prop-types";

const CrossPicture = ({ currentPage }) => (
  <div className={"background-container"}>
    <div className={`background ${currentPage}`} />
  </div>
);

CrossPicture.propTypes = {
  currentPage: PropTypes.string
};

CrossPicture.defaultProps = {
  currentPage: null
};

export default CrossPicture;
