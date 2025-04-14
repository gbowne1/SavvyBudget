import React, { useState } from 'react';
import { Typography, Button, TextField, Box } from '@mui/material';
import ExpenseList from '../components/ExpenseList';
import ExpenseItem from '../components/ExpenseItem'; // Adjust the import path as necessary

// Helper function to generate unique IDs
const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

function Expense() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate inputs
    if (!name || !amount || !date || Number(amount) <= 0) {
      alert('Please fill out all fields with valid values.');
      return;
    }

    const newExpense = {
      id: generateId(),
      name,
      amount: parseFloat(amount), // Ensure amount is a number
      date,
    };

    setExpenses([...expenses, newExpense]);
    setName('');
    setAmount('');
    setDate('');
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Expense Tracker
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 2 }}>
          <TextField
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
            required
            inputProps={{ 'aria-label': 'Expense name' }}
          />
          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            fullWidth
            required
            inputProps={{ 'aria-label': 'Expense amount', min: 0 }}
          />
          <TextField
            label="Date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            inputProps={{ 'aria-label': 'Expense date' }}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Add Expense
        </Button>
      </form>

      <ExpenseList>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            name={expense.name}
            cost={expense.amount} // Pass correct prop
            date={expense.date}
          />
        ))}
      </ExpenseList>
    </Box>
  );
}

export default Expense;
