import React from 'react';
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material';

function Help() {
  // Questions and answers stored in an array for dynamic rendering
  const helpItems = [
    {
      question: 'How do I create a budget?',
      answer: 'You can create a budget by visiting the Budget page and using the BudgetForm component.',
    },
    {
      question: 'How do I add an expense?',
      answer: 'You can add an expense by visiting the Expense page and using the ExpenseForm component.',
    },
    {
      question: 'How do I set up a savings goal?',
      answer: 'You can set up a savings goal by visiting the Savings page and using the SavingsForm component.',
    },
    {
      question: 'How do I customize the app settings?',
      answer: 'You can customize the app settings by visiting the Settings page and adjusting the settings components.',
    },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Help
      </Typography>
      <List aria-label="Help topics">
        {helpItems.map((item, index) => (
          <ListItem key={index} sx={{ paddingY: 1 }}>
            <ListItemText
              primary={item.question}
              secondary={item.answer}
              primaryTypographyProps={{ fontWeight: 'bold' }}
              secondaryTypographyProps={{ color: 'text.secondary' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Help;
