import React, { useState } from "react";
import "./SummationFinder.css";

function SummationFinder() {
  const [inputValues, setInputValues] = useState([""]);
  const [totalSum, setTotalSum] = useState(0);

  const handleAdd = () => {
    setInputValues([...inputValues, ""]);
  };

  const handleChange = (index, event) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);

    let sum = 0;
    for (let i = 0; i < newInputValues.length; i++) {
      const inputValue = newInputValues[i];
      if (/^\d+$/.test(inputValue)) {
        sum += parseInt(inputValue, 10);
      } else {
        console.error("Invalid input found in input box", i);
      }
    }
    setTotalSum(sum);
  };

  const handleDelete = (index) => {
    const newInputValues = [...inputValues];
    newInputValues.splice(index, 1);
    setInputValues(newInputValues);

    let sum = 0;
    for (let i = 0; i < newInputValues.length; i++) {
      const inputValue = newInputValues[i];
      if (/^\d+$/.test(inputValue)) {
        sum += parseInt(inputValue, 10);
      } else {
        console.error("Invalid input found in input box", i);
      }
    }
    setTotalSum(sum);
  };

  return (
    <div className="SumContainer">
      <h1 className="SumHeader">Summation Finder</h1>
      <div className="ButtonContainer">
        <button className="Button AddButton" onClick={handleAdd}>
          Add
        </button>
      </div>
      {inputValues.map((inputValue, index) => (
        <div key={index} style={{ marginTop: "10px" }}>
          <div style={{ position: "relative" }}>
            <input
              className="InputBox"
              type="text"
              value={inputValue}
              onChange={(event) => handleChange(index, event)}
            />
            {!/^\d+$/.test(inputValue) && inputValue !== "" && (
              <span className="ErrorMessage">Wrong input</span>
            )}
          </div>
          <button
            className="Button DeleteButton"
            onClick={() => handleDelete(index)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
      <div>
        <p className="TotalSum">Total Sum: {totalSum}</p>
      </div>
    </div>
  );
}

export default SummationFinder;
