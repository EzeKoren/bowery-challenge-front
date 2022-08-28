import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "./employeesSlice";

export const store = configureStore({
    reducer: {
        employees: employeesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export default store;