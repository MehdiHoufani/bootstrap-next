import React from "react";

import { Divider, List, ListItem, Subheader, Grid, Cell } from "react-md";

const Collectives = () => (
  <Cell size={10} offset={1}>
    <Grid>
      <h2>
        {`Notre métier est aussi de faciliter le flux routier en dirigeant
                de manière claire et précise grace a notre dispositive`}
      </h2>
    </Grid>
    <Grid>
      <p>
        {`Nous sommes le partenaire des aménageurs et des collectivités,
                gestonnaires de la signalisation des commerces, des services,
                des entreprises artisanales et industrielles`}
      </p>
    </Grid>
    <Grid>
      <List className="md-cell md-cell--12">
        <Subheader
          secondary
          primaryText="ARROW, c'est une prise en charge intégrale:"
        />
        <Divider />
        <ListItem
          primaryText={`D'un projet de convention comprenant une séléction
                  de mobilier répondant aux besoins de la ville`}
        />
        <ListItem
          primaryText={
            "De l'etude d'implantation des mobiliers d'informations et d'orientations"
          }
        />
        <ListItem
          primaryText={`D’une réactualisation annuelle de la liste des entreprises`}
        />
        <ListItem
          primaryText={`D’un entretien régulier de tous les mobiliers attachés
                   à la convention`}
        />
        <ListItem
          primaryText={`Une assurance déchargeant de toutes responsabilitées
                   la ville en cas d’accident impliquant nos mobiliers`}
        />
      </List>
    </Grid>
    <h3>{`Notre concept est gratuit pour la commune et autofinancé par les
              acteurs économiques.`}</h3>
    <h3>{`Nous étudions vos projets pour vous présenter la solution sur-mesure
                   des besoins de votre commune.`}</h3>

    <img src={"./static/conceptCollectivité1.jpeg"} alt={""} />
  </Cell>
);

export default Collectives;
