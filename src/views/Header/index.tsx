import React from 'react'
import AddEmployeeModal from 'views/AddEmployeeModal'
import './style.scss'

export default function Header() {
  return (
    <>
      <div className='header' id='header'>
        <h1>Manolo Employee Manager</h1>
        <AddEmployeeModal/>
      </div>
    </>
  )
}
