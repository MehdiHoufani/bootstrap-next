import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { Grid, Cell } from "react-md";
import BlockSlider from "../../components/blockSlider/blockSlider";

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
    const { onChangePage, currentPage } = this.props;
    if (selectedPage === currentPage) return;
    onChangePage(selectedPage);
  };

  isPageActive = page => (this.props.currentPage === page ? "active" : "");

  render = () => {
    const isHome = this.props.currentPage === "home";
    const { fixedNav } = this.state;
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
              <button
                className={"header-title-container"}
                onMouseUp={() => this.handleChangePage("home")}
              >
                <h2>{"mobilier et signaletique en zone urbaine"}</h2>
              </button>
            </div>
          </Cell>
        </Grid>
        <Grid className={`nav ${fixedNav ? "stick" : ""}`}>
          <Cell size={4} className={"nav-item"}>
            <div className={"nav-item-bg"} />
            <Grid>
              <Cell size={12}>
                <button
                  className={`button ${this.isPageActive("collectivite")}`}
                  onMouseUp={() => this.handleChangePage("collectivite")}
                >
                  <h3>solutions collectivités</h3>
                </button>
              </Cell>
            </Grid>
            {isHome && (
              <Grid>
                <Cell size={12}>
                  <BlockSlider
                    onMouseUp={() => this.handleChangePage("collectivite")}
                  />
                </Cell>
              </Grid>
            )}
          </Cell>
          <Cell size={4} className={"nav-item"}>
            <div className={"nav-item-bg"} />
            <Grid>
              <Cell size={12}>
                <button
                  className={`button ${this.isPageActive("promoteurs")}`}
                  onMouseUp={() => this.handleChangePage("promoteurs")}
                >
                  <h3>solutions promoteurs</h3>
                </button>
              </Cell>
            </Grid>
            {isHome && (
              <Grid>
                <Cell size={12}>
                  <BlockSlider
                    onMouseUp={() => this.handleChangePage("promoteurs")}
                  />
                </Cell>
              </Grid>
            )}
          </Cell>
          <Cell size={4} className={"nav-item"}>
            <div className={"nav-item-bg"} />
            <Grid>
              <Cell size={12}>
                <button
                  className={`button left ${this.isPageActive("gamme")}`}
                  onMouseUp={() => this.handleChangePage("gamme")}
                >
                  <h3>la gamme</h3>
                </button>
              </Cell>
            </Grid>
            {isHome && (
              <Grid>
                <Cell size={12}>
                  <BlockSlider
                    onMouseUp={() => this.handleChangePage("gamme")}
                  />
                </Cell>
              </Grid>
            )}
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
