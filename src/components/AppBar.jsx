import React, { useState, useCallback } from "react";
import { Badge, IconButton, Menu, MenuItem, AppBar as MuiAppBar, Toolbar } from "@mui/material";
import { AccountCircle, Notifications, NotificationsOff } from "@mui/icons-material";

const AppBar = () => {
 const [notification, setNotification] = useState({ count: 0, state: false });
 const [anchorEl, setAnchorEl] = useState(null);

 const { state, count } = notification;

 const handleMenuOpen = useCallback((event) => {
    setAnchorEl(event.currentTarget);
 }, []);

 const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
 }, []);

 const handleNotificationToggle = useCallback(() => {
    setNotification(prev => ({ ...prev, state: !prev.state }));
 }, []);

 return (
    <MuiAppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
        <IconButton color="inherit" onClick={handleNotificationToggle}>
          {state ? <Notifications /> : <NotificationsOff />}
          <Badge color="secondary" badgeContent={count}>
            {state ? <Notifications /> : <NotificationsOff />}
          </Badge>
        </IconButton>
      </Toolbar>
    </MuiAppBar>
 );
};

export default AppBar;