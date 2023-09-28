// For proper commenting of every line of code - refer https://github.com/chrisblakely01/react-budget-app/blob/main/src/context/AppContext.js
import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

const AppReducer = (state,action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return { ...state,expenses: [...state.expenses,action.payload] };
        case 'DELETE_EXPENSE':
            return { ...state,expenses: state.expenses.filter((expense) => expense.id !== action.payload) }
        case 'SET_BUDGET':
            return { ...state, budget: action.payload}
        default:
            return state; 
    };
};

// Add additional value to array = [...array,additional value]
// Modify object = {...object,attribute_to_be_modify: modified value}

const intialState = {
    budget: 2000,
    expenses: [
        { id: uuidv4(), name: 'shopping', cost: 40 },
        { id: uuidv4(), name: 'holiday', cost: 400 }
    ]
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);

    return(
        <AppContext.Provider 
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch
            }}
        >
        {props.children}
    </AppContext.Provider>
    );
};


