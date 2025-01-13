import React, { useState } from 'react';
import { Box, Typography, IconButton, Badge, Menu, MenuItem } from '@mui/material';
import { AccountCircle, ExitToApp, Login } from '@mui/icons-material';
import AppBar from '../components/AppBar';  // Import the AppBar
import SideNav from '../components/SideNav';  // Import the SideNav

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Toggle login state

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLoginLogout = () => {
    setIsLoggedIn((prevState) => !prevState);  // Toggle login/logout state
    handleMenuClose();  // Close the menu after action
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar /> {/* AppBar on top */}
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <SideNav /> {/* SideNav on the left */}
        <Box
          component="main"
          sx={{ flexGrow: 1, padding: 3, backgroundColor: '#f4f4f4' }}
        >
          {/* Main content of the page */}
          <Typography variant="h4" gutterBottom>Welcome to SavvyBudget!</Typography>
          <Typography variant="body1" paragraph>
            This is a brief overview of your finances. Start managing your budget, expenses, and savings with ease.
          </Typography>

          {/* User Account and Login/Logout functionality */}
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6" gutterBottom>
              User Account:
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                color="inherit"
                onClick={handleMenuOpen}
                aria-controls="user-account-menu"
                aria-haspopup="true"
              >
                <Badge color="secondary" badgeContent={isLoggedIn ? 1 : 0}>
                  <AccountCircle />
                </Badge>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'user-account-menu',
                }}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
                <MenuItem onClick={handleLoginLogout}>
                  {isLoggedIn ? <ExitToApp /> : <Login />}
                  {isLoggedIn ? 'Logout' : 'Login'}
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
