import store from "../store"
import { editEmployeeList, Employee } from "../store/employeesSlice";
import axios from "axios"
import config from "../config/default";

const fetch = () => {
    axios.get(`${config.api_url}/employees`).then((response) => {
        store.dispatch(editEmployeeList({payload: response.data, type: 'RESET'}))
    })
}

const createEmployee = (employee: Employee) => {
    axios.post(`${config.api_url}/employees/create`, employee).then((response) => {
        console.log(response)
        employee._id = response.data.insertedId
        console.log(employee)
        store.dispatch(editEmployeeList({payload: employee, type: 'ADD'}))
    })
}

export default { fetch, createEmployee }