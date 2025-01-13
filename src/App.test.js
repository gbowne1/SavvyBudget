import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Landing from './pages/Landing'; // Ensure this is the correct path
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom'; // Add Router for context

describe('Landing Page', () => {
  // Test to check if the component renders correctly
  it('renders the Landing page correctly', () => {
    render(
      <Router>
        <Landing />
      </Router>
    );

    // Check if the logo is rendered
    const logo = screen.getByAltText(/SavvyBudget Logo/i);
    expect(logo).toBeInTheDocument();

    // Check if the Sign In form is rendered
    expect(screen.getByText(/Sign In to SavvyBudget/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    // Check for the "Forgot Password?" link
    expect(screen.getByText(/Forgot Password\?/i)).toBeInTheDocument();

    // Check the "Keep me logged in" checkbox is rendered
    expect(screen.getByLabelText(/Keep me logged in/i)).toBeInTheDocument();

    // Check for the "Sign Up" link
    expect(screen.getByText(/Don't have an account\? Sign up/i)).toBeInTheDocument();
  });

  // Test to check if the form switches correctly between Sign In and Sign Up
  it('switches between Sign In and Sign Up forms', () => {
    render(
      <Router>
        <Landing />
      </Router>
    );

    // Initially, the login form should be visible
    expect(screen.getByText(/Sign In to SavvyBudget/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();

    // Click the "Sign up" link to switch to Sign Up form
    fireEvent.click(screen.getByText(/Don't have an account\? Sign up/i));

    // Check that the Sign Up form is now visible
    expect(screen.getByText(/Create an Account/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirm Password/i)).toBeInTheDocument();

    // Check that the "Sign In" toggle link is present
    expect(screen.getByText(/Already have an account\? Sign in/i)).toBeInTheDocument();
  });

  // Test to check the password visibility toggle functionality
  it('checks password visibility toggle', () => {
    render(
      <Router>
        <Landing />
      </Router>
    );

    const passwordField = screen.getByLabelText(/Password/i);
    expect(passwordField).toHaveAttribute('type', 'password'); // Initially hidden

    // Click to show the password
    fireEvent.click(screen.getByLabelText(/toggle password visibility/i));
    expect(passwordField).toHaveAttribute('type', 'text'); // Password should be visible

    // Click again to hide the password
    fireEvent.click(screen.getByLabelText(/toggle password visibility/i));
    expect(passwordField).toHaveAttribute('type', 'password'); // Password should be hidden
  });

  // Test to check that the form has the correct behavior when the "Sign Up" button is clicked
  it('checks the form submission', () => {
    render(
      <Router>
        <Landing />
      </Router>
    );

    // Initially, test the Sign In form
    const signInButton = screen.getByText(/Sign In/i);
    expect(signInButton).toBeInTheDocument();

    // Switch to Sign Up form
    fireEvent.click(screen.getByText(/Don't have an account\? Sign up/i));

    // Check the Sign Up button
    const signUpButton = screen.getByText(/Sign Up/i);
    expect(signUpButton).toBeInTheDocument();
  });

  // Test if the "Forgot Password?" link is rendered when login form is visible
  it('checks the presence of the "Forgot Password?" link', () => {
    render(
      <Router>
        <Landing />
      </Router>
    );
    const forgotPasswordLink = screen.getByText(/Forgot Password\?/i);
    expect(forgotPasswordLink).toBeInTheDocument();
  });
});
