import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import Landing from './pages/Landing';  // New landing page
import Dashboard from './pages/Dashboard';
import Checking from './pages/Checking';
import Budget from './pages/Budget';
import Expense from './pages/Expense';
import Savings from './pages/Savings';
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <Routes>
            <Route path="/" element={<Landing />} /> {/* Show landing page at root */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/checking" element={<Checking />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
