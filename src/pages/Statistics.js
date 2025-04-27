import React, { useState } from 'react';
import { PieChart, LineChart, BarChart } from 'react-chartkick';
import {
  Grid,
  Paper,
  Typography,
  Select,
  MenuItem,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Alert,
} from '@mui/material';

// A reusable card component for each chart or section
function ChartCard({ title, children }) {
  return (
    <Grid item xs={12} md={6}>
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        {children}
      </Paper>
    </Grid>
  );
}

// Chart to display spending by category
function SpendingByCategory({ expenses }) {
  const categories = expenses.reduce((acc, expense) => {
    acc[expense.type] = (acc[expense.type] || 0) + expense.amount;
    return acc;
  }, {});

  const data = Object.entries(categories).map(([type, amount]) => [type, amount]);

  return (
    <ChartCard title="Spending by Category">
      <PieChart data={data} />
    </ChartCard>
  );
}

// Chart to display net worth (assets vs. liabilities)
function NetWorth({ assets, liabilities }) {
  const netWorth = assets - liabilities;

  return (
    <ChartCard title="Net Worth">
      <Typography variant="h3" align="center">${netWorth.toLocaleString()}</Typography>
      <LineChart data={[['Assets', assets], ['Liabilities', liabilities]]} />
    </ChartCard>
  );
}

// Chart to display savings rate
function SavingsRate({ income, expenses }) {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const savingsRate = ((income - totalExpenses) / income) * 100;

  return (
    <ChartCard title="Savings Rate">
      <Typography variant="h3" align="center">{savingsRate.toFixed(2)}%</Typography>
      <BarChart data={[['Savings Rate', savingsRate]]} />
    </ChartCard>
  );
}

// Display table of bill payment history
function BillPaymentHistory({ bills }) {
  if (!bills.length) {
    return (
      <ChartCard title="Bill Payment History">
        <Typography align="center">No bills available.</Typography>
      </ChartCard>
    );
  }

  return (
    <ChartCard title="Bill Payment History">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bills.map((bill) => (
            <TableRow key={bill.id}>
              <TableCell>{bill.name}</TableCell>
              <TableCell>{bill.dueDate}</TableCell>
              <TableCell>{bill.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ChartCard>
  );
}

// Main Statistics page component
function Statistics({ expenses, assets, liabilities, income, bills }) {
  const [timePeriod, setTimePeriod] = useState('monthly');

  const handleTimePeriodChange = (event) => setTimePeriod(event.target.value);

  const filteredExpenses = expenses.filter((expense) => {
    const date = new Date(expense.date); // Ensure proper date parsing
    if (timePeriod === 'monthly') {
      return date.getMonth() === new Date().getMonth();
    }
    if (timePeriod === 'yearly') {
      return date.getFullYear() === new Date().getFullYear();
    }
    return true;
  });

  if (filteredExpenses.length === 0) {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Statistics
        </Typography>
        <Alert severity="info" sx={{ marginBottom: 2 }}>
          No data available for the selected time period.
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Statistics
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Select
          value={timePeriod}
          onChange={handleTimePeriodChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        >
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="yearly">Yearly</MenuItem>
        </Select>
        <Typography variant="body2" align="center" sx={{ marginBottom: 1 }}>
          Displaying data for: <strong>{timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)}</strong>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <SpendingByCategory expenses={filteredExpenses} />
        <NetWorth assets={assets} liabilities={liabilities} />
        <SavingsRate income={income} expenses={filteredExpenses} />
        <BillPaymentHistory bills={bills} />
      </Grid>
    </Box>
  );
}

export default Statistics;
