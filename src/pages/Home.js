import React, { useState } from 'react';
import {
  Box, Typography, IconButton, Badge, Menu, MenuItem, useTheme, useMediaQuery,
} from '@mui/material';
import { AccountCircle, ExitToApp, Login } from '@mui/icons-material';
import AppBar from '../components/AppBar'; // Import the AppBar
import SideNav from '../components/SideNav'; // Import the SideNav

const menuItems = [
  { label: 'Profile', action: () => alert('Profile clicked') },
  { label: 'My Account', action: () => alert('My Account clicked') },
];

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Toggle login state

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLoginLogout = () => {
    setIsLoggedIn((prevState) => !prevState); // Toggle login/logout state
    handleMenuClose(); // Close the menu after action
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <AppBar />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <SideNav />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: isMobile ? 2 : 3,
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome to SavvyBudget!
          </Typography>
          <Typography variant="body1" paragraph>
            This is a brief overview of your finances. Start managing your budget, expenses, and savings with ease.
          </Typography>

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
                aria-label="User account options"
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
                {menuItems.map((item, index) => (
                  <MenuItem key={index} onClick={item.action}>
                    {item.label}
                  </MenuItem>
                ))}
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
