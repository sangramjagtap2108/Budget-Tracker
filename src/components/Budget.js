import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import EditBudget from './EditBudget';
import ViewBudget from "./ViewBudget";

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [edit, setEdit] = useState(false);

    return(
        <div className="alert alert-secondary d-flex align-items-center justify-content-between">
            {
                edit ? <EditBudget budget={budget} dispatch={dispatch} setEdit={setEdit}/> : <ViewBudget budget={budget} setEdit={setEdit}/>
            }
        </div>
    );
};

export default Budget;