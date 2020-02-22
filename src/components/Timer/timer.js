import React from "react";

const timer = () => {
  return (
    <div class="container">
      <h1>Countdown to my birthday:</h1>
      <ul>
        <li>
          <span id="days"></span>days
        </li>
        <li>
          <span id="hours"></span>Hours
        </li>
        <li>
          <span id="minutes"></span>Minutes
        </li>
        <li>
          <span id="seconds"></span>Seconds
        </li>
      </ul>
    </div>
  );
};

export default timer;
