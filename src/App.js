import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import Landing from './pages/Landing'; // Landing page
import Dashboard from './pages/Dashboard';
import Checking from './pages/Checking';
import Budget from './pages/Budget';
import Expense from './pages/Expense';
import Savings from './pages/Savings';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Statistics from './pages/Statistics';
import NotFound from './pages/NotFound'; // Page for unmatched routes

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <Routes>
            <Route path="/" element={<Landing />} /> {/* Landing page at root */}
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/checking" element={<Checking />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="*" element={<NotFound />} /> {/* NotFound component for invalid routes */}
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
