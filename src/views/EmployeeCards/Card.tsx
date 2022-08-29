import React, { useEffect } from 'react'
import { Employee } from 'store/employeesSlice'
import external from './external.svg'
import './style.scss'

interface props {
  employee: Employee,
  search: string,
  detailedID: string,
  setDetailedID: React.Dispatch<React.SetStateAction<string>>
}

export default function Card({ employee, search, detailedID, setDetailedID }: props) {
  let visible: boolean = (
    employee.first_name.toLowerCase().includes(search.toLowerCase()) ||
    employee.last_name.toLowerCase().includes(search.toLowerCase())
  )
  let details: boolean = employee._id == detailedID

  useEffect(() => {
    visible = (
      employee.first_name.toLowerCase().includes(search.toLowerCase()) ||
      employee.last_name.toLowerCase().includes(search.toLowerCase())
    )
    details = employee._id == detailedID
  })

  return (
    <div className={'card' + (visible ? "" : ' hidden')}
      data-hook={(details ? 'detailed' : 'summary')}>
      <div className="summary" onClick={() => { setDetailedID(employee._id as string) }}>
        <div className="name">
          <span id="first_name">{employee.first_name} </span>
          <span id="last_name">{employee.last_name} </span>
        </div>
        <div id="type">{employee.type}</div>
        <div id="email">{employee.email}</div>
      </div>
      <div className="details-container">
        <div className="details">
          <div className="close" onClick={() => { setDetailedID("") }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <div className="avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
          </div>
          <div className="name-container">
            <div className="name">First name: <b>{employee.first_name}</b></div>
            <div className="surname">Last name: <b>{employee.last_name}</b></div>
          </div>
          <div className="info-container">
            <div className="type">Current position: <b>{employee.type}</b></div>
            <div className="contact-info">Contact info:
              <div className='email'><span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                Email: <b>{employee.email}</b>
              </span></div>
            </div>
          </div>
          <div className="buttons-container">
            <div className="btn-group buttons">
              <a type="button" onClick={(e) => {
                //@ts-ignore
                e.target.classList.add('clicked')
                navigator.clipboard.writeText(window.location.href + employee._id)
                setTimeout(() => {
                  //@ts-ignore
                  e.target.classList.remove('clicked')
                }, 1000)
              }} className="btn btn-outline-primary copy">Copy link</a>
              <a href={'mailto:' + employee.email} className="btn btn-outline-primary">Send an email</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
