import React from 'react'
import { Employee } from 'store/employeesSlice'
import './style.scss'

interface props {
  employee: Employee
}

export default function Card({ employee }: props) {
  console.log(employee)
  return (
    <div className='card'>
      <div className="name">
        <span id="first_name">{employee.first_name} </span> 
        <span id="last_name">{employee.last_name} </span>
      </div>
      <div id="type">{employee.type}</div>
      <div id="email">
        <a href={"mailto:" + employee.email}>
          {employee.email}
        </a>
        </div>
    </div>
  )
}
