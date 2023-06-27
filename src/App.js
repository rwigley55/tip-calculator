import React, { useState } from "react";
import Container from "./Container";
import ContainerItemOne from "./ContainerItemOne";
import ContainerItemTwo from "./ContainerItemTwo";

import "./styles.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [percent, setPercent] = useState(0);
  const [people, setPeople] = useState();
  const [error, setError] = useState(true);

  const billHandler = (event) => {
    setBill(event.target.value);
  };

  const percentHandler = (percentage) => {
    setPercent(percentage);
  };

  const peopleHandler = (event) => {
    const numPeople = parseInt(event.target.value);

    if (numPeople === 0 || event.target.value === "") {
      setError(true);
    } else {
      setError(false);
    }

    setPeople(numPeople);
  };

  const resetHandler = () => {
    setBill("");
    setPeople("");
    setPercent("");
  };

  return (
    <div className="App">
      <Container>
        <ContainerItemOne
          bill={bill}
          onBillChange={billHandler}
          percent={percent}
          onPercentChange={percentHandler}
          people={people}
          onPeopleChange={peopleHandler}
          error={error}
        />
        <ContainerItemTwo
          bill={bill}
          percent={percent}
          people={people}
          onReset={resetHandler}
        />
      </Container>
    </div>
  );
}
