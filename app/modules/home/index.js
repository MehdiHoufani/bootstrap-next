import React from "react";
import { Grid, Cell } from "react-md";

import BlockSlider from "../../components/blockSlider/blockSlider";

const Home = () => (
  <Grid>
    <Cell size={4} tabletSize={12}>
      <BlockSlider
        slides={[
          {
            url: "static/pictures/slides-collectivite/collectivite-1.jpg",
            alt: " "
          },
          {
            url: "static/pictures/slides-collectivite/collectivite-3.jpg",
            alt: " "
          },
          {
            url: "static/pictures/slides-collectivite/collectivite-4.jpg",
            alt: " "
          }
        ]}
      />
    </Cell>
    <Cell size={4} tabletSize={12}>
      <BlockSlider
        slides={[
          { url: "static/pictures/slides-promoteur/promoteur-1.jpg", alt: " " },
          { url: "static/pictures/slides-promoteur/promoteur-2.jpg", alt: " " },
          { url: "static/pictures/slides-promoteur/promoteur-3.jpg", alt: " " },
          { url: "static/pictures/slides-promoteur/promoteur-4.jpg", alt: " " }
        ]}
      />
    </Cell>
    <Cell size={4} tabletSize={12}>
      <BlockSlider
        slides={[
          { url: "static/pictures/slides-gamme/gamme-1.jpg", alt: " " },
          { url: "static/pictures/slides-gamme/gamme-2.jpg", alt: " " },
          { url: "static/pictures/slides-gamme/gamme-3.jpg", alt: " " },
          { url: "static/pictures/slides-gamme/gamme-4.jpg", alt: " " }
        ]}
      />
    </Cell>
  </Grid>
);

export default Home;
