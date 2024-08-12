import React, { createContext, useState, useMemo, useCallback } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [settings, setSettings] = useState({ currency: "NRS" });

  const addTransaction = useCallback(
    (transaction) => {
      setTransactions((prevTransactions) => [...prevTransactions, transaction]);
    },
    [setTransactions]
  );

  const deleteTransaction = useCallback(
    (id) => {
      setTransactions((prevTransactions) =>
        prevTransactions.filter((t) => t.id !== id)
      );
    },
    [setTransactions]
  );

  const editTransaction = (id, updatedTransaction) => {
    setTransactions(
      transactions.map((transaction) =>
        transaction.id === id ? updatedTransaction : transaction
      )
    );
  };

  const summary = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === "Income")
      .reduce((acc, curr) => acc + curr.amount, 0);
    const expenses = transactions
      .filter((t) => t.type === "Expense")
      .reduce((acc, curr) => acc + curr.amount, 0);

    return { income, expenses };
  }, [transactions]);

  return (
    <UserContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        editTransaction,
        summary,
        settings,
        setSettings,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
