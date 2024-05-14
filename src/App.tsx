import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [units, setUnits] = useState<number | undefined>(undefined);
  const [billAmount, setBillAmount] = useState<number>(0);

  const calculateBill = () => {
    if (units !== undefined) {
      const calculatedBill = units * 8.81;
      setBillAmount(calculatedBill);
    }
  };

  return (
    <div className="calculator">
      <h1>Electricity Bill Calculator</h1>
      <div className="userInput">
        <label htmlFor="units">Enter units consumed:</label>
        <input
          type="number"
          id="units"
          value={units}
          onChange={(e) => setUnits(Number(e.target.value))}
        />
      </div>
      <button onClick={calculateBill}>Calculate</button>
      <h2>Bill Amount: ₱{billAmount}</h2>
    </div>
  );
};

export default App;
