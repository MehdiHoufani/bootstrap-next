import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/gamme/signaletique-police/";

const SignaletiquePolice = () => (
  <Grid className={"tab-signaletique-police"}>
    <Cell size={12}>
      <div className={"container-illustration-1"}>
        <img src={`${dirPath}police-1.jpg`} alt={"police-1"} />
      </div>
    </Cell>
    <Cell size={6}>
      Les gammes de panneaux police ARROW sont conçues pour la sécurité de vos
      routes. Notre gamme répond à tous vos besoins de signalisa- 􏰀on. ARROW
      vous propose deux différentes déclinai- sons de fixa􏰀on : ARROW One (dos
      ouvert) et ARROW Two (avec glissières). La robustesse et la sécurité en
      cible
    </Cell>
    <Cell size={6}>
      <div className={"container-illustration-2"}>
        <img src={`${dirPath}police-2.png`} alt={"police-2"} />
      </div>
    </Cell>
    <Cell size={6}>
      <div className={"container-illustration-3"}>
        <img src={`${dirPath}police-3.png`} alt={"police-3"} />
      </div>
    </Cell>
    <Cell size={6}>
      - Produit de sécurité rou􏰀ère avant tout, la gamme de panneaux de
      signalisa􏰀on ARROW bénéficie d’une concep􏰀on de type monobloc qui lui
      confère robustesse et sécurité. - Profil glissière contrée non-agressif et
      non-coupant pour plus de sécurité lors de manipula􏰀ons.
    </Cell>
    <Cell size={12}>
      Le rendu esthétique - Avec des courbes pensées se traduisants par un
      design intelligent, les modèles One et Two valorisent efficacement le
      message de sécurité. La simplicité Les Panneaux ARROW sont munis d’un
      système de fixation innovant qui a été étudié pour faciliter et sécuriser
      les phases de montage et démontage sur le terrain. Intégra􏰀ons Par ses
      mul􏰀ples possibilités de personnalisa􏰀on, les panneaux ARROW s’intègrent
      dans l&quotenvironement urbain et rural. Notre signalétique police
      s&quotadapte et se fond aux equipemetns déjà en place sur l&quotespace
      public. Tous nos panneaux se déclinent en caisson
    </Cell>
    <Cell size={6}>
      <img src={`${dirPath}panneaux/B.jpg`} alt={"panneaux/B"} />
      <img src={`${dirPath}panneaux/C.jpg`} alt={"panneaux/C"} />
      <img src={`${dirPath}panneaux/CE.jpg`} alt={"panneaux/CE"} />
      <img src={`${dirPath}panneaux/J4.jpg`} alt={"panneaux/J4"} />
      <img src={`${dirPath}panneaux/J5.jpg`} alt={"panneaux/J5"} />
    </Cell>
    <Cell size={6}>
      <div className={"container-illustration-4"}>
        <img src={`${dirPath}police-4.jpg`} alt={"police-1"} />
      </div>
      {"E - C3 - C14 - C25 - C117 - J5 - J4 - J10 - G1 - BALISES\n" + " "}
    </Cell>
  </Grid>
);

export default SignaletiquePolice;
