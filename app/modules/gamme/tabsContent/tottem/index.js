import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/gamme/tottem/";

const Tottem = () => (
  <Grid className={"tab-tottem"}>
    <Cell size={12}>
      <div className={"container-illustration"}>
        <img
          className={"illustration-1 zoom"}
          src={`${dirPath}tottem-1.jpg`}
          alt={"tottem-1"}
        />
      </div>
    </Cell>
    <Cell size={12} className={"paragraph"}>
      <p>
        Notre totem QUIVER a été développé pour une lecture d&#39;informations
        rapide et efficace des pôles d’intérêts des communes mais également
        accroitre la visibilité des entreprises. Ses dimensions et son design
        sont parfaitement adaptés aux agglomérations et zones d’activités.
      </p>
    </Cell>
    <Grid className={"section-2"}>
      <Cell size={6} className={"container-illustration-1"}>
        <div className={"container-illustration"}>
          <img
            className={"illustration-2 zoom"}
            src={`${dirPath}tottem-2.jpg`}
            alt={"tottem-2"}
          />
        </div>
      </Cell>
      <Cell size={6}>
        <Grid>
          <Cell size={12} className={"paragraph"}>
            <p>
              Ce totem est destiné autant aux{" "}
              <span className={"text-color-theme"}>collectivités</span>{" "}
              qu&#39;aux <span className={"text-color-theme"}>entreprises</span>{" "}
              ayant le besoin d’indiquer leur site et de lui donner une image
              dynamique et nouvelle.
            </p>
            <br />
            <p>
              Nous somme en mesure également de vous proposer les totems plats
              ou galbés, éclairés ou non.
            </p>
            <br />
            <p>
              L&#39;équipe de conception ARROW est capable de vous proposer des
              structures <span className={"text-color-theme"}>sur mesure</span>{" "}
              selon vos images, vos envies. Nous mettons tout en oeuvre pour
              répondre à vos attentes.
            </p>
          </Cell>
        </Grid>
        <Grid>
          <Cell size={6} className={"container-illustration-3"}>
            <div className={"container-illustration"}>
              <img
                className={"illustration-3 zoom"}
                src={`${dirPath}tottem-3.jpg`}
                alt={"tottem-3"}
              />
            </div>
          </Cell>
          <Cell size={6} className={"container-illustration-4"}>
            <div className={"container-illustration"}>
              <img
                className={"illustration-4 zoom"}
                src={`${dirPath}tottem-4.jpg`}
                alt={"tottem-4"}
              />
            </div>
          </Cell>
        </Grid>
      </Cell>
    </Grid>
  </Grid>
);

export default Tottem;
