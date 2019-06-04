import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/gamme/signaletique-portique/";

const SignaletiquePortique = () => (
  <Grid className={"tab-signaletique-portique"}>
    <Cell size={12}>
      <img src={`${dirPath}portique-1.jpg`} alt={"portique-1"} />
    </Cell>
    <Cell size={12}>
      {"Nous sommes le partenaire des aménageurs et des collec􏰀vités ges􏰀onnaires de la signalisa􏰀on des commerces, des services, des entreprises ar􏰀sanales et industrielles.\n" +
        "Notre gamme QUIVER CITY est l’assurance d’une signalé􏰀que visible s’integrant naturellement dans son environnement.\n" +
        "Nos por􏰀ques sont en􏰀èrement conçus en aluminuim ma􏰀ère recyclable et non oxydable. Brut, Anodysé ou peint à l’époxy ils résistent au temps et à l’agressivité des intempéries.\n" +
        "Il peut être u􏰀lisé aussi bien sur le domaine public que sur le domaine privé en entreprise ou résidence de logement."}
    </Cell>
    <Cell size={6}>
      <img src={`${dirPath}portique-2.png`} />
    </Cell>
    <Cell size={6}>
      {"Selon les communes et après étude, nous pouvons me􏰁re à disposi􏰀on tout un parc de por􏰀que signalé􏰀que pour équiper les centres-villes ou zones d’ac􏰀vité gratuitement.\n" +
        "Se reporter à la page\n" +
        "SOLUTIONS COLLECTIVITÉS"}
    </Cell>
  </Grid>
);

export default SignaletiquePortique;
