import React, { useState } from 'react';
import './index.css'

function RandomNumberGenerator() {
  
  const [randomNumber, setRandomNumber] = useState(0);

 
  function generateRandomNumber() {
    return Math.floor(Math.random() * 101); 
  }

  
  function generateNewRandomNumber() {
    const newRandomNumber = generateRandomNumber();
    setRandomNumber(newRandomNumber);
  }

  return (
    <div>
    
      <div className="app-containerb">
        <div className="random-number-generator-containerr">
          <h1 className="headingr">Random Number</h1>
          <p className="descriptionr">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-buttonr"
            onClick={generateNewRandomNumber}
          >
            Generate
          </button>
          <p className="random-numberr">{randomNumber}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomNumberGenerator;
