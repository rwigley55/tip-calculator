import React from "react";

import classes from "./CustomTipInput.module.css";

const CustomTipInput = (props) => {
  const numberChangeHandler = (event) => {
    props.onNumberChange(event.target.value / 100);
  };

  return (
    <input
      className={classes.input}
      type="number"
      onChange={numberChangeHandler}
      // value={props.value}
      placeholder="Custom"
    />
  );
};

export default CustomTipInput;
