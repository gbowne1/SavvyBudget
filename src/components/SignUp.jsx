import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { TextField } from 'formik-mui';
import { Formik, Form, Field } from 'formik';

function Signup(props) {
  const handleSubmit = (values) => {
    props.onSubmit(values);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Create an Account
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          validate={(values) => {
            const errors = {};
            // Add your validation logic here
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                fullWidth
                name="email"
                label="Email"
              />
              <Field
                component={TextField}
                fullWidth
                type="password"
                name="password"
                label="Password"
              />
              <Field
                component={TextField}
                fullWidth
                type="password"
                name="confirmPassword"
                label="Confirm Password"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                disabled={isSubmitting}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}

export default Signup;