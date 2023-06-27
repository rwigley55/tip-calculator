import React from "react";
import Calculator from "./Calculator";
import ResetButton from "./ResetButton";

import classes from "./ContainerItemTwo.module.css";

const ContainerItemTwo = ({ bill, percent, people, onReset }) => {
  return (
    <div className={classes.containeritemtwo}>
      <Calculator calcBill={bill} calcPercent={percent} numPeople={people} />
      <ResetButton onClick={onReset} />
    </div>
  );
};

export default ContainerItemTwo;
