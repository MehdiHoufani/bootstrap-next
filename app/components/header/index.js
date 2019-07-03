import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { Grid, Cell } from "react-md";
import BlockSlider from "../../components/blockSlider/blockSlider";

class Header extends Component {
  handleChangePage = selectedPage => {
    const { onChangePage, currentPage } = this.props;
    if (selectedPage === currentPage) return;
    onChangePage(selectedPage);
  };

  isPageActive = page => (this.props.currentPage === page ? "active" : "");

  render = () => {
    return (
      <Grid className={"header"}>
        <Cell size={4} className={"header-logo"}>
          <img src="/static/Logo_Arrow.svg" alt="" />
        </Cell>
        <Cell size={8} className={"header-title"}>
          <button
            className={`theme-btn-primary ${this.isPageActive("home")}`}
            onMouseUp={() => this.handleChangePage("home")}
          >
            <h2>{"mobilier et signaletique en zone urbaine"}</h2>
          </button>
        </Cell>
      </Grid>
    );
  };
}

Header.propTypes = {
  currentPage: PropTypes.string,
  onChangePage: PropTypes.func
};

Header.defaultProps = {
  currentPage: null,
  onChangePage: () => null
};

export default Header;
