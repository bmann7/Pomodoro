import { CountdownCircleTimer } from "react-countdown-circle-timer";
import React, { useState } from "react";
import "./index.css";
import TextField from "@material-ui/core/TextField";

export default function TimerComponent() {
  //is it common practice to store state within objects?
  //ex: below, timeMinutes and timeSeconds are tied closely together
  //(when one is needed, the other also probably is needed soon after)
  //would it be better to store them in object or separate variables?
  const [timeHours, setTimeHours] = useState(0);
  const [timeMinutes, setTimeMinutes] = useState(0);
  const [timeSeconds, setTimeSeconds] = useState(25);
  const [playingToggle, setPlayingToggle] = useState(false);
  const [initialTime, setInitialTime] = useState(5);

  //function from imported library
  //converts remainingTime into Minute:Second format to render
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes}:${seconds}`;
  };

  //updates value of variable 'initialTime' in response to Input change
  // const handleInputChange = (event) => {
  //   console.log(`New value for initialTime: ${initialTime}`);
  // };

  //starts and pauses the timer
  const handleStartButtonClick = (event) => {
    setPlayingToggle(!playingToggle);
    setInitialTime(event.target.value);

    //setButtonTextTimer()
  };

  //function not needed atm
  // const handleSetTimeButton = () => {
  //   console.log(`initialTime is currently: ${initialTime}`);
  // };

  function startPauseTimerButtonText() {
    if (!playingToggle) {
      return "Start Timer";
    } else {
      return "Pause";
    }
  }

  return (
    <div className="flex">
      <CountdownCircleTimer
        key={initialTime}
        onComplete={() => {
          // do your stuff here
          console.log(`On complete..Value for initialTime: ${initialTime}`);
          setPlayingToggle(false);
          setInitialTime(initialTime);

          return [true, 0]; // repeat animation in 1.5 seconds
        }}
        size={350}
        isPlaying={playingToggle}
        duration={initialTime}
        colors={[
          ["#004777", 0.5],
          ["#F7B801", 0.33],
          ["#A30000", 0.33],
        ]}
      >
        {({ remainingTime }) => `${remainingTime}`}
      </CountdownCircleTimer>
      {/* <CountdownCircleTimer
        onComplete={() => {
          // do your stuff here
          return [true, 1500]; // repeat animation in 1.5 seconds
        }}
        isPlaying
        duration={10}
        colors="#A30000"
      /> */}

      <p>Input starting time below</p>
      <TextField
        id="standard-number"
        type="number"
        placeholder="Enter a Duration"
        defaultValue={timeSeconds}
        //onChange={handleInputChange}
      ></TextField>
      {/* <button onClick={handleSetTimeButton}>SET TIME</button> */}

      <br />

      <button onClick={handleStartButtonClick}>
        {/* {() => {
          if (!playingToggle) {
            return "Start Timer";
          } else {
            return "Pause";
          }
        }} */}
        Start/Pause
      </button>
    </div>
  );
}

//as of 9/15-
//i was trying to have the state from the user input be updated only when the button is clicked
//but i wasnt able to implement it yet

//doing this because the state variable initialTime is what is
//causing the error in the onComplete prop function, I believe.

//the onComplete call would only work if the state of initialTime was unchanged
//If the user changed the form, then the app would crash on complete
//and it would reference the "duration" prop as the error
