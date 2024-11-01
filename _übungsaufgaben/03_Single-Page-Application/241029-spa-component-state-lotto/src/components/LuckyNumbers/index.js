import React, { useState } from "react";

// Styles
import "./styles.css";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function LuckyNumbers() {
  const [numbers, setNumbers] = useState([]);
  const [superNumber, setSuperNumber] = useState(null);

  const getLuckyNumbers = () => {
    let numsCount = 6;
    const nums = [];

    // Get unique numbers
    while (numsCount) {
      let newNumer = getRandomIntInclusive(1, 49);

      while (nums.indexOf(newNumer) !== -1) {
        newNumer = getRandomIntInclusive(1, 49);
      }

      nums.push(newNumer);
      numsCount--;
    }

    const supNum = getRandomIntInclusive(1, 10);
    setNumbers(nums);
    setSuperNumber(supNum);
  };

  const resetLuckyNumbers = () => {
    setNumbers([]);
    setSuperNumber(null);
  };

  return (
    <div>
      <h1>Lotto 6 / 49</h1>
      <p>Generating lucky numbers</p>

      <p>
        {numbers.length !== 0 &&
          numbers.map((num) => {
            return <span className="lucky-number">{num}</span>;
          })}

        {superNumber && (
          <span className="lucky-number lucky-number--bonus">
            {superNumber}
          </span>
        )}
      </p>

      <button onClick={resetLuckyNumbers} className="button button-reset">
        Reset
      </button>
      <button type="reset" onClick={getLuckyNumbers} className="button">
        Show me lucky numbers
      </button>
    </div>
  );
}

export default LuckyNumbers;