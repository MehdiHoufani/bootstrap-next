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
      </div>
    );
  }
}

export default App;
