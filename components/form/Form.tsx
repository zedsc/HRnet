import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { departments, states } from "./formDatas";
import styled from "styled-components";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { Button } from "@mui/material";
import { Form, Formik, useFormik, Field } from "formik";
import { validationSchema } from "./formValidation";
import { useDispatch } from "react-redux/es/exports";
// import "dayjs/locale/fr";
import { addEmployee } from "../../store/employee.slice";
import { colors } from "../../styles/variables";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledDivColum = styled.div`
  display: flex;
  flex-direction: colmun;
  justify-content: space-around;
`;

const FormAddEmployee = () => {
  // const [locale, setLocale] = React.useState("fr");
  const [birthdate, setBirthdate] = React.useState<Dayjs | null>(null);
  const [startdate, setStartdate] = React.useState<Dayjs | null>(null);
  const dispatch = useDispatch();

  //Targetting inputs to get values
  const firstNameInput = React.useRef<HTMLInputElement | null>(null);
  const lastNameInput = React.useRef<HTMLInputElement | null>(null);
  const birthdayInput = React.useRef<HTMLInputElement | null>(null);
  const streetNbInput = React.useRef<HTMLInputElement | null>(null);
  const streetInput = React.useRef<HTMLInputElement | null>(null);
  const cityInput = React.useRef<HTMLInputElement | null>(null);
  const zipcodeInput = React.useRef<HTMLInputElement | null>(null);
  const stateInput = React.useRef<HTMLInputElement | null>(null);
  const departmentInput = React.useRef<HTMLInputElement | null>(null);
  const startdateInput = React.useRef<HTMLInputElement | null>(null);

  interface IFormCredentilas {
    id: string;
    col1: string;
    col2: string;
    col3: string;
    col4: string;
    col5: string;
    col6: string;
  }

  const formCredentials: IFormCredentilas = {
    id: Date.now() + "" + zipcodeInput?.current?.value,
    col1: firstNameInput?.current?.value + " " + lastNameInput?.current?.value,
    col2: birthdayInput?.current?.value!,
    col3:
      streetNbInput?.current?.value +
      ", " +
      streetInput?.current?.value +
      ", " +
      cityInput?.current?.value +
      " " +
      zipcodeInput?.current?.value,
    col4: stateInput?.current?.value!,
    col5: departmentInput?.current?.value!,
    col6: startdateInput?.current?.value!,
  };

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          birthdate: birthdate,
          streetNumber: "",
          street: "",
          city: "",
          state: "",
          zipcode: "",
          department: "",
          startdate: startdate,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          console.log(formCredentials);
          dispatch(addEmployee(formCredentials));
        }}
      >
        {({
          errors,
          touched,
          handleSubmit,
          values,
          setFieldValue,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Personnal informations</legend>
              <StyledDiv>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First name"
                  variant="outlined"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  inputRef={firstNameInput}
                  sx={{ width: 1 / 2, mx: "0.5rem", my: "0.5rem" }}
                />
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  variant="outlined"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  inputRef={lastNameInput}
                  sx={{ width: 1 / 2, mx: "0.5rem", my: "0.5rem" }}
                />
              </StyledDiv>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                // adapterLocale={locale}
              >
                <DatePicker
                  label="Birthdate"
                  value={values.birthdate}
                  inputRef={birthdayInput}
                  onChange={(newValue) => {
                    setFieldValue("birthdate", newValue, true);
                    setBirthdate(newValue);
                  }}
                  PopperProps={{
                    placement: "bottom-end",
                  }}
                  renderInput={(params) => (
                    <TextField
                      id="birthdate"
                      name="birthdate"
                      onBlur={handleBlur}
                      {...params}
                      error={touched.birthdate && Boolean(errors.birthdate)}
                      helperText={touched.birthdate && errors.birthdate}
                      sx={{ width: 1 / 2, mx: "0.5rem", my: "0.5rem" }}
                    />
                  )}
                />
              </LocalizationProvider>
            </fieldset>
            <fieldset>
              <legend>Address</legend>
              <StyledDiv>
                <TextField
                  id="streetNumber"
                  name="streetNumber"
                  label="Street number"
                  variant="outlined"
                  value={values.streetNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.streetNumber && Boolean(errors.streetNumber)}
                  helperText={touched.streetNumber && errors.streetNumber}
                  inputRef={streetNbInput}
                  sx={{ width: 1 / 4, mx: "0.5rem", my: "0.5rem" }}
                />
                <TextField
                  id="street"
                  name="street"
                  label="Street"
                  variant="outlined"
                  value={values.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.street && Boolean(errors.street)}
                  helperText={touched.street && errors.street}
                  inputRef={streetInput}
                  sx={{ width: 3 / 4, mx: "0.5rem", my: "0.5rem" }}
                />
              </StyledDiv>
              <FlexContainer>
                <TextField
                  id="city"
                  name="city"
                  label="City"
                  variant="outlined"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.city && Boolean(errors.city)}
                  helperText={touched.city && errors.city}
                  inputRef={cityInput}
                  sx={{ width: 2 / 5, mx: "0.5rem", my: "0.5rem" }}
                />
                {/* <FormControl fullWidth> */}
                <TextField
                  select
                  id="state"
                  name="state"
                  label="State"
                  variant="outlined"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.state ? errors.state : ""}
                  error={touched.state && Boolean(errors.state)}
                  inputRef={stateInput}
                  sx={{ width: 2 / 5, mx: "0.5rem", my: "0.5rem" }}
                >
                  {states.map((state, index) => (
                    <MenuItem key={index} value={state.abbreviation}>
                      {state.name}
                    </MenuItem>
                  ))}
                </TextField>
                {/* </FormControl> */}
                <TextField
                  id="zipcode"
                  name="zipcode"
                  label="Zipcode"
                  variant="outlined"
                  value={values.zipcode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.zipcode && Boolean(errors.zipcode)}
                  helperText={touched.zipcode && errors.zipcode}
                  inputRef={zipcodeInput}
                  sx={{ width: 1 / 5, mx: "0.5rem", my: "0.5rem" }}
                />
              </FlexContainer>
            </fieldset>
            <fieldset>
              <legend>Company informations</legend>
              <FlexContainer>
                {/* <FormControl fullWidth> */}
                <TextField
                  select
                  id="department"
                  name="department"
                  label="Department"
                  variant="outlined"
                  value={values.department}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.department ? errors.department : ""}
                  error={touched.department && Boolean(errors.department)}
                  inputRef={departmentInput}
                  sx={{ width: 2 / 3, mx: "0.5rem", my: "0.5rem" }}
                >
                  {departments.map((department, index) => (
                    <MenuItem key={index} value={department.name}>
                      {department.name}
                    </MenuItem>
                  ))}
                </TextField>
                {/* </FormControl> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Start date"
                    value={values.startdate}
                    inputRef={startdateInput}
                    onChange={(newValue) => {
                      setFieldValue("startdate", newValue, true);
                      setStartdate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        id="startdate"
                        name="startdate"
                        onBlur={handleBlur}
                        {...params}
                        error={touched.startdate && Boolean(errors.startdate)}
                        helperText={touched.startdate && errors.startdate}
                        sx={{ width: 1 / 3, mx: "0.5rem", my: "0.5rem" }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </FlexContainer>
            </fieldset>
            <StyledDivColum>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  ":hover": { bgcolor: colors.tertiary },
                  bgcolor: colors.secondary,
                  my: "1rem",
                }}
              >
                Create new employee
              </Button>
            </StyledDivColum>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormAddEmployee;
