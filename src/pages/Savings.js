import React, { useState } from 'react';
import {
  Typography,
  Button,
  TextField,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  LinearProgress,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
} from '@mui/material';

const Savings = () => {
  const [form, setForm] = useState({ goal: '', amount: '', category: '' });
  const [savings, setSavings] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const parsedAmount = parseFloat(form.amount);

    if (!form.goal.trim() || parsedAmount <= 0 || !form.category.trim()) {
      setErrorMessage('Please fill out all fields correctly.');
      return;
    }

    const newGoal = { ...form, amount: parsedAmount, progress: 0 };

    if (editIndex !== null) {
      const updatedSavings = [...savings];
      updatedSavings[editIndex] = newGoal;
      setSavings(updatedSavings);
      setEditIndex(null);
    } else {
      setSavings([...savings, newGoal]);
    }

    resetForm();
  };

  const resetForm = () => {
    setForm({ goal: '', amount: '', category: '' });
    setDialogOpen(false);
    setErrorMessage('');
  };

  const handleEdit = (index) => {
    const selectedGoal = savings[index];
    setForm(selectedGoal);
    setEditIndex(index);
    setDialogOpen(true);
  };

  const handleDelete = (index) => {
    setSavings(savings.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Savings Goals
      </Typography>
      <Paper sx={{ padding: 2, marginBottom: 3 }}>
        <form onSubmit={handleSubmit}>
          {errorMessage && (
            <Alert severity="error" sx={{ marginBottom: 2 }}>
              {errorMessage}
            </Alert>
          )}
          <TextField
            label="Goal"
            name="goal"
            value={form.goal}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
            inputProps={{ 'aria-label': 'Savings Goal Name' }}
          />
          <TextField
            label="Amount"
            name="amount"
            type="number"
            value={form.amount}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
            inputProps={{ 'aria-label': 'Savings Goal Amount', min: 0 }}
          />
          <TextField
            select
            label="Category"
            name="category"
            value={form.category}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          >
            <MenuItem value="Travel">Travel</MenuItem>
            <MenuItem value="Emergency">Emergency</MenuItem>
            <MenuItem value="Gifts">Gifts</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
            {editIndex !== null ? 'Update Goal' : 'Add Goal'}
          </Button>
        </form>
      </Paper>
      <Typography variant="h6" gutterBottom>
        Saved Goals
      </Typography>
      <List>
        {savings.map((item, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={`${item.goal} (${item.category})`}
              secondary={`Amount: $${item.amount.toLocaleString()} | Progress: ${item.progress}%`}
            />
            <LinearProgress variant="determinate" value={item.progress} sx={{ width: '100%', marginY: 1 }} />
            <Button variant="outlined" color="primary" onClick={() => handleEdit(index)} sx={{ marginRight: 1 }}>
              Edit
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => handleDelete(index)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
      <Dialog open={dialogOpen} onClose={resetForm}>
        <DialogTitle>{editIndex !== null ? 'Edit Savings Goal' : 'Add Savings Goal'}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Goal"
              name="goal"
              value={form.goal}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Amount"
              name="amount"
              type="number"
              value={form.amount}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              select
              label="Category"
              name="category"
              value={form.category}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            >
              <MenuItem value="Travel">Travel</MenuItem>
              <MenuItem value="Emergency">Emergency</MenuItem>
              <MenuItem value="Gifts">Gifts</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
            <DialogActions>
              <Button onClick={resetForm}>Cancel</Button>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Savings;
