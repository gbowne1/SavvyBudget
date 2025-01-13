import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Apps as AppsIcon, AccountBalance as AccountBalanceIcon, CreditCard as CreditCardIcon, PieChart as PieChartIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function SideNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          width: 200,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 200,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/budget" onClick={handleDrawerClose}>
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Budget" />
          </ListItem>
          <ListItem button component={Link} to="/expenses" onClick={handleDrawerClose}>
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary="Expenses" />
          </ListItem>
          <ListItem button component={Link} to="/savings" onClick={handleDrawerClose}>
            <ListItemIcon>
              <PieChartIcon />
            </ListItemIcon>
            <ListItemText primary="Savings" />
          </ListItem>
        </List>
      </Drawer>
      <AppBar position="static" sx={{ height: '40px', backgroundColor: '#0066cc' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            SavvyBudget
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default SideNav;
