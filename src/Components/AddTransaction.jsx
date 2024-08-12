import React, { useContext, useRef } from "react";
import { UserContext } from "../Contexts/UserContext";

const AddTransaction = () => {
  const { addTransaction } = useContext(UserContext);
  const descriptionRef = useRef();
  const amountRef = useRef();
  const typeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const description = descriptionRef.current.value;
    const amount = parseFloat(amountRef.current.value);
    const type = typeRef.current.value;

    addTransaction({ id: Date.now(), description, amount, type });

    descriptionRef.current.value = "";
    amountRef.current.value = "";
    typeRef.current.value = "Income";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        ref={descriptionRef}
        required
      />
      <input type="number" placeholder="Amount" ref={amountRef} required />
      <select ref={typeRef}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
