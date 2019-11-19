import React from "react";
import { Grid, Cell } from "react-md";
import PropTypes from "prop-types";
import BlockSlider from "components/blockSlider/blockSlider";

const Home = ({ isMobile }) => (
  <Grid className={"page-home"}>
    {isMobile ? (
      <>
        <Cell size={8} className={"header-title"}>
          <div className={`theme-btn-primary`}>
            <h2>{"mobilier et signaletique en zone urbaine"}</h2>
          </div>
        </Cell>
      </>
    ) : (
      <>
        <Cell size={4} tabletSize={12}>
          <BlockSlider
            key={1}
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
            key={2}
            slides={[
              {
                url: "static/pictures/slides-promoteur/promoteur-1.jpg",
                alt: " "
              },
              {
                url: "static/pictures/slides-promoteur/promoteur-2.jpg",
                alt: " "
              },
              {
                url: "static/pictures/slides-promoteur/promoteur-3.jpg",
                alt: " "
              },
              {
                url: "static/pictures/slides-promoteur/promoteur-4.jpg",
                alt: " "
              }
            ]}
          />
        </Cell>
        <Cell size={4} tabletSize={12}>
          <BlockSlider
            key={3}
            slides={[
              { url: "static/pictures/slides-gamme/gamme-1.jpg", alt: " " },
              { url: "static/pictures/slides-gamme/gamme-2.jpg", alt: " " },
              { url: "static/pictures/slides-gamme/gamme-3.jpg", alt: " " },
              { url: "static/pictures/slides-gamme/gamme-4.jpg", alt: " " }
            ]}
          />
        </Cell>
      </>
    )}
  </Grid>
);

Home.propTypes = {
  isMobile: PropTypes.boolean
};

Home.defaultProps = {
  isMobile: false
};

export default Home;
