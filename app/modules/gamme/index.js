import React from "react";
import { Grid, Cell } from "react-md";

import tabs from "./data";
import { Archer, School } from "./tabsContent/index";

class Gamme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabActive: 0
    };
  }

  handleChangeTab = id => {
    this.setState(() => ({ tabActive: id }));
  };

  render() {
    const { tabActive } = this.state;
    return (
      <Grid className={"gamme"}>
        <Cell size={2} className={"tabList"}>
          <ul>
            {tabs.map((tab, tabId) => (
              <li key={tabId}>
                <button
                  className={`button ${tabId === tabActive && "active"}`}
                  onClick={() => this.handleChangeTab(tabId)}
                >
                  <h3>{tab.name}</h3>
                </button>
              </li>
            ))}
          </ul>
        </Cell>
        <Cell size={10} className={"tabContainer"}>
          {tabActive === 0 && <Archer />}
          {tabActive === 1 && <School />}
        </Cell>
      </Grid>
    );
  }
}

export default Gamme;
