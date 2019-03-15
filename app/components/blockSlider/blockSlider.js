import React, { Component } from "react";
import PropTypes from "prop-types";

import { Grid, Cell } from "react-md";
import { Carousel } from "react-responsive-carousel";

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
        <Cell size={12} className={"block-slider-body"}>
          <Carousel {...settings}>
            {slides.map((slide, idx) => (
              <Slide key={idx.toString()} {...slide} />
            ))}
          </Carousel>
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
    showArrows: true
  },
  classNames: null
};

export default BlockSlider;
