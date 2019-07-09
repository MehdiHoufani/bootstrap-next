import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Cell } from "react-md";
import "./index.scss";

import Header from "../components/header";
import Navigation from "../components/navigation";
import CrossPicture from "../components/crossPicture";

import Home from "../modules/home";
import Collectives from "../modules/collectives";
import Promoteurs from "../modules/promoteurs";
import Gamme from "../modules/gamme";

class Index extends Component {
  state = {
    currentPage: "home"
  };

  handleChangePage = currentPage => {
    this.setState({ currentPage });
  };
  renderDesktop = () => {
    const { currentPage } = this.state;
    return (
      <React.Fragment>
        <CrossPicture currentPage={currentPage} />
        <Header
          currentPage={currentPage}
          onChangePage={this.handleChangePage}
        />

        <Navigation
          currentPage={currentPage}
          onChangePage={this.handleChangePage}
        />

        {currentPage === "home" && <Home />}
        {currentPage === "collectivite" && <Collectives />}
        {currentPage === "promoteurs" && <Promoteurs />}
        {currentPage === "gamme" && <Gamme />}
      </React.Fragment>
    );
  };

  renderMobile = () => {
    return (
      <React.Fragment>
        <Header />
        <Grid>
          <Cell size={12}>
            <h3>site mobile</h3>
            <h3>en construction</h3>
          </Cell>
        </Grid>
      </React.Fragment>
    );
  };

  render() {
    const { isMobile } = this.props;
    return (
      <React.Fragment>
        {!isMobile ? this.renderDesktop() : this.renderMobile()}
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default Index;
