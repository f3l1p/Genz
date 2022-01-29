import React from "react";
import "./Button.scss";

export const MyButton = ({ buttonName, click }) => {
  return (
    <div className="button-container" onClick={click}>
      <p className="button-name">{buttonName}</p>
    </div>
  );
};
