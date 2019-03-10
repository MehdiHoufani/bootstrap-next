import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { Grid, Cell } from "react-md";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedNav: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onChangeScroll);
  }

  onChangeScroll = () => {
    const { fixedNav } = this.state;
    if (window.pageYOffset >= 150 && !fixedNav)
      this.setState({ fixedNav: true });

    if (window.pageYOffset < 150 && fixedNav)
      this.setState({ fixedNav: false });
  };

  handleChangePage = selectedPage => {
    this.props.onChangePage(selectedPage);
  };

  render = () => {
    return (
      <header className={"header"}>
        <Grid>
          <Cell size={3} style={{ margin: 0 }}>
            <img
              src="/static/Logo_Arrow.svg"
              alt=""
              className={"header-logo"}
            />
          </Cell>
          <Cell size={8} desktopOffset={1}>
            <div className={"header-title"}>
              <div className={"header-title-container"}>
                <h2>{"mobilier et signaletique en zone urbaine"}</h2>
              </div>
            </div>
          </Cell>
        </Grid>
        <Grid className={`nav ${this.state.fixedNav && "stick"}`}>
          <Cell size={4}>
            <button
              className={"button right"}
              onMouseUp={() => this.handleChangePage("collectivite")}
            >
              <h3>solutions collectivités</h3>
            </button>
          </Cell>
          <Cell size={4} className={"center"}>
            <button
              className={"button"}
              onMouseUp={() => this.handleChangePage("promoteurs")}
            >
              <h3>solutions promoteurs</h3>
            </button>
          </Cell>
          <Cell size={4}>
            <button
              className={"button left"}
              onMouseUp={() => this.handleChangePage("gamme")}
            >
              <h3>la gamme</h3>
            </button>
          </Cell>
        </Grid>
      </header>
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
