import React, { Component } from "react";
import "./index.scss";

import Header from "./containers/header";
import Body from "./containers/body";
import BlockSlider from "./components/blockSlider/blockSlider";

class App extends Component {
  render() {
    const picture = { url: "", alt: "" };
    return (
      <div className={"site"}>
        <Header>
          <div className={"header-left"}>
            <img src="./static/Logo_Arrow.svg" alt="" className={"logo"} />
          </div>
          <div className={"header-center"}>
            <div className={"text header-title"}>
              <h2>Mobilier et signaletique en zone Urbaine</h2>
            </div>
          </div>
        </Header>
        <Body>
          <div className={"section-sliders"}>
            <BlockSlider
              text={["SOLUTIONS", "COLLECTIVES"]}
              slides={[picture, picture, picture]}
            />
            <BlockSlider
              text={["SOLUTIONS", "PROMOTEURS"]}
              classNames={"block-slider-center"}
              slides={[picture, picture, picture]}
            />
            <BlockSlider
              text={["NOTRE", "GAMME"]}
              slides={[picture, picture, picture]}
            />
          </div>
        </Body>
      </div>
    );
  }
}

export default App;
