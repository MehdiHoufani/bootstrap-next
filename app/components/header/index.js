import React, { Fragment } from "react";

import { Grid, Cell } from "react-md";

const Header = () => (
  <header>
    <Grid className={"header"}>
      <Cell size={3}>
        <img src="/static/Logo_Arrow.svg" alt="" className={"header-logo"} />
      </Cell>
      <Cell size={8} desktopOffset={1}>
        <div className={"header-title"}>
          <div className={"header-title-container"}>
            <h2>{"mobilier et signaletique en zone urbaine"}</h2>
          </div>
        </div>
      </Cell>
    </Grid>
  </header>
);

export default Header;
