import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/gamme/enseigne/";

const Enseigne = () => (
  <Grid className={"tab-enseigne"}>
    <Cell size={12}>
      <img src={`${dirPath}enseigne-1.jpg`} />
    </Cell>
    <Cell size={12}>
      {"L’enseigne ARROW\n" +
        "Votre façade est votre première image.\n" +
        "Toute devanture doit aujourd’hui se doter d’une enseigne véhiculant clairement et efficacement l’entreprise qu’elle représente. Notre équipe design et créa􏰀on est à votre disposi􏰀on pour vous proposer et réaliser l’enseigne qui donnera à votre devanture l’image qui vous reflète."}
    </Cell>
    <Cell size={6}>
      <img src={`${dirPath}enseigne-2.jpg`} />
    </Cell>
    <Cell size={6}>
      {"Vous avez un projet, une idée ou vous souhaitez notre exper􏰀se, nous me􏰁ons tout en œuvre pour répondre à vos a􏰁entes.\n" +
        "Que vous ayez votre logo ou non, nous vous faisons des proposi􏰀ons selon ce que vous souhaitez véhiculer."}
    </Cell>
    <Cell size={6}>
      {" Plane, en relief, éclairée ou non, consultez-nous, nous sommes à votre écoute.\n" +
        "De la concepti􏰀on à la pose, aux demandes addministra􏰀ves, nos services sont clés en main"}
    </Cell>
    <Cell size={6}>
      <img src={`${dirPath}enseigne-3.jpg`} />
    </Cell>
  </Grid>
);

export default Enseigne;
