import { useState } from 'react';
import { Typography, Button, TextField, Box } from '@mui/material';
import ExpenseList from '../components/ExpenseList';

function Expense() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpense = { id: new Date().getTime().toString(), name, amount, date };
    setExpenses([...expenses, newExpense]);
    setName('');
    setAmount(0);
    setDate('');
  };

  return (
    <Box>
      <Typography variant="h2">Expense</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" value={name} onChange={(event) => setName(event.target.value)} />
        <TextField label="Amount" value={amount} onChange={(event) => setAmount(event.target.value)} />
        <TextField label="Date" value={date} onChange={(event) => setDate(event.target.value)} />
        <Button type="submit">Add</Button>
      </form>
      <ExpenseList expenses={expenses} />
    </Box>
  );
}

export default Expense;