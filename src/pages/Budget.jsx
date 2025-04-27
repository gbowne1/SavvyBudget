import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  LinearProgress,
} from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';
import { PieChart } from 'react-chartkick'; // Import specific chart type
import 'chartkick/chart.js'; // Import chartkick with chart.js

function Budget() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [editIndex, setEditIndex] = useState(null);
  const [goal, setGoal] = useState(0);

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      const updatedCategories = [...categories];
      updatedCategories[editIndex] = { category, amount: parseFloat(amount), goal: parseFloat(goal) };
      setCategories(updatedCategories);
      setEditIndex(null);
    } else {
      setCategories([...categories, { category, amount: parseFloat(amount), goal: parseFloat(goal) }]);
    }
    setCategory('');
    setAmount(0);
    setGoal(0);
  };

  const handleEdit = (index) => {
    const item = categories[index];
    setCategory(item.category);
    setAmount(item.amount);
    setGoal(item.goal);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  const calculateProgress = (amount, goal) => (goal > 0 ? (amount / goal) * 100 : 0);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        SavvyBudget Tracker
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <TextField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
        />
        <TextField
          label="Amount ($)"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
        />
        <TextField
          label="Goal ($)"
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddOrUpdate}
          startIcon={<Add />}
        >
          {editIndex !== null ? 'Update' : 'Add'}
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Amount ($)</TableCell>
            <TableCell>Goal ($)</TableCell>
            <TableCell>Progress</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.goal}</TableCell>
              <TableCell>
                <LinearProgress
                  variant="determinate"
                  value={calculateProgress(item.amount, item.goal)}
                />
                {Math.round(calculateProgress(item.amount, item.goal))}%
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(index)} color="primary">
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDelete(index)} color="error">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h6">Budget Distribution</Typography>
        <PieChart
          data={categories.reduce((acc, item) => {
            acc[item.category] = item.amount;
            return acc;
          }, {})}
        />
      </Box>
    </Box>
  );
}

export default Budget;
