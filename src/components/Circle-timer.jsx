import { CountdownCircleTimer } from "react-countdown-circle-timer";
import React, { useState } from "react";
import "./Circle-timer.css";
import { MDCTextField } from "@material/textfield";
import TextField from "@material-ui/core/TextField";

//

export default function TimerComponent() {
  //is it common practice to store state within objects?
  //ex: below, timeMinutes and timeSeconds are tied closely together
  //(when one is needed, the other also probably is soon after)
  //would it be better to store them in object or separate variables?
  const [timeHours, setTimeHours] = useState(0);
  const [timeMinutes, setTimeMinutes] = useState(0);
  const [timeSeconds, setTimeSeconds] = useState(15);
  const [playingToggle, setPlayingToggle] = useState(false);
  console.log("Minutes: " + timeMinutes + " Seconds: " + timeSeconds);

  //responds to Input change
  const handleInputChange = (event) => {
    setTimeSeconds(event.target.value);
  };

  const handleStartButtonClick = (event) => {
    console.log("Current state for timeSeconds is: " + timeSeconds);
    setPlayingToggle(!playingToggle);
    console.log(timeSeconds);
    console.log(timeSeconds);
  };

  const handleSetTimeButton = () => {
    console.log(timeSeconds);
  };

  return (
    <div className="center">
      <CountdownCircleTimer
        size={350}
        isPlaying={playingToggle}
        duration={timeSeconds}
        //initialRemainingTime={25}
        colors={[
          ["#004777", 0.5],
          ["#F7B801", 0.33],
          ["#A30000", 0.33],
        ]}
      >
        {({ remainingTime }) => "Time Remaining: \n" + remainingTime}
      </CountdownCircleTimer>
      <br />

      <p>Input starting time below</p>
      <TextField
        id="standard-helperText"
        placeholder="00h : 00m : 00s"
        defaultValue={timeSeconds}
        onChange={handleInputChange}
      ></TextField>

      <button onClick={handleSetTimeButton}>Log timeSeconds in Console</button>

      <h2>
        {timeMinutes} Hours : {timeSeconds} Seconds
      </h2>
      <br />
      <br />
      <button onClick={handleStartButtonClick}>Start Timer</button>
    </div>
  );
}
