import React from 'react';
import "./Main.scss";

let name = 'Mosh_is_the_king';
console.log(name);

function Score() {
  return (
    <div>
    <div class="score">
    <h5>YOUR SCORE</h5>
    </div>
    <div class="wps">

    <h4>WPS{" "}:</h4>
    <h4>FASTEST{" "}:</h4>
    <h4>SLOWEST{" "}:</h4>

    </div>
    <div class="tryagain"><h5>Start</h5></div>
    </div>
  )
}

export default Score
