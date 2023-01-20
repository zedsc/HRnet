import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Employee {
  id: string;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
}

export interface EmployeeState {
  employeesList: Employee[];
}

export const initialState: EmployeeState = {
  employeesList: [
    {
      id: "123456",
      col1: "Tony Stark",
      col2: "01/01/1960",
      col3: "10880, Malibu Point, Malibu 90265",
      col4: "CA",
      col5: "Engineering",
      col6: "08/01/2008",
    },
  ],
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, { payload }: PayloadAction<Employee>) => {
      state.employeesList.push(payload as Employee);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export const selectEmployeesList = (state: RootState) =>
  state.employee.employeesList;
export default employeeSlice.reducer;
