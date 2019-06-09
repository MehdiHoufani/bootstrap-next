import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/gamme/plaquette-commerciale/";

const PlaquetteCommerciale = () => (
  <Grid className={"tab-plaquette-commerciale"}>
    <Cell size={12}>
      <div className={"container-illustration-1"}>
        <img src={`${dirPath}comerciale-1.jpg`} alt={"comerciale-1"} />
      </div>
    </Cell>
    <Cell size={12}>
      Beaucoup d’entrepreneurs hésitent à inves􏰀r dans des supports de
      communicati􏰀on. Pourtant, la communica􏰀on est vitale pour les TPE-PME !
      Elle permet de conquerir de nouveaux clients de développer sa notoriété.
      La plaque􏰁e commerciale reste en effet un ou􏰀l de communica􏰀on
      indispensable et complémentaire au digital pour toutes les entreprises.
    </Cell>
    <Cell size={12}>
      La plaquett􏰁e commerciale est le support idéal pour une communicati􏰀on
      qualita􏰀ve et ciblée.
    </Cell>
    <Cell size={6}>
      <div className={"container-illustration-2"}>
        <img src={`${dirPath}comerciale-2.jpg`} alt={"comerciale-2"} />
      </div>
    </Cell>
    <Cell size={6}>
      Son rôle est de renforcer l’image de votre entreprise et délivrer un
      message efficace. Elle doit être une présenta􏰀on valorisant votre
      entreprise et les services que vous proposez. Une plaque􏰁e commerciale
      ontruite vous perme􏰁ra de démarcher des prospects sérieux, de montrer
      l&quotétendue de vos services lors d&quotun événement, salon ou portes
      ouvertes et donnera du poids à votre force de vente.
    </Cell>
    <Cell size={12}>
      Vous ne savez pas comment procéder pour réaliser vos documents
      commerciaux? ARROW est là pour vous proposer un service clé en main :
      concepti􏰀on, rédac􏰀on et design. Grâce à notre équipe de créa􏰀tion
      graphique, nous vous proposons plusieurs projets repondant à vos
      a􏰁ttentes. Vous auriez seul le choix de la créati􏰀on la plus appropriée,
      avec l’aide de nos équipes conseils.
    </Cell>
  </Grid>
);

export default PlaquetteCommerciale;
