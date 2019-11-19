import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import tabsContent from "modules/gamme/tabsContent";

const MenuLateral = ({
  isOpen,
  onClose,
  onChange,
  onChangeTab,
  currentPage,
  currentTab
}) => (
  <>
    <div className={classnames("MenuLateral", { isOpen: isOpen })}>
      <div className={"headbar"}>
        <p>menu</p>
        <button onClick={onClose}>
          <i className={"material-icons"}>clear</i>
        </button>
      </div>
      <div className={"container"}>
        <ul>
          <li className={classnames({ select: currentPage === "home" })}>
            <button onClick={() => onChange("home")}>
              <i className={"material-icons"}>home</i>
              <h3>Home</h3>
            </button>
          </li>
          <li
            className={classnames({ select: currentPage === "collectivite" })}
          >
            <button onClick={() => onChange("collectivite")}>
              <i className={"material-icons"}>location_city</i>
              <h3>Solution collectivités</h3>
            </button>
          </li>
          <li className={classnames({ select: currentPage === "promoteurs" })}>
            <button onClick={() => onChange("promoteurs")}>
              <i className={"material-icons"}>build</i>
              <h3>Solution promoteurs</h3>
            </button>
          </li>
          <li>
            <button onClick={() => onChange("gamme")}>
              <i className={"material-icons"}>store</i>
              <h3>Gamme</h3>
            </button>
            <ul className={"submenu"}>
              {tabsContent.map((tab, index) => (
                <li
                  key={index}
                  className={classnames({
                    select: currentPage === "gamme" && currentTab === index
                  })}
                >
                  <button onClick={() => onChangeTab(index)}>
                    <p>{tab.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </li>
          <li className={classnames({ select: currentPage === "slider" })}>
            <button onClick={() => onChange("slider")}>
              <i className={"material-icons"}>video_library</i>
              <h3>Galerie photos</h3>
            </button>
          </li>
        </ul>
      </div>
    </div>
    {isOpen && <div className={"MenuLateral-bg"} />}
  </>
);

MenuLateral.propTypes = {
  isOpen: PropTypes.boolean,
  onClose: PropTypes.func,
  onChange: PropTypes.func,
  onChangeTab: PropTypes.func,
  currentPage: PropTypes.string,
  currentTab: PropTypes.number
};

MenuLateral.defaultProps = {
  isOpen: false,
  onClose: () => {},
  onChange: () => {},
  onChangeTab: () => {},
  currentPage: null,
  currentTab: 0
};

export default MenuLateral;
