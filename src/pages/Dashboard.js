import React, { useState } from 'react';
import {
  Box, Grid, Paper, Card, Button, Typography, FormGroup, FormControlLabel, 
  Switch, TextField, List, ListItem, ListItemText, Table, TableBody, 
  TableCell, TableContainer, TableRow, TableFooter, Pagination, Stack, 
  TableSortLabel, CardContent, CardActions, Breadcrumbs, Drawer, Backdrop, Slider, Dialog, DialogTitle
} from '@mui/material';

const Dashboard = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  const handleBackdropToggle = () => setBackdropOpen(!backdropOpen);
  const handleSort = () => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  const handlePaginationChange = (event, value) => setCurrentPage(value);
  const handleCloseDialog = () => setDialogOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" sx={{ width: 250 }}>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6">Navigation</Typography>
          <List>
            <ListItem button component="a" href="/dashboard">
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component="a" href="/savings">
              <ListItemText primary="Savings" />
            </ListItem>
            <ListItem button component="a" href="/settings">
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ height: 64 }} />
        <Box sx={{ padding: 2 }}>
          <Stack spacing={3}>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography color="text.primary">Home</Typography>
              <Typography color="text.primary">Dashboard</Typography>
            </Breadcrumbs>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Budget Overview</Typography>
                    <Slider defaultValue={50} aria-label="Budget Slider" valueLabelDisplay="auto" />
                    <FormGroup>
                      <FormControlLabel control={<Switch />} label="Show Budget Alerts" />
                    </FormGroup>
                    <TextField label="Notes" fullWidth multiline rows={3} variant="outlined" />
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" onClick={handleBackdropToggle}>
                      Show Loading
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={8}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <TableSortLabel
                            active
                            direction={sortDirection}
                            onClick={handleSort}
                          >
                            Expense Name
                          </TableSortLabel>
                        </TableCell>
                        <TableCell align="right">Amount</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Expense 1</TableCell>
                        <TableCell align="right">$50</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Expense 2</TableCell>
                        <TableCell align="right">$120</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TableCell colSpan={2}>
                          <Stack spacing={2} alignItems="center">
                            <Pagination 
                              count={10} 
                              page={currentPage} 
                              onChange={handlePaginationChange}
                              color="primary"
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    </TableFooter>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Stack>

          <Dialog open={dialogOpen} onClose={handleCloseDialog}>
            <DialogTitle>Alert</DialogTitle>
            <Box sx={{ padding: 2 }}>
              <Typography variant="body1">Something important needs your attention.</Typography>
              <Button variant="contained" color="primary" onClick={handleCloseDialog}>
                Okay
              </Button>
            </Box>
          </Dialog>

          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={backdropOpen}
            onClick={handleBackdropToggle}
          >
            <Typography variant="h6" color="inherit">Loading...</Typography>
          </Backdrop>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
