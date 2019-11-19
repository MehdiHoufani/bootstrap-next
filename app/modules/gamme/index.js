import React from "react";
import { Grid, Cell } from "react-md";
import PropTypes from "prop-types";

import tabContent from "./tabsContent";

const Gamme = ({ onChangeTab, tabSelect, showTabList }) => {
  const { Content } = tabContent[tabSelect];
  return (
    <Grid className={"gamme"}>
      {showTabList && (
        <Cell size={2} className={"tabList"}>
          <ul>
            {tabContent.map(({ name }, keyTab) => (
              <li key={keyTab}>
                <button
                  className={`theme-btn-primary ${keyTab === tabSelect &&
                    "active"}`}
                  onClick={() => onChangeTab(keyTab)}
                >
                  <h3>{name}</h3>
                </button>
              </li>
            ))}
          </ul>
        </Cell>
      )}
      <Cell size={9} className={"tabContainer"}>
        <Content />
      </Cell>
    </Grid>
  );
};

Gamme.propTypes = {
  tabSelect: PropTypes.string,
  onChangeTab: PropTypes.func,
  showTabList: PropTypes.boolean
};

Gamme.defaultProps = {
  tabSelect: null,
  onChangeTab: () => {},
  showTabList: true
};

export default Gamme;
