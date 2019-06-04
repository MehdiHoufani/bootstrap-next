import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/gamme/signaletique-police/";

const SignaletiquePolice = () => (
  <Grid className={"tab-signaletique-police"}>
    <Cell size={12}>
      <img src={`${dirPath}police-1.jpg`} />
    </Cell>
    <Cell size={6}>
      {"Les gammes de panneaux police ARROW sont conçues pour la sécurité de vos routes.\n" +
        "Notre gamme répond à tous vos besoins de signalisa- 􏰀on. ARROW vous propose deux différentes déclinai- sons de fixa􏰀on : ARROW One (dos ouvert) et ARROW Two (avec glissières).\n" +
        "La robustesse et la sécurité en cible"}
    </Cell>
    <Cell size={6}>
      <img src={`${dirPath}police-2.png`} />
    </Cell>
    <Cell size={6}>
      <img src={`${dirPath}police-3.png`} />
    </Cell>
    <Cell size={6}>
      {"- Produit de sécurité rou􏰀ère avant tout, la gamme de pan- neaux de signalisa􏰀on ARROW bénéficie d’une concep􏰀on de type monobloc qui lui confère robustesse et sécurité.\n" +
        "- Profil glissière cintrée non-agressif et non-coupant pour plus de sécurité lors de manipula􏰀ons."}
    </Cell>
    <Cell size={12}>
      {"Le rendu esthé􏰀que\n" +
        "- Avec des courbes pensées se traduisants par un design intel- ligent, les modèles One et Two valorisent efficacement le message de sécurité.\n" +
        "La simplicité\n" +
        "Les Panneaux ARROW sont munis d’un système de fixa􏰀on innovant qui a été étudié pour faciliter et sécu- riser les phases de montage et démontage sur le terrain.\n" +
        "Intégra􏰀ons\n" +
        "Par ses mul􏰀ples possibilités de personnalisa􏰀on, les panneaux ARROW s’intègrent dans l’environnement urbain et rural. Notre signalé􏰀que police s’adapte et se fond aux équipements déjà en place sur l’espace public. Tous nos panneaux se déclinent en caisson."}
    </Cell>
    <Cell size={6}>
      <img src={`${dirPath}panneaux/B.jpg`} />
      <img src={`${dirPath}panneaux/C.jpg`} />
      <img src={`${dirPath}panneaux/CE.jpg`} />
      <img src={`${dirPath}panneaux/J4.jpg`} />
      <img src={`${dirPath}panneaux/J5.jpg`} />
    </Cell>
    <Cell size={6}>
      <img src={`${dirPath}police-4.jpg`} />
      {"E - C3 - C14 - C25 - C117 - J5 - J4 - J10 - G1 - BALISES\n" + " "}
    </Cell>
  </Grid>
);

export default SignaletiquePolice;
