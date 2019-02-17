import React, { Fragment } from "react";

import { Grid, Cell, Toolbar } from "react-md";

const Header = () => (
  <div className={"header"}>
    <Toolbar
      prominent
      nav={
        <Grid>
          <Cell size={12}>
            <img
              src="./static/Logo_Arrow.svg"
              alt=""
              style={{ height: "96px" }}
            />
          </Cell>
        </Grid>
      }
      title={
        <Grid>
          <Cell size={12}>
            <h1 className={"title"}>
              {"Mobilier et signalétique en zone Urbaine"}
            </h1>
          </Cell>
        </Grid>
      }
    />
  </div>
);

export default Header;
