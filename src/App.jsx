// App.js
import React, { useState } from 'react';
import './App.css'; // Import your CSS styles here

function App() {
  // State variables to store user inputs and compound interest
  const [age, setAge] = useState('');
  const [dailyExpense, setDailyExpense] = useState('');
  const [compoundInterest, setCompoundInterest] = useState(null); // Initialize compound interest to null

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert age and daily expense to numbers
    const userAge = parseInt(age);
    const userDailyExpense = parseFloat(dailyExpense);

    // Calculate compound interest
    let totalInvestment = 0;
    let monthlyReturns = 0;

    for (let i = 0; i < 60 - userAge; i++) {
      // Calculate monthly returns and update total investment
      if (i === 0) {
        // First month
        monthlyReturns = 0; // No returns
        totalInvestment += userDailyExpense * 20; // Initial investment
      } else {
        // Subsequent months
        monthlyReturns = totalInvestment * 0.08 / 12; // Monthly returns (8% annual yield)
        totalInvestment += userDailyExpense * 20 + monthlyReturns; // Additional investment plus returns
      }
    }

    // Display the calculated compound interest to the user
    setCompoundInterest(totalInvestment); // Update state with calculated compound interest
  };

  return (
    <div className="App">
      <h1>Compound Interest Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <label>
          Daily Expense ($):
          <input
            type="number"
            value={dailyExpense}
            onChange={(e) => setDailyExpense(e.target.value)}
            required
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
      {/* Display compound interest result */}
      {compoundInterest !== null && (
        <div>
          <p>Compound Interest: ${compoundInterest.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
