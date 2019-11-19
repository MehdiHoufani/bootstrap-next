import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Grid, Cell } from "react-md";
import { Burger } from "./burger";

class Header extends PureComponent {
  handleChangePage = selectedPage => {
    const { onChangePage, currentPage } = this.props;
    if (selectedPage === currentPage) return;
    onChangePage(selectedPage);
  };

  isPageActive = page => (this.props.currentPage === page ? "active" : "");

  render = () => {
    const { isMobile, isBurgerOpen, onChangeBurger } = this.props;
    return (
      <Grid className={"header"}>
        {isMobile ? (
          <>
            <Cell phoneSize={2}>
              <img src="/static/Logo_Arrow.svg" alt="" />
            </Cell>
            <Cell phoneSize={1} phoneOffset={1}>
              <Burger onClick={onChangeBurger} isOpen={isBurgerOpen} />
            </Cell>
          </>
        ) : (
          <>
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
          </>
        )}
      </Grid>
    );
  };
}

Header.propTypes = {
  currentPage: PropTypes.string,
  onChangePage: PropTypes.func,
  onChangeBurger: PropTypes.func,
  isMobile: PropTypes.boolean,
  isBurgerOpen: PropTypes.boolean
};

Header.defaultProps = {
  currentPage: null,
  onChangePage: () => {},
  onChangeBurger: () => {},
  isMobile: false,
  isBurgerOpen: false
};

export default Header;
