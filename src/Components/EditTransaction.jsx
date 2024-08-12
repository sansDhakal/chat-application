import React, { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";

const EditTransaction = ({ transaction, onClose }) => {
  const { editTransaction } = useContext(UserContext);
  const [description, setDescription] = useState(transaction.description);
  const [amount, setAmount] = useState(transaction.amount);
  const [type, setType] = useState(transaction.type);

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedTransaction = {
      ...transaction,
      description,
      amount: parseFloat(amount),
      type,
    };

    editTransaction(transaction.id, updatedTransaction);
    onClose(); // Close the edit form after saving
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Edit Transaction</h2>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></input>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      ></input>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default EditTransaction;
