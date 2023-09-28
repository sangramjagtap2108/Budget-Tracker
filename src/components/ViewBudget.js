import React from 'react'

const ViewBudget = ({ budget, setEdit }) => {
  return (
    <>
      <span>Budget: ${budget}</span>
      <button className='btn btn-primary' onClick={() => setEdit(true)} >Edit</button>
    </>
  )
}

export default ViewBudget
