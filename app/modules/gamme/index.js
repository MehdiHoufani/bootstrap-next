import React from "react";
import { Grid, Cell } from "react-md";

import tabs from "./data";

class Gamme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabActive: 0
    };
  }

  handleChangeTab = id => {
    this.setState(() => ({ tab: id }));
  };

  render() {
    const { tabActive } = this.state;
    return (
      <Grid className={"gamme"}>
        <Cell size={4} className={"tabList"}>
          <ul>
            {tabs.map((tab, tabId) => (
              <li key={tabId}>
                <button
                  className={`button ${tabId === tabActive ? "active" : ""}`}
                  onClick={() => this.handleChangeTab(0)}
                >
                  <h3>{tab.name}</h3>
                </button>
              </li>
            ))}
          </ul>
        </Cell>
        <Cell size={8}>
          <p>constructruction</p>
        </Cell>
      </Grid>
    );
  }
}

export default Gamme;
