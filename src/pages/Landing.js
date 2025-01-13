import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleSwitchForm = () => setIsLogin((prev) => !prev);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#0066cc', // Medium blue background
      }}
    >
      <Container maxWidth="sm">
        <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/logo.svg" alt="SavvyBudget Logo" style={{ width: '100px', marginBottom: '1rem' }} />
            <Typography variant="h5" sx={{ marginBottom: '2rem' }} color="primary">
              {isLogin ? 'Sign In to SavvyBudget' : 'Create an Account'}
            </Typography>

            {/* Form */}
            <form>
              <TextField
                label="Username"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {!isLogin && (
                <>
                  <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                  />
                  <TextField
                    label="Confirm Password"
                    fullWidth
                    margin="normal"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    type="password"
                  />
                </>
              )}

              <TextField
                label="Password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

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
