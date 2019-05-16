import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/gamme/tottem/";

const Tottem = () => (
  <Grid className={"tab-tottem"}>
    <Cell size={12}>
      <div className={"container-illustration-1"}>
        <img
          className={"illustration-1"}
          src={`${dirPath}tottem-1.jpg`}
          alt={"tottem-1"}
        />
      </div>
    </Cell>
    <Grid>
      <Cell size={12}>
        <p>
          {"Notre totem QUIVER a été développé pour une lecture d’informa􏰀ons " +
            "rapide et efficace des pôles d’intérêts des communes mais également " +
            "accroître la visibilité des entreprises.\n" +
            "Ses dimensions et son design sont parfaitement adaptés aux aggloméra􏰀ons et zones d’ac􏰀vités."}
        </p>
      </Cell>
    </Grid>
    <Grid className={"section-2"}>
      <Cell size={6}>
        <div className={"container-illustration-2"}>
          <img
            className={"illustration-2"}
            src={`${dirPath}tottem-2.jpg`}
            alt={"tottem-2"}
          />
        </div>
      </Cell>
      <Cell size={6}>
        <Grid className={"paragraph"}>
          <Cell size={12}>
            {"Ce totem est des􏰀né autant aux collec􏰀vités qu’aux entreprises ayant le besoin d’indiquer leur site et de lui donner une image dynamique et nouvelle.\n" +
              "Nous somme en mesure également de vous proposer les totems plats ou galbés, éclairés ou non.\n" +
              "L’équipe de concep􏰀on ARROW est capable de vous proposer des structures sur mesure selon vos images, vos envies. Nous me􏰁ons tout en oeuvre pour répondre à vos a􏰁entes."}
          </Cell>
        </Grid>
        <Grid className={"paragraph"}>
          <Cell size={6}>
            <div className={"container-illustration-3"}>
              <img
                className={"illustration-3"}
                src={`${dirPath}tottem-3.jpg`}
              />
            </div>
          </Cell>
          <Cell size={6}>
            <div className={"container-illustration-4"}>
              <img
                className={"illustration-4"}
                src={`${dirPath}tottem-4.jpg`}
              />
            </div>
          </Cell>
        </Grid>
      </Cell>
    </Grid>
  </Grid>
);

export default Tottem;
