import React, {useState} from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    
    props.onAddExpense(expenseData);
  };

  const [addClicked, setAddClicked] = useState(false);

  const addNewExpenseHandler = () => {
    setAddClicked(true);
  };

  const cancelHandler = () => {
    setAddClicked(false);
  };

  return (
    <div className="new-expense">
      {!addClicked && <button type="button" onClick={addNewExpenseHandler}>Add New Expense</button>}
      {addClicked && <ExpenseForm onStopEditing={cancelHandler} onSaveExpense={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
