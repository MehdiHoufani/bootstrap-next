import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/gamme/archer/";

const Archer = () => (
  <Grid className={"tab-archer"}>
    <Cell size={12} className={"section-1"}>
      <div className={"container-illustration"}>
        <img
          src={`${dirPath}archer-1.jpg`}
          alt={"archer-1"}
          className={"illustration-1 zoom"}
        />
        <div className={"spot"}>
          <h3>nous sommes tous piétons</h3>
        </div>
      </div>
    </Cell>
    <Cell size={12} className={"paragraph"}>
      <p>
        La sécurité des piétons est l&#39;affaire de tous. En effet, ce mode de
        déplacement est naturel et devrait être sans risque.
      </p>
      <br />
      <p>
        En 2017 il a été recensé le décès de 488 piétons et plus de 11 000
        blessés, dont 2 sur 3 tués en agglométation.
      </p>
      <br />
      <p>
        Il y a plusieurs facteurs à cela, notamment l’inatention des conducteurs
        ainsi que celle des piétons. Dans tous les cas il faut pouvoir convenir
        d’un dispositif répondant aux besoins de chacun.
      </p>
    </Cell>
    <Cell size={12} className={"section-2"}>
      <div className={"spot"}>
        <h3>agissons ensemble !</h3>
      </div>
      <Grid style={{ paddingTop: "50px" }}>
        <Cell size={6}>
          <div className={"container-illustration"}>
            <img
              src={`${dirPath}archer-2.jpg`}
              alt={"archer-2"}
              className={"illustration-2"}
            />
          </div>
        </Cell>
        <Cell size={6}>
          <div className={"container-illustration"}>
            <img
              src={`${dirPath}archer-3.jpg`}
              alt={"archer-3"}
              className={"illustration-3 zoom"}
            />
          </div>
        </Cell>
        <Cell size={12} className={"paragraph"}>
          <p>
            Reconnaissable de tous de jour comme de nuit, marquant
            indéniablement les passages piétons, ARCHER saute aux yeux par sa
            taille, sa couleur, son dynamisme et son originalité renforçant
            ainsi la visibilité des piétons.
          </p>
          <br />
          <p>
            Il participe également à responsabiliser ces derniers en les
            incitants à traverser les rues aux passages dédiés.
          </p>
        </Cell>
        <Cell size={12}>
          <div className={"container-illustration"}>
            <img
              src={`${dirPath}archer-4.jpg`}
              alt={"archer-4"}
              className={"illustration-4 zoom"}
            />
          </div>
        </Cell>
      </Grid>
    </Cell>
  </Grid>
);

export default Archer;
