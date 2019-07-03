import React from "react";
import { Grid, Cell } from "react-md";

import tabContent from "./tabsContent";

class Gamme extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tabActive: 0
    };
  }

  render = () => {
    const { tabActive } = this.state;
    const { Content } = tabContent[tabActive];
    return (
      <Grid className={"gamme"}>
        <Cell size={2} className={"tabList"}>
          <ul>
            {tabContent.map(({ name }, keyTab) => (
              <li key={keyTab}>
                <button
                  className={`theme-btn-primary ${keyTab === tabActive &&
                    "active"}`}
                  onClick={() => this.setState(() => ({ tabActive: keyTab }))}
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
  };
}

export default Gamme;
