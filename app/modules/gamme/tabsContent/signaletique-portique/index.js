import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/gamme/signaletique-portique/";

const SignaletiquePortique = () => (
  <Grid className={"tab-signaletique-portique"}>
    <Cell size={12}>
      <div className={"container-illustration-1"}>
        <img src={`${dirPath}portique-1.jpg`} alt={"portique-1"} />
      </div>
    </Cell>
    <Cell size={12}>
      Nous sommes le partenaire des aménageurs et des collec􏰀vités
      gesti􏰀onnaires de la signalisa􏰀on des commerces, des services, des
      entreprises ar􏰀sanales et industrielles. Notre gamme QUIVER CITY est
      l’assurance d’une signalé􏰀que visible s’integrant naturellement dans son
      environnement. Nos porti􏰀ques sont enti􏰀èrement conçus en aluminuim
      matière recyclable et non oxydable. Brut, Anodysé ou peint à l&quotépoxy
      ils résistent au temps et à l&quotagressivité des intempéries. Il peut
      utilisé aussi bien sur le domaine public que sur le domaine privé en
      entreprise ou résidence de logement.
    </Cell>
    <Cell size={6}>
      <div className={"container-illustration-2"}>
        <img src={`${dirPath}portique-2.png`} alt={"portique-2"} />
      </div>
    </Cell>
    <Cell size={6}>
      Selon les communes et après étude, nous pouvons me􏰁ttre à dispositi􏰀on
      tout un parc de por􏰀que signalé􏰀que pour équiper les centres-villes ou
      zones d’ac􏰀vité gratuitement. Se reporter à la page SOLUTIONS
      COLLECTIVITÉS
    </Cell>
  </Grid>
);

export default SignaletiquePortique;
