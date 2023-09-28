import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {

    const { budget,expenses } = useContext(AppContext);

    // The reduce() method executes a reducer function on each element of the array and returns a single output 
    // value.
    // reduce(function,initial value)
    const totalExpense = expenses.reduce((total, item)=>{
        return (total=total+item.cost)
    },0)

    const alertType = totalExpense > budget ? 'alert-danger' : 'alert-success';

    return(
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${budget-totalExpense}</span>
        </div>
    );
};

export default Remaining;