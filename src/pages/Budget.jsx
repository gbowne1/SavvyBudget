import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

function Budget() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const handleBudgetChange = (event) => {
    const value = Math.max(0, Number(event.target.value));
  };

  const handleExpensesChange = (event) => {
    const value = Math.max(0, Number(event.target.value));
    setExpenses(value);
  };

  const handleSave = () => {
    alert(`Budget Saved: $${budget}, Remaining: $${budget - expenses}`);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Budget Tracker
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          id="budget"
          label="Total Budget"
          type="number"
          value={budget}
          onChange={handleBudgetChange}
          fullWidth
          inputProps={{ 'aria-label': 'Enter total budget' }}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          id="expenses"
          label="Expenses"
          type="number"
          value={expenses}
          onChange={handleExpensesChange}
          fullWidth
          inputProps={{ 'aria-label': 'Enter expenses' }}
        />
      </Box>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Remaining Budget: ${budget - expenses}
      </Typography>
      <Box>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSave} 
          aria-label="Save budget details"
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default Budget;
