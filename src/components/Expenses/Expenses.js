import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpeneseChart from "./ExpeneseChart";

import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  // const [filterUnselectedYear, setFilterUnselectedYear] = useState('2019,2021 & 2022')
  let filterInfoText = "2019,2021 & 2022";

  // console.log(filterUnselectedYear)

  if (selectedYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (selectedYear === "2021") {
    filterInfoText = "2019 , 2020 & 2022";
  } else if (selectedYear === "2022") {
    filterInfoText = "2019 , 2020 & 2021";
  }

  // const allYears = [2019, 2020, 2021, 2022];
  // const unselectedYears = allYears.filter(y => +y !== +selectedYear).join(', ');

  const saveSelectedYear = (value) => {
    setSelectedYear(value);

    // console.log(value, selectedYear)
  };

  const filterExpenseByYear = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(selectedYear)
  );

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterYear={saveSelectedYear}
          selected={selectedYear}
        />
        <ExpeneseChart expenses={filterExpenseByYear} />
        <p style={{ color: "white" }}>Years {filterInfoText} are hidden</p>
        <ExpensesList items={filterExpenseByYear}/>
        {/* {props.expenses.map((expense) => (
          <ExpenseItem
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
        {/* {filterExpenseByYear.length === 0 ? (
          <p style={{ color: "white" }}>No Content</p>
        ) : (
          filterExpenseByYear.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {/* {filterExpenseByYear.length === 0 && (
          <p style={{ color: "white" }}>No content</p>
        )}
        {filterExpenseByYear.length > 0 &&
          filterExpenseByYear.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
      </Card>
    </div>
  );
};

export default Expenses;
