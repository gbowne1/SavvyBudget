import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import PropTypes from "prop-types";
import { styled, useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import BudgetForm from "./components/BudgetForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseItem from "./components/ExpenseItem";
import SavingsForm from "./components/SavingsForm";
import SavingsList from "./components/SavingsList";
import NotificationSettings from "./components/NotificationSettings";
import CurrencySettings from "./components/CurrencySettings";
import FAQList from "./components/FAQList";
import ContactForm from "./components/ContactForm";
import Landing from "./pages/Landing"; 

const drawerWidth = 240;

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}));

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginTop: theme.spacing(8),
}));

function App() {
  const currentTheme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Router>
          <AppBar 
            position="fixed" 
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                SavvyBudget
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer
            variant="permanent"
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}> {/* Replaces drawerContainer class */}
              <List>
                <ListItem button component={Link} to="/">
                  <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/login">
                  <ListItemIcon><AccountCircleOutlinedIcon /></ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItem>
                <ListItem button component={Link} to="/signup">
                  <ListItemIcon><AccountCircleOutlinedIcon /></ListItemIcon>
                  <ListItemText primary="Signup" />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button component={Link} to="/budget">
                  <ListItemIcon><MonetizationOnOutlinedIcon /></ListItemIcon>
                  <ListItemText primary="Budget" />
                </ListItem>
                <ListItem button component={Link} to="/expenses">
                  <ListItemIcon><ReceiptOutlinedIcon /></ListItemIcon>
                  <ListItemText primary="Expenses" />
                </ListItem>
                <ListItem button component={Link} to="/savings">
                  <ListItemIcon><SavingsOutlinedIcon /></ListItemIcon>
                  <ListItemText primary="Savings" />
                </ListItem>
                <ListItem button component={Link} to="/reports">
                  <ListItemIcon><ShowChartOutlinedIcon /></ListItemIcon>
                  <ListItemText primary="Reports" />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button component={Link} to="/settings">
                  <ListItemIcon><SettingsOutlinedIcon /></ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItem>
                <ListItem button component={Link} to="/help">
                  <ListItemIcon><HelpOutlineOutlinedIcon /></ListItemIcon>
                  <ListItemText primary="Help" />
                </ListItem>
                <ListItem button component={Link} to="/contact">
                  <ListItemIcon><HelpOutlineOutlinedIcon /></ListItemIcon>
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Box>
          </Drawer>
          
          {/* Main Content Area - Routes go here */}
          <Main>
            <Toolbar />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Landing />} /> 
              <Route path="/signup" element={<Landing />} />
              <Route path="/budget" element={
                <Box>
                  <Typography variant="h4" gutterBottom>Budget Overview</Typography>
                  <Budget />
                  <Remaining />
                  <ExpenseTotal />
                  <BudgetForm />
                </Box>
              } /> 
              <Route path="/expenses" element={
                 <Box>
                  <Typography variant="h4" gutterBottom>Expense Management</Typography>
                  <ExpenseList />
                  {/* ExpenseItem is likely used within ExpenseList, but included for completeness */}
                  {/* <ExpenseItem /> */}
                </Box>
              } />
              <Route path="/savings" element={
                 <Box>
                  <Typography variant="h4" gutterBottom>Savings Goals</Typography>
                  <SavingsForm />
                  <SavingsList />
                </Box>
              } />
              <Route path="/settings" element={
                 <Box>
                  <Typography variant="h4" gutterBottom>Settings</Typography>
                  <NotificationSettings />
                  <CurrencySettings />
                </Box>
              } />
              <Route path="/help" element={<FAQList />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/reports" element={
                 <Typography variant="h4">Reports/Charts Content</Typography>
              } />

            </Routes>
          </Main>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

App.propTypes = {};

export default App;
