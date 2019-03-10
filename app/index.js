import React, { Component } from "react";
import { Cell, Grid } from "react-md";
import { Router, Route, Switch } from "react-router-dom";

import "./index.scss";

import Header from "./components/header";

import Collectives from "./pages/collectives";
import Home from "./pages/home/index";

class App extends Component {
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
        <Grid className="page-content">
          <Cell size={10} desktopOffset={1} className={"scrollable-content"}>
            <Collectives />
          </Cell>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
