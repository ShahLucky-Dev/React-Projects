import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [transactions, setTransactions] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const transaction = {
      id: Date.now(),
      title: title,
      amount: amount,
      type: type,
    };

    setTransactions([...transactions, transaction]);
    setTitle("");
    setAmount("");
    setType("");
  }

  const incomeTransactions = transactions.filter((item) => {
    return item.type === "income";
  });

  const totalIncome = incomeTransactions.reduce((sum, number) => {
    return sum + Number(number.amount);
  }, 0);

  const expenseTransactions = transactions.filter((item) => {
    return item.type === "expense";
  });

  const totalExpense = expenseTransactions.reduce((sum, number) => {
    return sum + Number(number.amount);
  }, 0);

  const totalBalance = totalIncome - totalExpense;
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
            {totalBalance}
          </h3>
        </div>
        <div className="card">
          <h3>
            Total Income <br />
            {totalIncome} ₹
          </h3>
        </div>
        <div className="card">
          <h3>
            Total Expenses <br />
            {totalExpense}₹
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
        {transactions.length === 0 ? (
          <h2>No transaction yet</h2>
        ) : (
          transactions.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <h3>Number{item.amount}</h3>
                <h3>{item.type}</h3>
              </div>
            );
          })
        )}
        <br />
      </div>
    </div>
  );
}

export default App;
