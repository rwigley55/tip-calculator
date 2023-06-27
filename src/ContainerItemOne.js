import React from "react";
import BillInput from "./BillInput";
import SelectTip from "./SelectTip";
import PeopleInput from "./PeopleInput";

import classes from "./ContainerItemOne.module.css";

const ContainerItemOne = ({
  bill,
  onBillChange,
  percent,
  onPercentChange,
  people,
  onPeopleChange,
  error
}) => {
  return (
    <div className={classes.containeritemone}>
      <BillInput onInput={onBillChange} value={bill} />
      <SelectTip setPercent={onPercentChange} value={percent} />
      <PeopleInput onInput={onPeopleChange} value={people} error={error} />
    </div>
  );
};

export default ContainerItemOne;
