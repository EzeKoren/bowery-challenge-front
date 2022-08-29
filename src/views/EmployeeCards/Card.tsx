import React from 'react'
import { Employee } from 'store/employeesSlice'
import external from './external.svg'
import './style.scss'

interface props {
  employee: Employee
}

export default function Card({ employee }: props) {
  console.log(employee)
  return (
    <div className='card'>
      <a className="detailed" href={'/' + employee._id}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
      </svg>
      </a>
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
