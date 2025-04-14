import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';

function Settings() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    if (!form.name || !form.email || !form.password) {
      return 'All fields are required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      return 'Please enter a valid email address.';
    }

    if (form.password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }

    return '';
  };

  const handleSubmit = () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    console.log('Form submitted:', form);
    alert('Settings saved successfully!');
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      {error && (
        <Alert severity="error" sx={{ marginBottom: 2 }}>
          {error}
        </Alert>
      )}
      <TextField
        id="name"
        label="Name"
        value={form.name}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        inputProps={{ 'aria-label': 'Name' }}
        required
      />
      <TextField
        id="email"
        label="Email"
        value={form.email}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        inputProps={{ 'aria-label': 'Email' }}
        required
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        value={form.password}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        inputProps={{ 'aria-label': 'Password' }}
        required
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ marginTop: 2 }}
      >
        Save
      </Button>
    </Box>
  );
}

export default Settings;
