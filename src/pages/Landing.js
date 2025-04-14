import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  IconButton,
  InputAdornment,
  Alert,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleSwitchForm = () => {
    setIsLogin((prev) => !prev);
    setErrorMessage(''); // Clear errors when switching forms
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.password || (!isLogin && !formData.email)) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Add API integration here
    console.log('Form submitted:', formData);
    setErrorMessage(''); // Clear errors on successful submission
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'primary.main', // Use theme color
      }}
    >
      <Container maxWidth="sm">
        <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/logo.svg" alt="SavvyBudget Logo" style={{ width: '100px', marginBottom: '1rem' }} />
            <Typography variant="h5" sx={{ marginBottom: '2rem' }} color="primary">
              {isLogin ? 'Sign In to SavvyBudget' : 'Create an Account'}
            </Typography>

            {/* Error message */}
            {errorMessage && (
              <Alert severity="error" sx={{ width: '100%', marginBottom: '1rem' }}>
                {errorMessage}
              </Alert>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <TextField
                label="Username"
                name="username"
                fullWidth
                margin="normal"
                value={formData.username}
                onChange={handleInputChange}
                required
                inputProps={{ 'aria-label': 'Username' }}
              />
              {!isLogin && (
                <TextField
                  label="Email"
                  name="email"
                  fullWidth
                  margin="normal"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  type="email"
                  inputProps={{ 'aria-label': 'Email' }}
                />
              )}
              <TextField
                label="Password"
                name="password"
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleInputChange}
                required
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end" aria-label="Toggle password visibility">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {!isLogin && (
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  fullWidth
                  margin="normal"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  type="password"
                  inputProps={{ 'aria-label': 'Confirm Password' }}
                />
              )}

              {isLogin && (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <Button variant="text" component={Link} to="/forgot-password">
                    Forgot Password?
                  </Button>
                  <label>
                    <input type="checkbox" />
                    Keep me logged in
                  </label>
                </Box>
              )}

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ marginTop: '2rem' }}
                color="primary"
              >
                {isLogin ? 'Sign In' : 'Sign Up'}
              </Button>
            </form>

            {/* Switch between Sign In and Sign Up */}
            <Button onClick={handleSwitchForm} sx={{ marginTop: '1rem' }} color="secondary">
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Landing;
