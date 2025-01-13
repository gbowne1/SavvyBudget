# About SavvyBudget

SavvyBudget is a full-stack web application developed using PostgreSQL, Express, React, and Node.js as well as the Material-UI UI library and its icon library. The application allows users to track their expenses and visualize their spending habits using graphs and charts. The application has a user-friendly interface that allows users to easily add, categorize, and view their expenses. The application is built using modern web development practices and features like Hooks in React and async/await in JavaScript.

To run the application, open the command line in the cloned folder and install dependencies using npm install. To run the application for development, use npm run development or yarn development.

The SavvyBudget application is designed to be for the home user or for personal use.

The SavvyBudget application is available on GitHub and can be cloned using git clone <https://github.com/gbowne1/SavvyBudget/> or downloaded as a zip file. The application has been developed with a test user with some dummy data: E: [email protected] / P: test1234.

The application has several features that allow users to track their expenses and manage their finances effectively. Users can add expenses and categorize them based on their type. The application also includes features like bill reminders, transaction history, and savings goals to help users manage their finances better. The application also has a dashboard that displays the user's income, expenses, and savings using charts and graphs.

In conclusion, SavvyBudget is a powerful and user-friendly application that helps users manage their expenses and track their spending habits effectively. The application is built using modern web development practices and includes features like data visualization, user authentication. The application is available on GitHub and can be downloaded or cloned for personal use.

It's core features are:

    User authentication: To protect user data and allow multiple users to access the app, we can implement a login system that requires a username and password.

    Budget tracking: We can allow users to create a budget and track their expenses against it. The app can display charts and graphs to show users how they are spending their money.

    Bill reminders: The app can send notifications to remind the user about upcoming bills and their due dates. Users can set up recurring bills and customize the notification settings.

    Expense categorization: To help users understand how they are spending their money, we can allow them to categorize their expenses. The app can suggest categories based on the transaction data or allow users to create their own categories.

    Transaction history: The app can display a list of all transactions made by the user. Users can filter the transactions by date, category, or payment method.

    Savings goals: Users can set up savings goals and track their progress towards them. The app can display charts and graphs to show users how close they are to reaching their goals.

The app has a dashboard, it's features are:

    Overview: The dashboard can display a high-level overview of the user's finances. This can include charts and graphs that show the user's income, expenses, and savings.

    Bill calendar: The dashboard can display a calendar that shows all upcoming bills and their due dates. Users can click on a bill to see more details about it.

    Budget progress: The dashboard can display the user's progress towards their budget. This can include charts and graphs that show how much money the user has spent and how much they have left in each category.

    Top expenses: The dashboard can display a list of the user's top expenses for the month. This can help the user identify areas where they can cut back on spending.

    Savings goals progress: The dashboard can display the user's progress towards their savings goals. This can include charts and graphs that show how much they have saved and how much they have left to save.

    Account balances: The dashboard can display the user's account balances for checking, savings, and credit cards. Users can click on an account to see more details about it.

Here are its core routing:

    Home page: This is the main page of the app, which displays an overview of the user's budget, expenses, and savings. This page can include components such as Budget, Remaining, and ExpenseTotal, as described in freecodecamp.org.

    Login page: This page allows users to log in to the app and access their budget data. The login page can be implemented using React Router, as described in stackoverflow.com.

    Signup page: This page allows new users to sign up for the app and create an account. The signup page can be implemented using React Router, similar to the login page.

    Budget page: This page allows users to set up their budget and track their expenses against it. The budget page can include components such as BudgetForm, ExpenseList, and ExpenseItem, as described in freecodecamp.org.

    Expense page: This page allows users to view and edit their expenses. The expense page can include components such as ExpenseList and ExpenseItem, as described in freecodecamp.org.

    Savings page: This page allows users to set up savings goals and track their progress towards them. The savings page can include components such as SavingsForm and SavingsList.

    Settings page: This page allows users to customize the app settings, such as notification preferences and currency format. The settings page can include components such as NotificationSettings and CurrencySettings.

    Statistics page: This page displays statistics and charts related to the user's budget and expenses. The statistics page can be implemented using React Chart.js or a similar library, as described in dev.to.

    Help page: This page provides users with help and support resources, such as FAQs and contact information. The help page can include components such as FAQList and ContactForm.

    We also realise that tracking when the user gets paid can be useful for a budget tracking app. Knowing when the user's income is coming in can help with creating a budget and tracking expenses. For example, if the user gets paid on the 1st and 15th of every month, the app can automatically divide their monthly budget into two parts and remind them to pay bills or save money accordingly. This can be especially helpful for users who have irregular income or fluctuating expenses. forbes.com

    However, tracking income can also be a sensitive topic, as some users may not want to disclose their income or financial information. It's important to make sure that the user's data is secure and private, and to provide clear explanations of how their data will be used and protected. The app can also provide options for users to manually input their income or choose not to disclose it at all.

    Overall, whether to track when the user gets paid depends on the specific requirements and goals of the app, as well as the user's preferences and needs. It's important to consider the benefits and drawbacks of income tracking, and to design the app in a way that is user-friendly, secure, and respectful of the user's privacy.
