import React, { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import EditTransaction from "./EditTransaction";

const TransactionsList = () => {
  const { transactions, deleteTransaction } = useContext(UserContext);
  const [editingTransaction, setEditingTransaction] = useState(null);

  return (
    <div>
      <h2>Transactions List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {editingTransaction && editingTransaction.id === transaction.id ? (
              <EditTransaction
                transaction={editingTransaction}
                onClose={() => setEditingTransaction(null)}
              />
            ) : (
              <>
                <span>{transaction.description} </span>
                <span>{transaction.amount} </span>
                <span>{transaction.type} </span>
                <button onClick={() => setEditingTransaction(transaction)}>
                  Edit
                </button>
                <button onClick={() => deleteTransaction(transaction.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
