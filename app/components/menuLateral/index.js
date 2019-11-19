import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import tabsContent from "modules/gamme/tabsContent";

const MenuLateral = ({ isOpen, onClose, onChange, onChangeTab }) => (
  <>
    <div className={classnames("MenuLateral", { isOpen: isOpen })}>
      <div className={"headbar"}>
        <p>navigation</p>
        <button onClick={onClose}>
          <i className={"material-icons"}>clear</i>
        </button>
      </div>
      <div className={"container"}>
        <ul>
          <li>
            <button onClick={() => onChange("home")}>
              <h3>Home</h3>
            </button>
          </li>
          <li>
            <button onClick={() => onChange("collectivite")}>
              <h3>Solution collectivités</h3>
            </button>
          </li>
          <li>
            <button onClick={() => onChange("promoteurs")}>
              <h3>Solution promoteurs</h3>
            </button>
          </li>
          <li>
            <button onClick={() => onChange("gamme")}>
              <h3>Gamme</h3>
            </button>
            <ul>
              {tabsContent.map((tab, index) => (
                <li key={index}>
                  <button onClick={() => onChangeTab(index)}>
                    <p>{tab.name}</p>
                  </button>
                </li>
              ))}
            </ul>
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
  onChangeTab: PropTypes.func
};

MenuLateral.defaultProps = {
  isOpen: false,
  onClose: () => {},
  onChange: () => {},
  onChangeTab: () => {}
};

export default MenuLateral;
