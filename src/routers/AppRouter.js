
import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import Header from '../components/Header.js';
import HelpPage from '../components/HelpPage.js';
import LoginPage from '../components/LoginPage.js';
import NotFoundPage from '../components/NotFoundPage.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
    <Header />
    <Switch>
      <Route path="/" component={LoginPage} exact={true}/>
      <Route path="/dashboard" component={ExpenseDashboardPage}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit/:id" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;