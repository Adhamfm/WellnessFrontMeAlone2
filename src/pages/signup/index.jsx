import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './style.css'
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useFormControl } from '@mui/material/FormControl';
import Logininput from '../../components/logininput';
import { useState } from 'react';
import { Field, Formik, withFormik, Form } from 'formik';
import SignUpValidationForm from '../../components/validation/SignUpValidationScema';
import * as yup from "yup";

// function Copyright(props) { TODO:CHECK TYPOGRAPHY
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.


const signupInfos = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
  phone: {
    countryCode: "",
    number: ""
  }
}

const initialValues ={
  confirmPassword:""
}
const mergedValues = {
  ...signupInfos,
  ...initialValues
}
export default function Signup() {
  return (

    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box className="MaterialForm" sx={{ mt: 3 }}>
          <Formik
            initialValues={mergedValues}
            onSubmit={(values, formikHelpers) => {
              console.log(values)
              formikHelpers.resetForm();
            }}
            validationSchema={yup.object().shape(SignUpValidationForm)}
          >
            {({ errors, isValid, touched, dirty }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="firstName"
                      type="name"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="First Name"
                      fullWidth
                      error={Boolean(errors.firstName) && Boolean(touched.firstName)}
                      helperText={Boolean(touched.firstName) && errors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="lastName"
                      type="name"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Last Name"
                      fullWidth
                      error={Boolean(errors.lastName) && Boolean(touched.lastName)}
                      helperText={Boolean(touched.lastName) && errors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="email"
                      type="email"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Email"
                      fullWidth
                      error={Boolean(errors.email) && Boolean(touched.email)}
                      helperText={Boolean(touched.email) && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      name="phone.countryCode"
                      type="string"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Country Code"
                      fullWidth
                      error={Boolean(errors.phone?.countryCode) && Boolean(touched.phone?.countryCode)}
                      helperText={Boolean(touched.phone?.countryCode) && errors.phone?.countryCode}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Field
                      name="phone.number"
                      type="string"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Phone Number"
                      fullWidth
                      error={Boolean(errors.phone?.number) && Boolean(touched.phone?.number)}
                      helperText={Boolean(touched.phone?.number) && errors.phone?.number}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="address"
                      type="string"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Home Address"
                      fullWidth
                      error={Boolean(errors.address) && Boolean(touched.address)}
                      helperText={Boolean(touched.address) && errors.address}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="password"
                      type="password"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Password"
                      fullWidth
                      error={Boolean(errors.password) && Boolean(touched.password)}
                      helperText={Boolean(touched.password) && errors.password}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="confirmPassword"
                      type="password"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Confirm Password"
                      fullWidth
                      error={Boolean(errors.confirmPassword) && Boolean(touched.confirmPassword)}
                      helperText={Boolean(touched.confirmPassword) && errors.confirmPassword}
                    />
                  </Grid>
                </Grid>

                <Button variant="contained" type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>TEST ME</Button>
              </Form>
            )}
          </Formik>
          <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
        </Box>
      </Box>
    </Container>
  )
}