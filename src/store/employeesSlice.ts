import { createSlice } from "@reduxjs/toolkit";

export interface Employee {
    _id?: string,
    email: string,
    first_name: string,
    last_name: string,
    type: string
}

export const employeesSlice = createSlice({
    name: "employees",
    initialState: [] as Employee[],
    reducers: {
        edit: (state: Employee[], action) => {
            console.log({state, action})
            switch (action.payload.type) {
                case "ADD":
                    if (Array.isArray(action.payload.payload))
                        state = [...state, ...action.payload.payload]
                    else 
                        state = [...state, action.payload.payload]
                    break
                case "RESET":
                    if (Array.isArray(action.payload.payload))
                        state = action.payload.payload
                    else 
                        state = [action.payload.payload]
                    break
            }
            return state
        }
    }
})

export const editEmployeeList = employeesSlice.actions.edit
export default employeesSlice.reducer
