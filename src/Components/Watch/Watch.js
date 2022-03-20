import React, { useEffect, useState } from "react";
import Display from "../Display/Display";

const Watch = () => {
  const [steps, setStaps] = useState(0);
  const increaseSteps = () => {
    setStaps(steps + 100);
  };

  useEffect(() => {
    console.log(steps);
  }, [steps]);

  return (
    <div style={{ border: "2px solid purple", margin: "5px" }}>
      <h2>This is my Watch</h2>
      <h3>My Current Steps: {steps}</h3>
      <button onClick={increaseSteps}>De dore!</button>
      <Display name="OLAD display" steps={steps}></Display>
    </div>
  );
};

export default Watch;
