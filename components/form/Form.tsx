import React from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { departments, states } from "./formDatas";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
// import "dayjs/locale/fr";
import { Form, Formik } from "formik";
import { validationSchema } from "./formValidation";
import { addEmployee } from "../../store/employee.slice";
import { Modal } from "@zious/react-typescript-modal";
import { useAppDispatch } from "../../store/hooks";
import {
  responsivePersonnal,
  responsiveStreetNb,
  responsiveStreet,
  responsiveCityState,
  responsiveZipcode,
  responsiveDept,
  responsiveStardate,
  FlexContainer,
  StyledDivColumn,
  StyledFieldset,
  buttonStyle,
  StyledLinkModal,
} from "./form.styled";

const FormAddEmployee = () => {
  // const [locale, setLocale] = React.useState("fr");
  const [birthdate, setBirthdate] = React.useState<Dayjs | null>(null);
  const [startdate, setStartdate] = React.useState<Dayjs | null>(null);
  const dispatch = useAppDispatch();

  //Modal
  const [show, setShow] = React.useState<boolean>();

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

  interface IFormCredentials {
    id: string;
    col1: string;
    col2: string;
    col3: string;
    col4: string;
    col5: string;
    col6: string;
  }

  const formCredentials: IFormCredentials = {
    id: Math.floor(Math.random() * 9999) + "" + zipcodeInput?.current?.value,
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
    col6: dayjs(startdate).format("MM/DD/YYYY"),
  };

  return (
    <div>
      <Modal
        showModal={show}
        title="Confirmation employee creation"
        content="Employee successfully created"
        btnContent={
          <StyledLinkModal href="/showemployee">Next ➡ </StyledLinkModal>
        }
        hideModal={() => setShow(false)}
        srOnly={true}
      />
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
        onSubmit={() => {
          dispatch(addEmployee(formCredentials));
          setShow(true);
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
            <StyledFieldset>
              <legend>Personnal informations</legend>
              <FlexContainer>
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
                  sx={responsivePersonnal}
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
                  sx={responsivePersonnal}
                />
              </FlexContainer>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                // adapterLocale={locale}
              >
                <DatePicker
                  label="Birthdate"
                  value={values.birthdate}
                  inputRef={birthdayInput}
                  onChange={(newBirthdate) => {
                    setBirthdate(newBirthdate);
                    setFieldValue("birthdate", newBirthdate, true);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      id="birthdate"
                      name="birthdate"
                      onBlur={handleBlur}
                      error={touched.birthdate && Boolean(errors.birthdate)}
                      helperText={touched.birthdate && errors.birthdate}
                      sx={responsivePersonnal}
                    />
                  )}
                />
              </LocalizationProvider>
            </StyledFieldset>
            <StyledFieldset>
              <legend>Address</legend>
              <FlexContainer>
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
                  sx={responsiveStreetNb}
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
                  sx={responsiveStreet}
                />
              </FlexContainer>
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
                  sx={responsiveCityState}
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
                  sx={responsiveCityState}
                >
                  {states.map((state, index) => (
                    <MenuItem key={index} value={state.abbreviation}>
                      {state.name}
                    </MenuItem>
                  ))}
                </TextField>
                {/* </FormControl>  */}
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
                  sx={responsiveZipcode}
                />
              </FlexContainer>
            </StyledFieldset>
            <StyledFieldset>
              <legend>Company informations</legend>
              <FlexContainer>
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
                  sx={responsiveDept}
                >
                  {departments.map((department, index) => (
                    <MenuItem key={index} value={department.name}>
                      {department.name}
                    </MenuItem>
                  ))}
                </TextField>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  // adapterLocale={locale}
                >
                  <DatePicker
                    label="Startdate"
                    value={startdate}
                    inputRef={startdateInput}
                    onChange={(newStartdate) => {
                      setStartdate(newStartdate);
                      setFieldValue("startdate", newStartdate, true);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        id="startdate"
                        name="startdate"
                        value={startdate}
                        onBlur={handleBlur}
                        error={touched.startdate && Boolean(errors.startdate)}
                        helperText={touched.startdate && errors.startdate}
                        sx={responsiveStardate}
                      />
                    )}
                  />
                </LocalizationProvider>
              </FlexContainer>
            </StyledFieldset>
            <StyledDivColumn>
              <Button type="submit" variant="contained" sx={buttonStyle}>
                Create new employee
              </Button>
            </StyledDivColumn>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormAddEmployee;
