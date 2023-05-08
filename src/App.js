// import account_balance from './account_balance.svg';
import FormComponent from "./Component/FormComponent";
import "./App.css";
import Transaction from "./Component/Transaction";
import { useState, useEffect } from "react";
import DataContext from "./Data/DataContext";
import ReportComponent from "./Component/ReportComponent";
import logo from "./logo_wallet.png";

function App() {
  const [items, setItems] = useState([]);
  const [reportBalance, setReportBalance] = useState(0);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
    const income = items
      .filter((e) => e.status === "Income")
      .map((items) => items.amount)
      .reduce((total, e) => (total += e), 0);
    const expense = items
      .filter((e) => e.status === "Expense")
      .map((items) => items.amount)
      .reduce((total, e) => (total += e), 0);
    const balance = income - expense;
    setReportBalance(balance);
    setReportIncome(income);
    setReportExpense(expense);
  }, [items, reportBalance, reportIncome, reportExpense]);

  function delItem(id) {
    setItems(items.filter((items) => items.id !== id));
  }

  return (
    <DataContext.Provider
      value={{
        balance: reportBalance,
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="App">
        <div className="App-logo-set">
          <div>
            <h1>Money Tracker</h1>
            <h2>Income & Expense</h2>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <ReportComponent />
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction inputData={items} delItem={delItem} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
