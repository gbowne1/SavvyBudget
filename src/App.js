import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Box } from '@mui/material/';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/SignUp';
import Budget from './pages/Budget';
import Expense from './pages/Expense';
import Savings from './pages/Savings';
import Settings from './pages/Settings';
import Statistics from './pages/Statistics';
import Help from './pages/Help';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import AppBar from './components/AppBar';
import SideNav from './components/SideNav';

const theme = createTheme();

function App() {
	return (
	   <ThemeProvider theme={theme}>
		 <CssBaseline />
		 <Router>
		   <Box sx={{ display: 'flex' }}>
			 <AppBar/>
			 <SideNav />
			 <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
			 <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/expense" element={<Expense />} />
              <Route path="/savings" element={<Savings />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/help" element={<Help />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
			 </Box>
		   </Box>
		 </Router>
	   </ThemeProvider>
  );
}

export default App;