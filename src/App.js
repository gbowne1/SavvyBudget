import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
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

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          {/* App Bar */}
          {/* Drawer */}
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

			  <Route exact path="/" component={Home} />
			  <Route exact path="/login" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/budget" component={Budget} />
              <Route exact path="/expense" component={Expense} />
              <Route exact path="/savings" component={Savings} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/statistics" component={Statistics} />
              <Route exact path="/help" component={Help} />
              <Route path="*" component={NotFound} />

          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;