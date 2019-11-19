import React from "react";
import { Grid, Cell } from "react-md";

const Collectives = () => (
  <Grid className={"page-collectivite"}>
    <Grid>
      <Cell size={12} className={"illustration-1"}>
        <div className={"container-illustration"}>
          <img
            src={"./static/conceptCollectivité1.jpg"}
            alt={"conceptCollectivité1"}
            className={"illustration zoom"}
          />
        </div>
      </Cell>
    </Grid>
    <Cell size={6} className={"section-1-1 paragraph"}>
      <p>
        Nous sommes le partenaire des aménageurs et des collectivités,
        gestonnaires de la signalisation des commerces, des services, des
        entreprises artisanales et industrielles
      </p>
      <h3 className={"text-color-theme"}>
        Notre concept est gratuit pour la commune et autofinancé par les acteurs
        economiques
      </h3>
    </Cell>
    <Cell size={6} className={"section-1-2"}>
      <h2>{"ZONE D'ACTIVITES"}</h2>
      <h2>{"ZONE COMMERCIALE"}</h2>
      <h2>{"CENTRE VILLE"}</h2>
    </Cell>
    <Cell size={12} className={"section-2 paragraph"}>
      <p>
        Nous étudions vos projets pour vous presenter la solution adaptée à vos
        besoins
      </p>
      <br />
      <p>
        Projet de convention - Etude d&#39;implantation - Entretien régulier de
        tous les mobiliers rattachés à la convention
      </p>
    </Cell>
    <Cell size={12} className={"illustration-2"}>
      <div className={"container-illustration"}>
        <img
          src={"./static/conceptCollectivité1.jpg"}
          alt={"conceptCollectivité"}
          className={"illustration zoom"}
        />
      </div>
    </Cell>
  </Grid>
);

export default Collectives;
