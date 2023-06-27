import React, { Fragment } from "react";

import classes from "./Calculator.module.css";

const Calculator = (props) => {
  const tip = props.calcBill * props.calcPercent;
  const tipPerPerson = props.numPeople ? tip / props.numPeople : 0;
  const billTotal = +props.calcBill + tip;
  const perPerson = props.numPeople
    ? Math.round((billTotal / props.numPeople) * 100) / 100
    : 0;

  return (
    <Fragment>
      <p className={classes.label}>
        <span>Tip Amount</span>{" "}
        <span className={classes.perperson}>/ person</span>{" "}
        <span className={classes.number}>${tipPerPerson.toFixed(2)}</span>
      </p>
      <p className={classes.labelbottom}>
        <span>Total</span> <span className={classes.perperson}>/ person</span>{" "}
        <span className={classes.number}>${perPerson.toFixed(2)}</span>
      </p>
    </Fragment>
  );
};

export default Calculator;
