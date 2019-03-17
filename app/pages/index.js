import React, { Component } from "react";

import "./index.scss";

import Header from "../components/header";
import CrossPicture from "../components/crossPicture";

import Collectives from "../modules/collectives";
import Promoteurs from "../modules/promoteurs";

class Index extends Component {
  state = {
    currentPage: "home"
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
        {currentPage === "collectivite" && <Collectives />}
        {currentPage === "promoteurs" && <Promoteurs />}
      </React.Fragment>
    );
  }
}

export default Index;
