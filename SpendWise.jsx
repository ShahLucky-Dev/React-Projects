import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ title, amount, type });
  }
  return (
    <div className="container">
      <div className="header">
        <h1>SpendWise</h1>
        <h1>Dashboard</h1>
      </div>
      <div className="hero">
        <div className="card">
          <h3>
            Total Balance <br />
            0₹
          </h3>
        </div>
        <div className="card">
          <h3>
            Income <br />
            0₹
          </h3>
        </div>
        <div className="card">
          <h3>
            Expenses <br />
            0₹
          </h3>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Add Transaction</h1>
        <br />

        <h3>Title</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <h3>Amount</h3>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br />

        <h3>Type</h3>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <br />
        <button type="submit">+ Add Transaction</button>
      </form>
      <div className="detail">
        <h2>Recent Transaction</h2>
        <br />
        <h2>No transaction yet</h2>
      </div>
    </div>
  );
}

export default App;
