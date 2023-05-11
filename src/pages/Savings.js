import { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';

function Savings() {
  const [goal, setGoal] = useState('');
  const [amount, setAmount] = useState(0);
  const [savings, setSavings] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSavings([...savings, { goal, amount }]);
    setGoal('');
    setAmount(0);
  };

  return (
    <Box>
      <Typography variant="h2">Savings</Typography>
      <form onSubmit={handleSubmit}>
        <label>
          Goal:
          <input type="text" value={goal} onChange={(event) => setGoal(event.target.value)} />
        </label>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
        </label>
        <Button type="submit">Add</Button>
      </form>
      <ul>
        {savings.map((item, index) => (
          <li key={index}>
            {item.goal}: {item.amount}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default Savings;