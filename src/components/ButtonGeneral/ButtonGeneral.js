import React from "react";
import "./ButtonGeneral.scss";

export const ButtonGeneral = ({ buttonName, disabled, type, style }) => {
  return (
    <button
      type={type}
      className="button-general"
      style={style}
      disabled={disabled}
    >
      <p>{buttonName}</p>
    </button>
  );
};
