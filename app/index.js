import React, { Component } from "react";
import { TabsContainer, Tabs, Tab, Cell, Grid } from "react-md";

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
    return (
      <div>
        <div className={`background ${this.state.currentPage}`} />
        <Header
          currentPage={this.state.currentPage}
          onChangePage={this.handleChangePage}
        />
        <Grid className="page-content">
          <Cell size={10} desktopOffset={1} className={"scrollable-content"}>
            <Collectives />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default App;
