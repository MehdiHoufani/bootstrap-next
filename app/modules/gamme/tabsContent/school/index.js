import React from "react";
import { Grid, Cell } from "react-md";

const dirPath = "./static/pictures/gamme/school/";

const School = () => (
  <Grid className={"tab-school"}>
    <Cell size={12} className={"section-1"}>
      <div className={"container-illustration"}>
        <img
          className={"illustration-1 zoom"}
          src={`${dirPath}school-1.jpg`}
          alt={"school-1"}
        />
      </div>
    </Cell>
    <Cell size={12} className={"section-2"}>
      <h3>{"nous vous présentons, lisa, matt, abie et tom "}</h3>
    </Cell>
    <Cell size={12} className={"section-3"}>
      <p>
        Nous avons mis au point un mobilier clair, efficace reconnaissable de
        tous à implanter en amont des établissements scolaire pour sensibiliser
        les automobilistes à la présence d’enfants.
      </p>
      <br />
      <p>
        Chacune de leurs silhoue􏰁ttes, est pensée pour véhiculer un message de
        bienveillance, de sympathie et d’informa􏰀on claires. Ils seront reconnus
        dans toute la commune et feront parler d’eux. Leurs images sont faites
        pour marquer les esprits. Chaque fois que vous croiserez l’un d’entre
        eux, vous comprendrez qu’il y a une école à proximité. Ils sont
        recto-verso, ils transme􏰁ent donc plusieurs messages, qui peuvent aussi
        être des􏰀nés aux piétons.
      </p>
      <br />
      <h3>VOS ENFANTS VONT LES ADORER</h3>
    </Cell>
    <Cell size={12} className={"section-4"}>
      <div className={"container-illustration-2"}>
        <img
          className={"illustration-2 zoom"}
          src={`${dirPath}school-2.jpg`}
          alt={"school-2"}
        />
      </div>
    </Cell>
  </Grid>
);

export default School;
