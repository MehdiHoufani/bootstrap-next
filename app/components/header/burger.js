import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export const Burger = ({ onClick, isOpen }) => (
  <div className={"burger-container"}>
    <button
      onClick={onClick}
      className={classnames("btn-burger", { isOpen: isOpen })}
    >
      <div className={"bar"} />
      <div className={"bar"} />
      <div className={"bar"} />
    </button>
  </div>
);

Burger.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.boolean
};

Burger.defaultProps = {
  onClick: () => {},
  isOpen: false
};
