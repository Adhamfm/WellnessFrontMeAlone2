import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Field, Form, Formik } from 'formik';
import * as yup from "yup";
import LoginValidationForm from '../../components/validation/LoginValidationSchmea';

const loginInfo = {
  email: "",
  password: ""
}

export default function Login() {

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
          Sign in
        </Typography>
        <Box className="MaterialForm" sx={{ mt: 3 }}>
          <Formik
            initialValues={loginInfo}
            onSubmit={(values, formikHelpers) => {
              console.log(values)
              formikHelpers.resetForm();
            }}
            validationSchema={yup.object().shape(LoginValidationForm)}
          >
            {({ errors, isValid, touched, dirty }) => (
              <Form>
                <Grid container spacing={2}>
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
                  
                </Grid>

                <Button variant="contained" type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>TEST ME</Button>
              </Form>
            )}
          </Formik>
          <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signup" variant="body2">
                  Don't have an account? Sign up!
                </Link>
              </Grid>
            </Grid>
        </Box>
      </Box>
    </Container>
  );
}