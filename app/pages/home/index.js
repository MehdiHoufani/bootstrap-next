import React from "react";
import { Grid, Cell } from "react-md";

import BlockSlider from "../../components/blockSlider/blockSlider";

const Home = () => (
  <Grid>
    <Cell size={4}>
      <BlockSlider classNames={"right"} />
    </Cell>
    <Cell size={4}>
      <BlockSlider />
    </Cell>
    <Cell size={4} classNames={"left"}>
      <BlockSlider />
    </Cell>
  </Grid>
);

export default Home;
