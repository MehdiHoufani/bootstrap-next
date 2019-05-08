import Archer from "./archer/index";
import School from "./school/index";
import Tottem from "./tottem/index";
import Enseigne from "./enseigne/index";
import PlaquetteCommerciale from "./plaquette-commerciale/index";
import SignaletiquePortique from "./signaletique-portique/index";
import SignaletiquePolice from "./signaletique-police/index";

export default [
  { name: "archer", Content: Archer },
  { name: "school", Content: School },
  { name: "totem", Content: Tottem },
  { name: "portique signa.", Content: SignaletiquePortique },
  { name: "signa. police", Content: SignaletiquePolice },
  { name: "enseigne", Content: Enseigne },
  { name: "plaquette commercial", Content: PlaquetteCommerciale }
];
