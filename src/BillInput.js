import React, { Fragment } from "react";
import classes from "./BillInput.module.css";
import DollarSign from "./imgs/DollarSign";
// import { ReactComponent as DollarSign } from './imgs/icon-dollar.svg';

const BillInput = (props) => {
  return (
    <div>
      <label className={classes.label} htmlFor="amount">
        Bill
      </label>
      <DollarSign />
      <input
        id="amount"
        type="number"
        placeholder="0"
        onChange={props.onInput}
        value={props.value}
        className={classes.input}
      />
    </div>
  );
};

export default BillInput;
