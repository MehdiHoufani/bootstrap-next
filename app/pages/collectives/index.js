import React from "react";

import { Divider, List, ListItem, Subheader, Grid, Cell } from "react-md";

const Collectives = () => (
  <React.Fragment>
    <Grid className={"page-collectivite"}>
      <Cell size={12}>
        <div className={"fadedScroller_fade"} />
        <Grid>
          <Cell size={12}>
            <img
              src={"./static/conceptCollectivité1.jpg"}
              alt={"conceptCollectivité1"}
              className={"conceptCollectivité1 zoom"}
            />
          </Cell>
        </Grid>
        <Grid>
          <Cell size={6} className={"section-1"}>
            <h3 style={{ height: "60%" }}>
              {`Nous sommes le partenaire des aménageurs et des collectivités,
                gestonnaires de la signalisation des commerces, des services,
                des entreprises artisanales et industrielles`}
            </h3>
            <h2>
              {`Notre concept est gratuit pour la commune et
              autofinancé par les acteurs economiques`}
            </h2>
          </Cell>
          <Cell size={6} className={"section-2"}>
            <Grid>
              <Cell size={12}>{"ZONE D'ACTIVITES"}</Cell>
            </Grid>
            <Grid>
              <Cell size={12}>{"ZONE COMMERCIALE"}</Cell>
            </Grid>
            <Grid>
              <Cell size={12}>{"CENTRE VILLE"}</Cell>
            </Grid>
          </Cell>
        </Grid>
        <Grid>
          <Cell size={12}>
            <h3>{`Nous étudions vos projets pour vous presenter la solution adaptée
          à vos besoins`}</h3>
            <h3>
              {`Projet de convention - Etude d'implantation - Entretien régulier
           de tous les mobiliers rattachés à la convention`}
            </h3>
          </Cell>
        </Grid>
        <Grid>
          <Cell size={12}>
            <img
              src={"./static/conceptCollectivité1.jpg"}
              alt={"conceptCollectivité"}
              className={"conceptCollectivité1 full"}
            />
          </Cell>
        </Grid>
      </Cell>
    </Grid>
  </React.Fragment>
);

export default Collectives;
