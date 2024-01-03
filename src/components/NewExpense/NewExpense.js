import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing , setIsEditing] = useState(false)

  


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    }
    props.onAddExpense(expenseData)
    console.log(expenseData)
  }

  const addNewExpenseHandler = () => {
    setIsEditing(true)
  }

  const stopNewExpenseHandler = () => {
    setIsEditing(false)
  }

  let addNewExpense = <button onClick={addNewExpenseHandler}>Add New Expense</button>;

  if(isEditing === true){
    addNewExpense = <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onStop={stopNewExpenseHandler} />
  }



  return (
    <div className="new-expense">
      {addNewExpense}
    </div>
  );
};

export default NewExpense;
