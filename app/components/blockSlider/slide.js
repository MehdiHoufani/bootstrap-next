import React from "react";
import PropTypes from "prop-types";

class Slide extends React.Component {
  render = () => {
    const { url, alt } = this.props;

    return (
      <div>
        <div className={"block-slider-picture"}>
          <img
            src={!url ? "https://via.placeholder.com/350x336" : url}
            alt={alt}
          />
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
  url: "./static/conceptCollectivité1.jpg",
  alt: ""
};

export default Slide;
