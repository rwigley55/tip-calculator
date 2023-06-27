import React from "react";
import CustomTipInput from "./CustomTipInput";
import TipButton from "./TipButton";

import classes from "./SelectTip.module.css";

const SelectTip = (props) => {
  const TIP_PERCENT = [0.05, 0.1, 0.15, 0.25, 0.5];

  const percentHandler = (percent) => {
    props.setPercent(percent);
  };

  // const customPercentHandler = (percent) => {
  //   props.setPercent(percent / 100);
  // };

  return (
    <div className={classes["margin-bottom"]}>
      <span className={classes.label}>Select Tip %</span>
      <div className={classes.selecttip}>
        {TIP_PERCENT.map((percentage) => (
          <TipButton
            amount={percentage}
            onClick={() => percentHandler(percentage)}
            value={props.value}
            key={percentage}
          />
        ))}
        <CustomTipInput value={props.value} onNumberChange={percentHandler} />
      </div>
    </div>
  );
};

export default SelectTip;
