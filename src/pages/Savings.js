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
  DialogActions
} from '@mui/material';

function Savings() {
  const [goal, setGoal] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [savings, setSavings] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (goal.trim() && amount > 0 && category.trim()) {
      const newGoal = { goal, amount: parseFloat(amount), category, progress: 0 };
      if (editIndex !== null) {
        const updatedSavings = [...savings];
        updatedSavings[editIndex] = newGoal;
        setSavings(updatedSavings);
        setEditIndex(null);
      } else {
        setSavings([...savings, newGoal]);
      }
      resetForm();
    }
  };

  const resetForm = () => {
    setGoal('');
    setAmount('');
    setCategory('');
    setDialogOpen(false);
  };

  const handleEdit = (index) => {
    const selectedGoal = savings[index];
    setGoal(selectedGoal.goal);
    setAmount(selectedGoal.amount);
    setCategory(selectedGoal.category);
    setEditIndex(index);
    setDialogOpen(true);
  };

  const handleDelete = (index) => {
    setSavings(savings.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Savings
      </Typography>
      <Paper sx={{ padding: 2, marginBottom: 3 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            select
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            margin="normal"
          >
            <MenuItem value="Travel">Travel</MenuItem>
            <MenuItem value="Emergency">Emergency</MenuItem>
            <MenuItem value="Gifts">Gifts</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
            {editIndex !== null ? 'Update Goal' : 'Add Savings Goal'}
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
              secondary={`Amount: $${item.amount.toFixed(2)} | Progress: ${item.progress}%`}
            />
            <LinearProgress
              variant="determinate"
              value={item.progress}
              sx={{ width: '100%', marginY: 1 }}
            />
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleEdit(index)}
              sx={{ marginRight: 1 }}
            >
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
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              select
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              fullWidth
              margin="normal"
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
}

export default Savings;
