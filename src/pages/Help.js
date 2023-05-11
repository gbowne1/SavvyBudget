import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function Help() {
  return (
    <div>
      <Typography variant="h4">Help</Typography>
      <List>
        <ListItem>
          <ListItemText primary="How do I create a budget?" secondary="You can create a budget by visiting the Budget page and filling out the BudgetForm component." />
        </ListItem>
        <ListItem>
          <ListItemText primary="How do I add an expense?" secondary="You can add an expense by visiting the Expense page and filling out the ExpenseForm component." />
        </ListItem>
        <ListItem>
          <ListItemText primary="How do I set up a savings goal?" secondary="You can set up a savings goal by visiting the Savings page and filling out the SavingsForm component." />
        </ListItem>
        <ListItem>
          <ListItemText primary="How do I customize the app settings?" secondary="You can customize the app settings by visiting the Settings page and adjusting the settings components." />
        </ListItem>
      </List>
    </div>
  );
}

export default Help;