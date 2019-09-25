import React from "react";
import PropTypes from "prop-types";

class Slide extends React.Component {
  render = () => {
    const { url, alt } = this.props;

    return (
      <div>
        <div className={"block-slider-picture"}>
          <div className={"container-illustration"}>
            <img className={"image"} src={url} alt={alt} />
          </div>
        </div>
      </div>
    );
  };
}

Slide.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string
};
Slide.defaultProps = {
  url: "https://via.placeholder.com/350x336",
  alt: ""
};

export default Slide;
