import React, { Component } from "react";
import { TabsContainer, Tabs, Tab, Cell, Grid } from "react-md";

import "./index.scss";

import Header from "./components/header";

import Collectives from "./pages/collectives";
import Home from "./pages/home/index";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid className={"nav"}>
          <Cell size={4}>
            <button className={"button"} style={{ float: "right" }}>
              <h3>solutions collectivités</h3>
            </button>
          </Cell>
          <Cell size={4} style={{ textAlign: "center" }}>
            <button className={"button"}>
              <h3>solutions promoteurs</h3>
            </button>
          </Cell>
          <Cell size={4}>
            <button className={"button"} style={{ float: "left" }}>
              <h3>la gamme</h3>
            </button>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default App;
