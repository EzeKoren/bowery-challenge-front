import React, { useState } from 'react'
import store from 'store'
import EmployeeActions from 'actions/employees'
import { EmployeeMap } from 'store/employeesSlice'
import Card from './Card'

import './style.scss'

export default function EmployeeCards() {
  const [employeeCards, setEmployeeCards] = useState([] as JSX.Element[])

  EmployeeActions.fetch()

  store.subscribe(() => {
    console.log(store.getState().employees)
    let cards: JSX.Element[] = []
    for (const id in store.getState().employees) {
      cards.push(<Card key={id} employee={store.getState().employees[id]}/>)
      
    }
    setEmployeeCards(cards)
  })

  return (
    <div className='employee-container'>
      {employeeCards}
    </div>
  )
}
