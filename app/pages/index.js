import React, { Component } from "react";

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
    currentPage: "gamme"
  };

  handleChangePage = currentPage => {
    this.setState({ currentPage });
  };

  render() {
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
  }
}

export default Index;
