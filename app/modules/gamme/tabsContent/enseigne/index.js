import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/gamme/enseigne/";

const Enseigne = () => (
  <Grid className={"tab-enseigne"}>
    <Cell size={12} className={"container-illustration-1"}>
      <div className={"container-illustration"}>
        <img
          src={`${dirPath}enseigne-1.jpg`}
          className={"illustration zoom"}
          alt={"enseigne-1"}
        />
      </div>
    </Cell>
    <Cell size={12} className={"paragraph"}>
      <h3 className={"bold text-color-theme"}> L’enseigne ARROW</h3> <br />
      <p className="text-color-theme">Votre façade est votre première image.</p>
      <p>
        Toute devanture doit aujourd’hui se doter d’une enseigne véhiculant
        clairement et efficacement l’entreprise qu’elle représente. Notre équipe
        design et création est à votre disposition pour vous proposer et
        réaliser l’enseigne qui donnera à votre devanture l’image qui vous
        reflète.
      </p>
    </Cell>
    <Cell size={6} className={"container-illustration-2"}>
      <div className={"container-illustration"}>
        <img
          src={`${dirPath}enseigne-2.jpg`}
          className={"illustration zoom"}
          alt={"enseign-2"}
        />
      </div>
    </Cell>
    <Cell size={6} className={"section-2 paragraph"}>
      <p>
        Vous avez un projet, une idée ou vous souhaitez notre expertise, nous
        menons tout en œuvre pour répondre à vos attentes.
      </p>
      <br />
      <p className={"text-color-theme"}>
        Que vous ayez votre logo ou non, nous vous faisons des propositions
        selon ce que vous souhaitez véhiculer.
      </p>
    </Cell>
    <Cell size={5} className={"section-3 paragraph"}>
      <p>
        Plane, en relief, éclairée ou non, consultez-nous, nous sommes à votre
        écoute.
      </p>
      <br />
      <p className={"text-color-theme"}>
        De la concéption à la pose, aux demandes administratives, nos services
        sont clés en main
      </p>
    </Cell>
    <Cell size={7} className={"container-illustration-3"}>
      <div className={"container-illustration"}>
        <img
          src={`${dirPath}enseigne-3.jpg`}
          className={"illustration zoom"}
          alt={"enseign-3"}
        />
      </div>
    </Cell>
  </Grid>
);

export default Enseigne;
