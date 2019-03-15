import React from "react";
import { Grid, Cell } from "react-md";

import BlockSlider from "../../components/blockSlider/blockSlider";

const Home = () => (
  <Grid>
    <Cell size={4} style={{ backgroundColor: "white" }}>
      <BlockSlider />
    </Cell>
    <Cell size={4} style={{ backgroundColor: "white" }}>
      <BlockSlider />
    </Cell>
    <Cell size={4} style={{ backgroundColor: "white" }}>
      <BlockSlider />
    </Cell>
  </Grid>
);

export default Home;
