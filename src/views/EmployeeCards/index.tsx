import React, { useState } from 'react'
import store from 'store'
import EmployeeActions from 'actions/employees'
import { Employee } from 'store/employeesSlice'
import Card from './Card'

import './style.scss'

export default function EmployeeCards() {
  const [employees, setEmployees] = useState([] as Employee[])

  EmployeeActions.fetch()

  store.subscribe(() => {
    console.log(store.getState())
    setEmployees(store.getState().employees)
  })

  return (
    <div className='employee-container'>{employees.map(
      e => <Card key={e._id} employee={e}/>
    )}</div>
  )
}
