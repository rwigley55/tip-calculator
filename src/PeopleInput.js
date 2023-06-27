import React, { Fragment } from "react";
import PersonIcon from "./imgs/PersonIcon";

import classes from "./PeopleInput.module.css";

const PeopleInput = (props) => {
  return (
    <Fragment>
      <label className={classes.label} htmlFor="people">
        Number of People
      </label>
      {props.error && <span className={classes.error}>Can't be 0</span>}
      <PersonIcon />
      <input
        id="people"
        type="number"
        placeholder="0"
        onChange={props.onInput}
        value={props.value}
        className={`${classes["input"]} ${
          props.error && classes["input-error"]
        }`}
      />
    </Fragment>
  );
};

export default PeopleInput;
