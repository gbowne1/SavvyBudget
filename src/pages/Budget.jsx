import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

function Budget() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleRemainingChange = (event) => {
    setRemaining(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h2">Budget</Typography>
      <Box>
        <TextField
          id="budget"
          label="Budget"
          type="number"
          value={budget}
          onChange={handleBudgetChange}
        />
      </Box>
      <Box>
        <TextField
          id="remaining"
          label="Remaining"
          type="number"
          value={remaining}
          onChange={handleRemainingChange}
        />
      </Box>
      <Box>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default Budget;