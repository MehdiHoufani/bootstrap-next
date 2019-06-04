import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/gamme/plaquette-commerciale/";

const PlaquetteCommerciale = () => (
  <Grid className={"tab-plaquette-commerciale"}>
    <Cell size={12}>
      <img src={`${dirPath}commerciale-1.jpg`} />
    </Cell>
    <Cell size={12}>
      {"Beaucoup d’entrepreneurs hésitent à inves􏰀r dans des supports de communica􏰀on.\n" +
        "Pourtant, la communica􏰀on est vitale pour les TPE-PME !\n" +
        "Elle permet de conquérir de nouveaux clients et développer sa notoriété. La plaque􏰁e commerciale reste en effet un ou􏰀l de communica􏰀on indispensable et complémentaire au digital pour toutes les entreprises."}
    </Cell>
    <Cell size={12}>
      {
        "La plaque􏰁e commerciale est le support idéal pour une communica􏰀on qualita􏰀ve et ciblée."
      }
    </Cell>
    Ù
    <Cell size={6}>
      <img src={`${dirPath}commerciale-2.jpg`} />
    </Cell>
    <Cell size={6}>
      {"Son rôle est de renforcer l’image de votre entreprise et délivrer un message efficace. Elle doit être une présenta􏰀on valorisant votre entreprise et les services que vous proposez.\n" +
        "Une plaque􏰁e commerciale ontruite vous perme􏰁ra de démarcher des prospects sérieux, de montrer l’étendue de vos services lors d’un événement, salon ou portes ouvertes et donnera du poids à votre force de vente."}
    </Cell>
    <Cell size={12}>
      {"Vous ne savez pas comment procéder pour réaliser vos documents commerciaux?\n" +
        "ARROW est là pour vous proposer un service clé en main : concep􏰀on, rédac􏰀on et design. Grâce à notre équipe de créa􏰀on graphique, nous vous proposons plusieurs projets repondant à vos a􏰁entes. Vous auriez seul le choix de la créa􏰀on la plus appropriée, avec l’aide de nos équipes conseils."}
    </Cell>
  </Grid>
);

export default PlaquetteCommerciale;
