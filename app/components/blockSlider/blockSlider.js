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
      <Grid>
        <Cell size={12}>
          <div className={`block-carousel ${classNames}`}>
            <button onMouseUp={this.props.onMouseUp}>
              <Carousel {...settings}>
                <Slide />
              </Carousel>
            </button>
          </div>
        </Cell>
      </Grid>
    );
  }
}

BlockSlider.propTypes = {
  text: PropTypes.array,
  slides: PropTypes.array,
  settings: PropTypes.object,
  classNames: PropTypes.string,
  onMouseUp: PropTypes.func
};

BlockSlider.defaultProps = {
  text: [],
  slides: [],
  settings: {
    showArrows: true,
    showThumbs: false
  },
  classNames: null,
  onMouseUp: () => null
};

export default BlockSlider;
