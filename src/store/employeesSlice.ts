import { createSlice } from "@reduxjs/toolkit";

export interface Employee {
    _id?: string,
    email: string,
    first_name: string,
    last_name: string,
    type: string
}

export type EmployeeMap = Record<string, Employee>

export const employeesSlice = createSlice({
    name: "employees",
    initialState: {} as EmployeeMap,
    reducers: {
        edit: (state: EmployeeMap, action) => {
            switch (action.payload.type) {
                case "ADD":
                    if (Array.isArray(action.payload.payload)) {
                        action.payload.payload.forEach((e: Employee) => {
                            if (e._id) state[e._id] = e
                        })
                    } else 
                        if (action.payload.payload._id)
                            state[action.payload.payload._id] = action.payload.payload
                    break
                case "RESET":
                    if (Array.isArray(action.payload.payload)) {
                        state = {}
                        action.payload.payload.forEach((e: Employee) => {
                            if (e._id) state[e._id] = e
                        })
                    } else 
                        if (action.payload.payload._id) {
                            state = {}
                            state[action.payload.payload._id] = action.payload.payload
                        }
                    break
            }
            return state
        }
    }
})

export const editEmployeeList = employeesSlice.actions.edit
export default employeesSlice.reducer
