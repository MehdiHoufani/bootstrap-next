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
    <Cell size={12} className={"paragraph"}>
      <h3 className={"title"}>
        {"nous vous présentons, lisa, matt, abie et tom "}
      </h3>
      <br />
      <p>
        Nous avons mis au point un mobilier clair, efficace{" "}
        <span className={"text-color-theme"}>reconnaissable de tous</span> à
        implanter en amont des établissements scolaire pour sensibiliser les
        automobilistes à la présence d’enfants.
      </p>
      <br />
      <p>
        Chacune de leurs silhouettes, est pensée pour véhiculer{" "}
        <span className={"text-color-theme"}>
          un message de bienveillance, de sympathie et d’informations claires.
        </span>{" "}
        Ils seront reconnus dans toute la commune et feront parler d’eux.{" "}
      </p>
      <br />
      <p>
        <span className={"text-color-theme"}>
          Leurs images sont faites pour marquer les esprits.{" "}
        </span>
        Chaque fois que vous croiserez l’un d’entre eux, vous comprendrez qu’il
        y a une école à proximité. Ils sont recto-verso, ils transmettent donc
        plusieurs messages, qui peuvent aussi être destinés aux piétons.
      </p>
    </Cell>
    <Cell size={12} className={"section-4"}>
      <div className={"paragraph"}>
        <h3 className={"title"}>VOS ENFANTS VONT LES ADORER</h3>
      </div>
      <div className={"container-illustration"}>
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
