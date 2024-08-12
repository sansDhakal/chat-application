import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AddTransaction from "./Components/AddTransaction";
import Reports from "./Components/Reports";
import Settings from "./Components/Settings";
import TransactionsList from "./Components/TransactionsList";
import { UserProvider } from "./Contexts/UserContext";
import "./App.css";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <div className="home-container">
                  <h1>Welcome to My Finance Tracker</h1>
                  <div className="home-content">
                    <span>Track Your Finances With Ease</span>
                    <span>💲💲💲</span>
                    <span>Manage Your Finances Like A Professional</span>
                  </div>
                </div>
              }
            />
            <Route path="/addTransaction" element={<AddTransaction />} />
            <Route path="/transactions" element={<TransactionsList />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
