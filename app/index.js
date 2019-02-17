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
        <TabsContainer
          toolbar={<Header />}
          colored
          panelClassName="md-grid"
          defaultTabIndex={1}
        >
          <Tabs tabId="simple-tab" mobile={false} centered>
            <Tab label="Home" />
            <Tab label="Solutions collectives">
              <Collectives />
            </Tab>
            <Tab label="Solutions promoteur">
              <h3>Now look at me!</h3>
            </Tab>
            <Tab label="Notre gamme">
              <h3>Now look at me!</h3>
            </Tab>
          </Tabs>
        </TabsContainer>
      </div>
    );
  }
}

export default App;
