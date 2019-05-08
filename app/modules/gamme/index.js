import React from "react";
import { Grid, Cell } from "react-md";

import tabContent from "./tabsContent/index";

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
    const { Content } = tabContent[tabActive];
    return (
      <Grid className={"gamme"}>
        <Cell size={2} className={"tabList"}>
          <ul>
            {tabContent.map(({ name }, keyTab) => (
              <li key={keyTab}>
                <button
                  className={`button ${keyTab === tabActive && "active"}`}
                  onClick={() => this.handleChangeTab(keyTab)}
                >
                  <h3>{name}</h3>
                </button>
              </li>
            ))}
          </ul>
        </Cell>
        <Cell size={10} className={"tabContainer"}>
          <Content />
        </Cell>
      </Grid>
    );
  }
}

export default Gamme;
