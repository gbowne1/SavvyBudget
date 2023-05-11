import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, TextField, Typography } from '@mui/material';

function Signup(props) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'email') {
      if (!value) {
        setFormErrors({
          ...formErrors,
          email: 'Email is required',
        });
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        setFormErrors({
          ...formErrors,
          email: 'Email is invalid',
        });
      } else {
        setFormErrors({
          ...formErrors,
          email: '',
        });
      }
    }

    if (name === 'password') {
      if (!value) {
        setFormErrors({
          ...formErrors,
          password: 'Password is required',
        });
      } else if (value.length < 8) {
        setFormErrors({
          ...formErrors,
          password: 'Password must be at least 8 characters',
        });
      } else {
        setFormErrors({
          ...formErrors,
          password: '',
        });
      }
    }

    if (name === 'confirmPassword') {
      if (!value) {
        setFormErrors({
          ...formErrors,
          confirmPassword: 'Confirm Password is required',
        });
      } else if (value !== formData.password) {
        setFormErrors({
          ...formErrors,
          confirmPassword: 'Passwords do not match',
        });
      } else {
        setFormErrors({
          ...formErrors,
          confirmPassword: '',
        });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Create an Account
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={Boolean(formErrors.email)}
            helperText={formErrors.email}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            error={Boolean(formErrors.password)}
            helperText={formErrors.password}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            error={Boolean(formErrors.confirmPassword)}
            helperText={formErrors.confirmPassword}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            disabled={
              !formData.email ||
              !formData.password ||
              !formData.confirmPassword ||
              Boolean(formErrors.email) ||
              Boolean(formErrors.password) ||
              Boolean(formErrors.confirmPassword)
            }
          >
            Sign Up
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}

Signup.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Signup;