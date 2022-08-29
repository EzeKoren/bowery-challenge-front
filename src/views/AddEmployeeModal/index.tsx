import React, { useRef } from 'react'
import { Employee } from 'store/employeesSlice'
import EmployeeActions from 'actions/employees';
import './style.scss'

export default function AddEmployeeModal() {
  const modal = useRef(null)

  const addEmployee = (form: React.FormEvent<HTMLFormElement>) => {
    form.stopPropagation()
    form.preventDefault()
    //@ts-ignore
    const ob:HTMLInputElement[] = Array.from(form.target)

    //@ts-ignore
    const valid: boolean = form.target.checkValidity()

    if (valid) {
      const employee: Employee = {
        email: ob[0].value,
        first_name: ob[1].value,
        last_name: ob[2].value,
        type: ob[3].value,
      }
      EmployeeActions.createEmployee(employee)

      // @ts-ignore
      modal.current.classList.remove('show')
      // @ts-ignore
      modal.current.setAttribute('aria-hidden', 'true')
      document.getElementsByClassName('modal-backdrop')[0].classList.remove('show')
      
      setTimeout(() => {
        // @ts-ignore
        modal.current.setAttribute('style', 'display: none')
        document.getElementsByClassName('modal-backdrop')[0].remove()
      }, 500)
    }
    else {
      ob.forEach(i => { i.classList.add(i.checkValidity() ? 'is-valid' : 'is-invalid')})
    }
  }

  return (
    <>
      <button type="button" className="add btn btn-primary btn-lg align-middle" data-bs-toggle="modal" data-bs-target="#add-employee-modal">Add employee</button>
      <div ref={modal} className="modal fade" id="add-employee-modal" tabIndex={-1} aria-labelledby="add-employee-modal-label" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="add-employee-modal-label">Add employee</h5>
            </div>
            <div className="modal-body">
              <form className="needs-validation" noValidate onSubmit={addEmployee} id="add-employee-form">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address *</label>
                  <input type="email" className="form-control" id="email" required/>
                  <div className="invalid-feedback">Email is invalid</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="first_name" className="form-label">Name *</label>
                  <input type="text" className="form-control" id="first_name" required/>
                  <div className="invalid-feedback">Name can't be empty</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="last-name" className="form-label">Surname *</label>
                  <input type="text" className="form-control" id="last-name" required/>
                  <div className="invalid-feedback">Surname can't be empty</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="type" className="form-label">Position *</label>
                  <input type="text" className="form-control" id="type" required/>
                  <div className="invalid-feedback">Position can't be empty</div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" form="add-employee-form" value="Submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
