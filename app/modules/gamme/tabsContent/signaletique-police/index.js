import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/gamme/signaletique-police/";

const SignaletiquePolice = () => (
  <Grid className={"tab-signaletique-police"}>
    <Cell size={12} className={"container-illustration-1"}>
      <div className={"container-illustration"}>
        <img
          src={`${dirPath}police-1.jpg`}
          className={"illustration zoom"}
          alt={"police-1"}
        />
      </div>
    </Cell>
    <Cell size={6} className={"paragraph"}>
      <p className={"text-color-theme bold"}>
        Les gammes de panneaux police ARROW sont conçues pour la sécurité de vos
        routes.
      </p>
      <br />
      <p>
        Notre gamme répond à tous vos besoins de signalisation. ARROW vous
        propose deux différentes déclinaisons de fixation : ARROW One (dos
        ouvert) et ARROW Two (avec glissières).
      </p>
    </Cell>
    <Cell size={6} className={"container-illustration-2"}>
      <div className={"container-illustration"}>
        <img
          src={`${dirPath}police-2.png`}
          className={"illustration zoom"}
          alt={"police-2"}
        />
      </div>
    </Cell>
    <Cell size={6} className={"container-illustration-3"}>
      <div className={"container-illustration"}>
        <img
          src={`${dirPath}police-3.png`}
          className={"illustration zoom"}
          alt={"police-3"}
        />
      </div>
    </Cell>
    <Cell size={6} className={"paragraph"}>
      <p className={"text-color-theme bold"}>
        La robustesse et la sécurité en cible
      </p>
      <p>
        - Produit de sécurité routière avant tout, la gamme de panneaux de
        {/* eslint-disable-next-line max-len */}
        signalisation ARROW bénéficie d’une conception de type monobloc qui lui
        confère robustesse et sécurité.
      </p>
      <br />
      <p>
        - Profil glissière contrée non-agressif et non-coupant pour plus de
        sécurité lors de manipulations.
      </p>
    </Cell>
    <Cell size={12} className={"paragraph"}>
      <p className={"text-color-theme bold"}>Le rendu esthétique</p>
      <p>
        Avec des courbes pensées se traduisants par un design intelligent, les
        modèles One et Two valorisent efficacement le message de sécurité.
      </p>
      <p className={"text-color-theme bold"}> La simplicité</p>
      <p>
        Les Panneaux ARROW sont munis d’un système de fixation innovant qui a
        été étudié pour faciliter et sécuriser les phases de montage et
        démontage sur le terrain.
      </p>
      <p className={"text-color-theme bold"}>Intégrations</p>
      <p>
        Par ses multiples possibilités de personnalisation, les panneaux ARROW
        s’intègrent dans l&#39;environement urbain et rural. Notre signalétique
        police s&#39;adapte et se fond aux équipemetns déjà en place sur
        l&#39;espace public. Tous nos panneaux se déclinent en caisson
      </p>
    </Cell>
    <Cell size={6} className={"section-3"}>
      <img src={`${dirPath}panneaux/B.jpg`} alt={"panneaux/B"} />
      <img src={`${dirPath}panneaux/C.jpg`} alt={"panneaux/C"} />
      <img src={`${dirPath}panneaux/CE.jpg`} alt={"panneaux/CE"} />
      <img src={`${dirPath}panneaux/J4.jpg`} alt={"panneaux/J4"} />
      <img src={`${dirPath}panneaux/J5.jpg`} alt={"panneaux/J5"} />
    </Cell>
    <Cell size={6} className={"container-illustration-4"}>
      <div className={"container-illustration"}>
        <img
          src={`${dirPath}police-4.jpg`}
          className={"illustration zoom"}
          alt={"police-1"}
        />
      </div>
      <p className={"text-color-theme bold"}>
        E - C3 - C14 - C25 - C117 - J5 - J4 - J10 - G1 - BALISES
      </p>
    </Cell>
  </Grid>
);

export default SignaletiquePolice;
