// App.js
import React, { useState } from 'react';
import Finance from 'financejs';
import './App.css'; // Import your CSS styles here

const finance = new Finance();

function App() {
  // State variables to store user inputs and compound interest
  const [age, setAge] = useState('');
  const [dailyExpense, setDailyExpense] = useState('');
  const [investmentOption, setInvestmentOption] = useState('');
  const [compoundInterest, setCompoundInterest] = useState(0); // Initialize compound interest to 0


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Convert age and daily expense to numbers
    const userAge = parseInt(age);
    const userDailyExpense = parseFloat(dailyExpense);
  
     // Calculate compound interest based on investment option
     let interest = 0;
     switch (investmentOption) {
       case 'SP500':
        // Perform compound interest calculation for S&P 500 investment
        interest = finance.CI(userDailyExpense * 20 * 12, 0.08, 60 - userAge, 0);
        break;
      case 'Gold':
        // Perform compound interest calculation for Gold investment
        // Example calculation:
        // compoundInterest = ...
        break;
      case 'Bitcoin':
        // Perform compound interest calculation for Bitcoin investment
        // Example calculation:
        // compoundInterest = ...
        break;
      case 'NASDAQ':
        // Perform compound interest calculation for NASDAQ investment
        // Example calculation:
        // compoundInterest = ...
        break;
      default:
        // Handle invalid option
        break;
    }
  
    // Display the calculated compound interest to the user
    setCompoundInterest(interest); // Update state with calculated compound interest
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
        <label>
          Investment Option:
          <select
            value={investmentOption}
            onChange={(e) => setInvestmentOption(e.target.value)}
            required
          >
            <option value="">Select an option</option>
            <option value="SP500">S&P 500</option>
            {/* Add other options here */}
          </select>
        </label>
        <button type="submit">Calculate</button>
      </form>
      {/* Display compound interest result */}
      {compoundInterest !== 0 && (
        <div>
          <p>Compound Interest: ${compoundInterest.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default App;