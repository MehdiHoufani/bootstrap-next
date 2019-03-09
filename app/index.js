import React, { Component } from "react";
import { TabsContainer, Tabs, Tab, Cell, Grid } from "react-md";

import "./index.scss";

import Header from "./components/header";

import Collectives from "./pages/collectives";
import Home from "./pages/home/index";

class App extends Component {
  state = {
    currentPage: "home"
  };

  handleChangePage = currentPage => {
    this.setState({ currentPage });
  };

  render() {
    return (
      <div>
        <div className={`background ${this.state.currentPage}`} />
        <Header
          currentPage={this.state.currentPage}
          onChangePage={this.handleChangePage}
        />
        <Grid className="page-content">
          <Cell size={10} desktopOffset={1} className={"scrollable-content"}>
            <p>
              On Scroll Sticky Header The header will stick to the top when you
              reach its scroll position. Scroll back up to remove the sticky
              effect. Some text to enable scrolling.. Lorem ipsum dolor sit
              amet, illum definitiones no quo, maluisset concludaturque et eum,
              altera fabulas ut quo. Atqui causae gloriatur ius te, id agam
              omnis evertitur eum. Affert laboramus repudiandae nec et.
              Inciderint efficiantur his ad. Eum no molestiae voluptatibus. Some
              text to enable scrolling.. Lorem ipsum dolor sit amet, illum
              definitiones no quo, maluisset concludaturque et eum, altera
              fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
              evertitur eum. Affert laboramus repudiandae nec et. Inciderint
              efficiantur his ad. Eum no molestiae voluptatibus. Some text to
              enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones
              no quo, maluisset concludaturque et eum, altera fabulas ut quo.
              Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
              laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum
              no molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. On Scroll Sticky Header The header will
              stick to the top when you reach its scroll position. Scroll back
              up to remove the sticky effect. Some text to enable scrolling..
              Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. On Scroll Sticky Header The header will
              stick to the top when you reach its scroll position. Scroll back
              up to remove the sticky effect. Some text to enable scrolling..
              Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. On Scroll Sticky Header The header will
              stick to the top when you reach its scroll position. Scroll back
              up to remove the sticky effect. Some text to enable scrolling..
              Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus. Some text to enable scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default App;
