import React, { useState } from 'react';
import { Typography, Button, TextField, Box, List, ListItem, ListItemText, Paper } from '@mui/material';

function Savings() {
  const [goal, setGoal] = useState('');
  const [amount, setAmount] = useState('');
  const [savings, setSavings] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (goal.trim() && amount > 0) {
      setSavings([...savings, { goal, amount: parseFloat(amount) }]);
      setGoal('');
      setAmount('');
    }
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
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Add Savings Goal
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
              primary={item.goal}
              secondary={`Amount: $${item.amount.toFixed(2)}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Savings;
