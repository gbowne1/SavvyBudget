import React, { useState } from 'react';
import { PieChart, LineChart, BarChart } from 'react-chartkick';
import { Grid, Paper, Typography, Select, MenuItem } from '@mui/material';

function SpendingByCategory({ expenses }) {
  // Categorize expenses by type
  const categories = {};
  expenses.forEach(expense => {
    if (categories[expense.type]) {
      categories[expense.type] += expense.amount;
    } else {
      categories[expense.type] = expense.amount;
    }
  });

  // Convert data to format expected by chart library
  const data = Object.entries(categories).map(([type, amount]) => [type, amount]);

  return (
    <Grid item xs={12} md={6}>
      <Paper>
        <Typography variant="h6" align="center">Spending by Category</Typography>
        <PieChart data={data} />
      </Paper>
    </Grid>
  );
}

function NetWorth({ assets, liabilities }) {
  const netWorth = assets - liabilities;

  return (
    <Grid item xs={12} md={6}>
      <Paper>
        <Typography variant="h6" align="center">Net Worth</Typography>
        <Typography variant="h3" align="center">${netWorth}</Typography>
        <LineChart data={[['Assets', assets], ['Liabilities', liabilities]]} />
      </Paper>
    </Grid>
  );
}

function SavingsRate({ income, expenses }) {
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const savingsRate = ((income - totalExpenses) / income) * 100;

  return (
    <Grid item xs={12} md={6}>
      <Paper>
        <Typography variant="h6" align="center">Savings Rate</Typography>
        <Typography variant="h3" align="center">{savingsRate.toFixed(2)}%</Typography>
        <BarChart data={[['Savings Rate', savingsRate]]} />
      </Paper>
    </Grid>
  );
}

function BillPaymentHistory({ bills }) {
  return (
    <Grid item xs={12} md={6}>
      <Paper>
        <Typography variant="h6" align="center">Bill Payment History</Typography>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bills.map(bill => (
              <tr key={bill.id}>
                <td>{bill.name}</td>
                <td>{bill.dueDate}</td>
                <td>{bill.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>
    </Grid>
  );
}

function Statistics({ expenses, assets, liabilities, income, bills }) {
	const [timePeriod, setTimePeriod] = useState('monthly');

	const handleTimePeriodChange = (event) => {
        setTimePeriod(event.target.value);
    };
	// Filter expenses by time period
	const filteredExpenses = expenses.filter(expense => {
	  switch (timePeriod) {
		case 'monthly':
		  return expense.date.getMonth() === new Date().getMonth();
		case 'yearly':
		  return expense.date.getFullYear() === new Date().getFullYear();
		default:
		  return true;
	  }
	});

  return (
	  <Grid container spacing={2}>
		  <Select value={timePeriod} onChange={handleTimePeriodChange}>
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="yearly">Yearly</MenuItem>
            </Select>
      <SpendingByCategory expenses={filteredExpenses} />
      <NetWorth assets={assets} liabilities={liabilities} />
      <SavingsRate
        income={income}
        expenses={filteredExpenses}
        timePeriod={timePeriod}
        setTimePeriod={setTimePeriod}
      />
      <BillPaymentHistory bills={bills} />
      {/* Add more statistics components here */}
    </Grid>
  );
}

export default Statistics;