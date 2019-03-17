import React, { Component } from "react";

import "./index.scss";

import Header from "../components/header";

import Collectives from "./collectives";
import Promoteurs from "./promoteurs";

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
        <div className={`background ${currentPage}`} />
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
