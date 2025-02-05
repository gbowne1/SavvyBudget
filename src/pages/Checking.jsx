import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Select, MenuItem, FormControl, InputLabel, RadioGroup, FormControlLabel, Radio, Table, TableBody, TableCell, TableHead, TableRow, TablePagination } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AppBar from '../components/AppBar';  
import SideNav from '../components/SideNav';
import axios from 'axios';

const Checking = () => {
    const [account, setAccount] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [newTransaction, setNewTransaction] = useState({
        amount: '',
        description: '',
        type: 'Debit',
        category: '',
        transaction_date: '',
    });
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        // Fetch account data (balance, etc.)
        fetchAccountData();

        // Fetch transactions
        fetchTransactions();
    }, []);

    const fetchAccountData = async () => {
        try {
            const response = await axios.get('/api/accounts/1'); // Replace with dynamic account ID
            setAccount(response.data);
        } catch (error) {
            console.error('Error fetching account data:', error);
        }
    };

    const fetchTransactions = async () => {
        try {
            const response = await axios.get('/api/transactions/1'); // Replace with dynamic account ID
            setTransactions(response.data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    const handleAddTransaction = async () => {
        try {
            await axios.post('/api/transactions', newTransaction); // Call to backend to save new transaction
            setOpenAddDialog(false);
            fetchTransactions(); // Re-fetch transactions after adding new one
        } catch (error) {
            console.error('Error adding transaction:', error);
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleTransactionChange = (e) => {
        const { name, value } = e.target;
        setNewTransaction(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleOpenAddDialog = () => {
        setOpenAddDialog(true);
    };

    const handleCloseAddDialog = () => {
        setOpenAddDialog(false);
    };

    if (!account) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <div>
            <AppBar />
            <SideNav />

            <Container maxWidth="lg" style={{ marginTop: 30 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: 20 }}>
                            <Typography variant="h5">Account Overview</Typography>
                            <Typography variant="h6" style={{ marginTop: 10 }}>
                                {account.account_name}
                            </Typography>
                            <Typography variant="h4" color={account.balance < 0 ? 'error' : 'primary'}>
                                ${account.balance.toFixed(2)}
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper elevation={3} style={{ padding: 20 }}>
                            <Typography variant="h6">Transactions</Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<AddIcon />}
                                onClick={handleOpenAddDialog}
                            >
                                Add Transaction
                            </Button>

                            <Table style={{ marginTop: 20 }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Amount</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Category</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {transactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((transaction) => (
                                        <TableRow key={transaction.id}>
                                            <TableCell>{new Date(transaction.transaction_date).toLocaleDateString()}</TableCell>
                                            <TableCell>{transaction.description}</TableCell>
                                            <TableCell
                                                style={{
                                                    color: transaction.type === 'Debit' ? 'red' : 'green',
                                                }}
                                            >
                                                ${transaction.amount.toFixed(2)}
                                            </TableCell>
                                            <TableCell>{transaction.type}</TableCell>
                                            <TableCell>{transaction.category}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={transactions.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* Add Transaction Dialog */}
            <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
                <DialogTitle>Add New Transaction</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Amount"
                        type="number"
                        name="amount"
                        fullWidth
                        value={newTransaction.amount}
                        onChange={handleTransactionChange}
                        style={{ marginBottom: 15 }}
                    />
                    <TextField
                        label="Description"
                        name="description"
                        fullWidth
                        value={newTransaction.description}
                        onChange={handleTransactionChange}
                        style={{ marginBottom: 15 }}
                    />
                    <FormControl fullWidth style={{ marginBottom: 15 }}>
                        <InputLabel>Category</InputLabel>
                        <Select
                            label="Category"
                            name="category"
                            value={newTransaction.category}
                            onChange={handleTransactionChange}
                        >
                            <MenuItem value="Groceries">Groceries</MenuItem>
                            <MenuItem value="Rent">Rent</MenuItem>
                            <MenuItem value="Salary">Salary</MenuItem>
                            {/* Add more categories as needed */}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth style={{ marginBottom: 15 }}>
                        <RadioGroup
                            row
                            name="type"
                            value={newTransaction.type}
                            onChange={handleTransactionChange}
                        >
                            <FormControlLabel value="Debit" control={<Radio />} label="Debit" />
                            <FormControlLabel value="Credit" control={<Radio />} label="Credit" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        label="Transaction Date"
                        type="date"
                        name="transaction_date"
                        fullWidth
                        value={newTransaction.transaction_date}
                        onChange={handleTransactionChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ marginBottom: 15 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAddDialog} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddTransaction} color="primary">
                        Add Transaction
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Checking;
