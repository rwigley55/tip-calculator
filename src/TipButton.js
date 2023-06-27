import React from "react";
import classes from "./TipButton.module.css";

const TipButton = (props) => {
  return (
    <button
      type="button"
      className={classes.button}
      onClick={props.onClick}
      value={props.value}
    >
      {props.amount * 100}%
    </button>
  );
};

export default TipButton;
