import React from "react";
import PropTypes from "prop-types";
import { Cell, Grid } from "react-md";

const Content = props => (
  <Grid className="page-content">
    <Cell size={10} desktopOffset={1} className={"scrollable-content"}>
      {props.children}
    </Cell>
  </Grid>
);

Content.propTypes = {
  children: PropTypes.any
};

export default Content;
