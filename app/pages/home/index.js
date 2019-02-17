import React from "react";
import { Grid, Cell } from "react-md";

import BlockSlider from "../../index";

const Home = () => (
  <Grid>
    <Cell size={4}>
      <BlockSlider
        text={["SOLUTIONS", "COLLECTIVES"]}
        slides={[{}, {}, {}]}
        autoplay
      />
    </Cell>
    <Cell size={4}>
      <BlockSlider
        text={["SOLUTIONS", "PROMOTEURS"]}
        classNames={"block-slider-center"}
        slides={[{}, {}, {}]}
        autoplay
      />
    </Cell>
    <Cell size={4}>
      <BlockSlider text={["NOTRE", "GAMME"]} slides={[{}, {}, {}]} autoplay />
    </Cell>
  </Grid>
);

export default Home;
