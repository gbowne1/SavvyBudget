import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import {
  ThemeProvider,
  createTheme,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Router>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                SavvyBudget
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button component={Link} to="/">
                  <ListItemIcon>
                    <HomeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/login">
                  <ListItemIcon>
                    <AccountCircleOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItem>
                <ListItem button component={Link} to="/signup">
                  <ListItemIcon>
                    <AccountCircleOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Signup" />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button component={Link} to="/budget">
                  <ListItemIcon>
                    <MonetizationOnOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Budget" />
                </ListItem>
                <ListItem button component={Link} to="/expenses">
                  <ListItemIcon>
                    <ReceiptOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Expenses" />
                </ListItem>
                <ListItem button component={Link} to="/savings">
                  <ListItemIcon>
                    <SavingsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Savings" />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button component={Link} to="/settings">
                  <ListItemIcon>
                    <SettingsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItem>
                <ListItem button component={Link} to="/reports">
								  <ListItemIcon>
				</ListItemIcon>