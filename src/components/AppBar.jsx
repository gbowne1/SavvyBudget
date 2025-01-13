import React, { useState, useCallback } from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Badge } from '@mui/material';
import { Menu as MenuIcon, AccountCircle, ExitToApp, Login } from '@mui/icons-material';

const AppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This will toggle between logged in and logged out state

  const handleMenuOpen = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleLoginLogout = () => {
    setIsLoggedIn((prev) => !prev); // Toggle login/logout state
    handleMenuClose(); // Close the menu after action
  };

  return (
    <MuiAppBar position="static" sx={{ height: '40px', backgroundColor: '#0066cc' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => console.log("SideNav opened")}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SavvyBudget
        </Typography>
        <IconButton
          color="inherit"
          onClick={handleMenuOpen}
          aria-label="user account menu"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{ 'aria-labelledby': 'user-account-menu' }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
          <MenuItem onClick={handleLoginLogout}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </MenuItem>
        </Menu>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
