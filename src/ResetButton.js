import React from "react";

import classes from "./ResetButton.module.css";

const ResetButton = (props) => {
  return (
    <button type="button" className={classes.button} onClick={props.onClick}>
      Reset
    </button>
  );
};

export default ResetButton;
