import React from "react";
import { Grid, Cell } from "react-md";
import PropTypes from "prop-types";
import Header from "../header";

class Navigation extends React.Component {
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

  isPageActive = page => (this.props.currentPage === page ? "active" : "");

  render = () => {
    const { fixedNav } = this.state;
    const { onChangePage } = this.props;
    return (
      <Grid className={`navigation ${fixedNav ? "stick" : ""}`}>
        <Cell size={4} className={"nav-item"}>
          <button
            className={`theme-btn-primary ${this.isPageActive("collectivite")}`}
            onMouseUp={() => onChangePage("collectivite")}
          >
            <h3>solutions collectivités</h3>
          </button>
        </Cell>
        <Cell size={4} className={"nav-item"}>
          <button
            className={`theme-btn-primary ${this.isPageActive("promoteurs")}`}
            onMouseUp={() => onChangePage("promoteurs")}
          >
            <h3>solutions promoteurs</h3>
          </button>
        </Cell>
        <Cell size={4} className={"nav-item"}>
          <button
            className={`theme-btn-primary left ${this.isPageActive("gamme")}`}
            onMouseUp={() => onChangePage("gamme")}
          >
            <h3>la gamme</h3>
          </button>
        </Cell>
      </Grid>
    );
  };
}

Navigation.propTypes = {
  currentPage: PropTypes.string,
  onChangePage: PropTypes.func
};

Navigation.defaultProps = {
  currentPage: null,
  onChangePage: () => null
};

export default Navigation;
