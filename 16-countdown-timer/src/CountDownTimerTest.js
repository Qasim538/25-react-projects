import React from "react";
import CountDownTimer from "./CountDownTimer";

const CountDownTimerTest = () => {
  function handleTimeFinish() {}

  return (
    <div className="countdown-timer">
      <h1>CountDown Timer</h1>
      <CountDownTimer initialtime={120} ontimeFinish={handleTimeFinish} />
    </div>
  );
};

export default CountDownTimerTest;
