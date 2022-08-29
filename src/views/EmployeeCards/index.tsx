import React, { useEffect, useState } from 'react'
import store from 'store'
import Card from './Card'

import './style.scss'

const urlID = window.location.pathname.substring(1)

export default function EmployeeCards() {
  const [employeeCards, setEmployeeCards] = useState([] as JSX.Element[])
  const [search, setSearch] = useState("" as string)
  const [detailedID, setDetailedID] = useState(urlID as string)

  store.subscribe(() => {
    let cards: JSX.Element[] = []
    for (const id in store.getState().employees) {
      cards.push(<Card
        key={id}
        employee={store.getState().employees[id]}
        search={search}
        detailedID={detailedID}
        setDetailedID={setDetailedID}/>)
    }
    setEmployeeCards(cards)
  })

  useEffect(() => {
    let cards: JSX.Element[] = []
    for (const id in store.getState().employees) {
      cards.push(<Card
        key={id}
        employee={store.getState().employees[id]}
        search={search}
        detailedID={detailedID}
        setDetailedID={setDetailedID}/>)
    }
    setEmployeeCards(cards)
  }, [search, detailedID])

  return (
    <>
      <div className="search-container">
        <div className="input-group mb-3">
          <span className="input-group-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </span>
          <input onChange={(e) => setSearch(e.target.value)} type="text" className="form-control" placeholder="Search" aria-label="Search"/>
        </div>
      </div>
      <div className='employee-container'>
        {employeeCards}
      </div>
    </>
  )
}
