import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/promoteurs/";

const Promoteurs = () => (
  <Grid className={"page-promoteurs"}>
    <Cell size={12} className={"illustration-1"}>
      <div className={"container-illustration"}>
        <img
          src={`${dirPath}promoteur-1-low.jpg`}
          alt={""}
          className={"illustration zoom"}
        />
      </div>
    </Cell>
    <Cell size={6} className={"section-2 paragraph"}>
      <h3 className={"text-color-theme"}>
        Notre métier est le jalonement temporaire
      </h3>
      <p>
        Nous mettons à votre disposition des solutions pour guider vos futurs
        clients jusqu&#39;a vos bureaux de vente.
      </p>
    </Cell>
    <Cell size={6} className={"illustration-2"}>
      <img
        src={`${dirPath}promoteur-2-1.png`}
        alt={""}
        className={"illustration-2-1"}
      />
      <img
        src={`${dirPath}promoteur-2-2.png`}
        alt={""}
        className={"illustration-2-2"}
      />
    </Cell>
    <Cell size={6}>
      <div className={"container-illustration"}>
        <img
          src={`${dirPath}promoteur-3.png`}
          alt={""}
          className={"illustration zoom"}
        />
      </div>
    </Cell>
    <Cell size={6} className={"section-3-2 paragraph"}>
      <h3 className={"text-color-theme"}>Confiez-nous votre projet</h3>
      <p>
        Nous vous fournissons un plan de jalonement, des fiches simulations et
        nous nous occupons des demarches administatives
      </p>
    </Cell>
    <Cell size={6} className={"section-4-1 paragraph"}>
      <p>
        De l&#39;etude, à la fabrication, à l&#39;installation, l&#39;entretien,
        le démontage en fin de contrat, ARROW est la solution efficace à la
        localisation de votre B.V..
      </p>
      <br />
      <p>
        Nos dispositifs sont installés sur le mobilier urbain existant, nous
        portons une attention particulière à sa protection et ce dans le respect
        de la réglementation en vigueur.
      </p>
    </Cell>
    <Cell size={6} className={"illustration-4"}>
      <div className={"container-illustration"}>
        <img
          src={`${dirPath}promoteur-4-low.jpg`}
          alt={""}
          className={"illustration zoom"}
        />
      </div>
    </Cell>
  </Grid>
);

export default Promoteurs;
