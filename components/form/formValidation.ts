import * as yup from "yup";
import { departments, states } from "./formDatas";

const lettersNumbersRegex = /^[a-zA-Z0-9.-]*$/;
const lettersRegex = /^[a-zA-ZÀ-ú]+(?:['-.\s][a-zA-ZÀ-ú]+)*$/;

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "First name should be of minimum 2 characters length")
    .max(30, "First name should be of maximum 30 characters length")
    .matches(lettersRegex, "First name can only contains letters")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Last name should be of minimum 2 characters length")
    .max(50, "Last name should be of maximum 50 characters length")
    .matches(lettersRegex, "Last name can only contains letters")
    .required("Last name is required"),
  birthdate: yup
    .date()
    .typeError("Birthdate is required")
    .required("The birthdate is required"),
  streetNumber: yup
    .string()
    .matches(
      lettersNumbersRegex,
      "Street number can only contains letters and numbers"
    )
    .required("The street number is required"),
  street: yup
    .string()
    .min(2, "Street should be of minimum 2 characters length")
    .max(50, "Street should be of maximum 50 characters length")
    .required("The street name is required"),
  city: yup
    .string()
    .min(2, "City should be of minimum 2 characters length")
    .max(50, "City should be of maximum 50 characters length")
    .required("The city is required"),
  state: yup
    .string()
    .oneOf(states.map((state) => state.abbreviation))
    .required("The country state is required"),
  zipcode: yup
    .string()
    .matches(
      lettersNumbersRegex,
      "Zipcode can only contains letters and numbers"
    )
    .required("The zipcode is required"),
  department: yup
    .string()
    .oneOf(departments.map((department) => department.name))
    .required("The department is required"),
  startdate: yup
    .date()
    .typeError("Start date is required")
    .required("The start date is required"),
});
