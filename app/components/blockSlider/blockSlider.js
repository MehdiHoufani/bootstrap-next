import React, { Component } from "react";
import PropTypes from "prop-types";

import Slider from "react-slick";

class BlockSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIdx: 1
    };
  }

  render = () => {
    const { text, classNames } = this.props;
    return (
      <div className={`block-slider ${classNames}`}>
        <div className={"block-slider-header"}>
          <div className={"block-slider-header-title"}>
            <h3>{text[0] || ""}</h3>
            <h3>{text[1] || ""}</h3>
          </div>
        </div>
        <div className={"block-slider-body"}>
          <Slider {...this.props.settings}>
            <div>
              <div className={"block-slider-picture"}>
                <img src={"https://via.placeholder.com/150x150"} />
              </div>
            </div>
            <div>
              <div className={"block-slider-picture"}>
                <img src={"https://via.placeholder.com/150x150"} />
              </div>
            </div>
            <div>
              <div className={"block-slider-picture"}>
                <img src={"https://via.placeholder.com/150x150"} />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  };
}

BlockSlider.propTypes = {
  text: PropTypes.array,
  settings: PropTypes.object,
  classNames: PropTypes.string
};

BlockSlider.defaultProps = {
  text: [],
  settings: {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  },
  classNames: null
};

export default BlockSlider;
