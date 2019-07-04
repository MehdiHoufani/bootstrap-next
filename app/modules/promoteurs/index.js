import React from "react";
import { Grid, Cell } from "react-md";

import Content from "../../containers/content";

const dirPath = "./static/pictures/promoteurs/";

const Promoteurs = () => {
  return (
    <Content>
      <Grid className={"page-promoteurs"}>
        <Cell size={12}>
          <Grid>
            <Cell size={12}>
              <img
                src={`${dirPath}promoteur-1-low.jpg`}
                alt={""}
                className={"illustration-1 zoom"}
              />
            </Cell>
          </Grid>
          <Grid className={"section-2"}>
            <Cell size={6} className={"section-2-1"}>
              <h3>Notre métier est le jalonement temporaire</h3>
              <p>
                Nous mettons à votre disposition des solutions pour guider vos
                futurs clients jusqu&quota vos bureaux de vente.
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
          </Grid>
          <Grid className={"section-3"}>
            <Cell size={5} className={"section-3-1"}>
              <img
                src={`${dirPath}promoteur-3.png`}
                alt={""}
                className={"illustration-3"}
              />
            </Cell>
            <Cell size={7} className={"section-3-2"}>
              <h3>Confiez-nous votre projet</h3>
              <p>
                Nous vous fournissons un plan de jalonement, des fiches
                simulations et nous nous occupons des demarches administatives
              </p>
            </Cell>
          </Grid>
          <Grid className={"section-4"}>
            <Cell size={6} className={"section-4-1"}>
              <p>
                De l&quotetude, à la fabrication, à l&quotinstallation,
                l&quotentretien, le démontage en fin de contrat, ARROW est la
                solution efficace à la localisation de votre B.V..
              </p>
              <br />
              <p>
                Nos dispositifs sont installés sur le mobilier urbain existant,
                nous portons une attention particulière à sa protection et ce
                dans le respect de la réglementation en vigueur.
              </p>
            </Cell>
            <Cell size={6}>
              <img
                src={`${dirPath}promoteur-4-low.jpg`}
                alt={""}
                className={"illustration-4"}
              />
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </Content>
  );
};

export default Promoteurs;
