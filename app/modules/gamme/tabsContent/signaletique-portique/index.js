import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/gamme/signaletique-portique/";

const SignaletiquePortique = () => (
  <Grid className={"tab-signaletique-portique"}>
    <Cell size={12} className={"container-illustration-1"}>
      <div className={"container-illustration"}>
        <img
          src={`${dirPath}portique-1.jpg`}
          className={"illustration-1 zoom"}
          alt={"portique-1"}
        />
      </div>
    </Cell>
    <Cell size={12} className={"paragraph"}>
      <p>
        Nous sommes le partenaire des aménageurs et des collectivités
        gestionnaires de la signalisation des commerces, des services, des
        entreprises artisanales et industrielles.
      </p>
      <br />
      <p>
        Notre gamme <span className={"text-color-theme"}>QUIVER CITY</span> est
        l’assurance d’une signalétique visible s’integrant naturellement dans
        son environnement.
      </p>
      <br />
      <p>
        Nos portiques sont entièrement conçus en aluminuim matière recyclable et
        non oxydable. Brut, Anodysé ou peint à l&#39;époxy ils résistent au
        temps et à l&#39;agressivité des intempéries.
      </p>
      <br />
      <p>
        Il peut utilisé aussi bien sur le domaine public que sur le domaine
        privé en entreprise ou résidence de logement.
      </p>
    </Cell>
    <Cell size={6} className={"container-illustration-2"}>
      <div className={"container-illustration"}>
        <img
          src={`${dirPath}portique-2.png`}
          className={"illustration zoom"}
          alt={"portique-2"}
        />
      </div>
    </Cell>
    <Cell size={6} className={"section-3 paragraph"}>
      <p className={"text-color-theme"}>
        Selon les communes et après étude, nous pouvons mettre à disposition
        tout un parc de portique signalétique pour équiper les centres-villes ou
        zones d’activité gratuitement.
      </p>
      <br />
      <p>Se reporter à la page</p>
      <p className={"text-color-theme"}>SOLUTIONS COLLECTIVITÉS</p>
    </Cell>
  </Grid>
);

export default SignaletiquePortique;
