import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/gamme/plaquette-commerciale/";

const PlaquetteCommerciale = () => (
  <Grid className={"tab-plaquette-commerciale"}>
    <Cell size={12} className={"container-illustration-1"}>
      <div className={"container-illustration"}>
        <img
          src={`${dirPath}comerciale-1.jpg`}
          className={"illustration zoom"}
          alt={"comerciale-1"}
        />
      </div>
    </Cell>
    <Cell size={12} className={"paragraph"}>
      <p>
        Beaucoup d’entrepreneurs hésitent à investir dans des supports de
        communication.
      </p>
      <p className={"text-color-theme"}>
        Pourtant, la communication est vitale pour les TPE-PME !
      </p>
      <p>
        Elle permet de conquerir de nouveaux clients de développer sa notoriété.
        La plaquette commerciale reste en effet un outil de communication
        indispensable et complémentaire au digital pour toutes les entreprises.
      </p>
      <br />
      <br />
      <p>
        La plaquette commerciale est le{" "}
        <span className={"text-color-theme"}>support idéal</span> pour une
        communication <span className={"text-color-theme"}>qualitative</span> et
        ciblée.
      </p>
    </Cell>
    <Cell size={6} className={"container-illustration-2"}>
      <div className={"container-illustration"}>
        <img
          src={`${dirPath}comerciale-2.jpg`}
          className={"illustration zoom"}
          alt={"comerciale-2"}
        />
      </div>
    </Cell>
    <Cell size={6} className={"paragraph"}>
      <p>
        Son rôle est de{" "}
        <span className={"text-color-theme"}>
          renforcer l’image de votre entreprise{" "}
        </span>
        et délivrer un message efficace. Elle doit être une présentation
        valorisant votre entreprise et les services que vous proposez.
      </p>
    </Cell>
    <Cell size={12} className={"paragraph"}>
      <p>
        Une plaquette commerciale ontruite vous permettra de démarcher des
        <span className={"text-color-theme"}> prospects sérieux</span>, de
        montrer l&#39;étendue de vos services lors{" "}
        <span className={"text-color-theme"}>
          d&#39;un événement, salon ou portes ouvertes
        </span>{" "}
        et donnera du poids à votre force de vente.
      </p>
    </Cell>
    <Cell size={12} className={"paragraph"}>
      <p className={"text-color-theme"}>
        Vous ne savez pas comment procéder pour réaliser vos documents
        commerciaux?
      </p>
      <br />
      <p>
        ARROW est là pour vous proposer un service clé en main :{" "}
        <span className={"text-color-theme"}>
          conception, rédaction et design
        </span>
        . Grâce à notre équipe de création graphique, nous vous proposons
        plusieurs projets repondant à vos attentes. Vous auriez seul le choix de
        la création la plus appropriée, avec l’aide de nos équipes conseils.
      </p>
    </Cell>
  </Grid>
);

export default PlaquetteCommerciale;
