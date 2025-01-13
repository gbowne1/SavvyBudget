import React from 'react';
import AppBar from '../components/AppBar';  // Adjust the path if necessary
import SideNav from '../components/SideNav';  // Adjust the path if necessary
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar />  {/* AppBar on top */}
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <SideNav />  {/* Side navigation */}
        <Box
          component="main"
          sx={{ flexGrow: 1, padding: 3, backgroundColor: '#f4f4f4' }}
        >
          {/* The main content of the page */}
          <h1>Welcome to the Home Page</h1>
          <p>Start using the app here...</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
