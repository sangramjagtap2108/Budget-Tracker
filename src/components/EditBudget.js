import React, { useState } from 'react'

const EditBudget = ({ budget, dispatch, setEdit }) => {
    const [value, setValue] = useState(budget)

    return (
        <>
          <input required="required" type="number" id="name" class='form-control' 
          onChange={(e) => setValue(e.target.value)}
          />
          <button className='btn btn-primary' onClick={() => {
            dispatch({ type:'SET_BUDGET', payload: value });
            setEdit(false);
          }} >
            Save
          </button>
        </>
    )
}

export default EditBudget
