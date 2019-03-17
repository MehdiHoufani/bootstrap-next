import React from "react";
import PropTypes from "prop-types";

class CrossPicture extends React.Component {
  render = () => {
    return <div className={`background ${this.props.currentPage}`} />;
  };
}

CrossPicture.propTypes = {
  currentPage: PropTypes.string
};

CrossPicture.defaultProps = {
  currentPage: null
};

export default CrossPicture;
