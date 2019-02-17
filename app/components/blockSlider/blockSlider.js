import React, { Component } from "react";
import PropTypes from "prop-types";

import { Grid, Cell } from "react-md";

import Slider from "react-slick";
import Slide from "./slide";

class BlockSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIdx: 1
    };
  }

  render() {
    const { text, classNames, slides, settings } = this.props;
    return (
      <Grid className={`block-slider ${classNames}`}>
        <Cell size={12} className={"block-slider-header"}>
          <div className={"block-slider-header-title"}>
            <h3>{text[0] || ""}</h3>
            <h3>{text[1] || ""}</h3>
          </div>
        </Cell>
        <Cell size={12} className={"block-slider-body"}>
          <Slider {...settings}>
            {slides.map((slide, idx) => (
              <Slide key={idx.toString()} {...slide} />
            ))}
          </Slider>
        </Cell>
      </Grid>
    );
  }
}

BlockSlider.propTypes = {
  text: PropTypes.array,
  slides: PropTypes.array,
  settings: PropTypes.object,
  classNames: PropTypes.string
};

BlockSlider.defaultProps = {
  text: [],
  slides: [],
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
