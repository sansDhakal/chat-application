import React, { useContext, useMemo } from "react";
import { UserContext } from "../Contexts/UserContext";

const Reports = () => {
  const { transactions, summary } = useContext(UserContext);

  const totalSavings = useMemo(() => {
    return summary.income - summary.expenses;
  }, [summary]);

  return (
    <div>
      <h2>Reports</h2>
      <p>Total Income: {summary.income}</p>
      <p>Total Expenses: {summary.expenses}</p>
      <p>Total Savings: {totalSavings}</p>
    </div>
  );
};

export default Reports;
