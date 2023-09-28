import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

    // Whenever we add new expense filtered expense should have newly added value as we are displaying
    // filtered expenses in <ul> list
    useEffect(() => {
        setFilteredExpenses(expenses)
    },[expenses])

    const searchExpense = (searchText) => {
        const filteredExpenses = expenses.filter((expense) =>
            expense.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredExpenses(filteredExpenses);
    };

    return (
        <>
            <input type="text" className='form-control mb-2 mr-sm-2' placeholder='Type to search...'
                onChange={(event) => searchExpense(event.target.value)}
            />
            <ul className="list-group">
                {filteredExpenses.map((expense) => {
                    return <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost} />
                })}
            </ul>
        </>
    );
};

export default ExpenseList