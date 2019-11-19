import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Cell } from "react-md";
import "./index.scss";

import Header from "components/header";
import Navigation from "components/navigation";
import CrossPicture from "components/crossPicture";
import MenuLateral from "components/menuLateral";
import Content from "../containers/content";

import Home from "modules/home";
import Collectives from "modules/collectives";
import Promoteurs from "modules/promoteurs";
import Gamme from "modules/gamme";
import GalleryPicture from "modules/galleryPictures";

import { breakpoints } from "utils";

class Index extends Component {
  state = {
    currentPage: "home",
    tabSelect: 0,
    isMobile: breakpoints().isMobile,
    isMenuOpen: false
  };

  componentDidMount() {
    window.addEventListener("resize", this.listenResize);
    this.setState({ isMobile: breakpoints().isMobile });
  }

  listenResize = () => {
    const { isMobile } = breakpoints();
    if (this.state.isMobile !== isMobile) this.setState({ isMobile });
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.listenResize);
  };

  handleChangePage = currentPage => {
    this.setState({ currentPage });
  };

  renderDesktop = () => {
    const { currentPage, isMobile, tabSelect } = this.state;
    return (
      <React.Fragment>
        <CrossPicture currentPage={currentPage} />
        {isMobile && (
          <MenuLateral
            onClose={() => {
              this.setState({ isMenuOpen: false });
            }}
            onChange={page =>
              this.setState({ currentPage: page, isMenuOpen: false })
            }
            onChangeTab={tabActived =>
              this.setState({
                currentPage: "gamme",
                tabSelect: tabActived,
                isMenuOpen: false
              })
            }
            currentPage={currentPage}
            currentTab={tabSelect}
            isOpen={this.state.isMenuOpen}
          />
        )}
        <Header
          currentPage={currentPage}
          onChangePage={this.handleChangePage}
          isMobile={isMobile}
          onChangeBurger={() => {
            this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
          }}
          isBurgerOpen={this.state.isMenuOpen}
        />
        {!isMobile && (
          <Navigation
            currentPage={currentPage}
            onChangePage={this.handleChangePage}
          />
        )}
        <div className={"block-content"}>
          <a
            href={"./static/documents/gamme-arrow.pdf"}
            className={"theme-btn-primary download"}
            download={"gamme arrow"}
          >
            <i className="material-icons">get_app</i>
            <h3>{"documentation"}</h3>
          </a>
          <a
            href={"mailto:contact@arrowdiff.fr"}
            className={"theme-btn-primary contact"}
          >
            <i className="material-icons">email</i>
            <h3>{"contact"}</h3>
          </a>
        </div>
        <Content>
          {currentPage === "home" && <Home isMobile={isMobile} />}
          {currentPage === "collectivite" && <Collectives />}
          {currentPage === "promoteurs" && <Promoteurs />}
          {currentPage === "gamme" && (
            <Gamme
              onChangeTab={tabSelected => {
                this.setState({ tabSelect: tabSelected });
              }}
              tabSelect={this.state.tabSelect}
              showTabList={!isMobile}
            />
          )}
          {currentPage === "slider" && <GalleryPicture />}
        </Content>
      </React.Fragment>
    );
  };

  renderMobile = () => {
    return (
      <React.Fragment>
        <Header />
        <Grid>
          <Cell size={12}>
            <h3>site mobile</h3>
            <h3>en construction</h3>
          </Cell>
        </Grid>
      </React.Fragment>
    );
  };

  render() {
    const { isMobile } = this.props;
    return (
      <React.Fragment>
        {!isMobile ? this.renderDesktop() : this.renderMobile()}
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default Index;
