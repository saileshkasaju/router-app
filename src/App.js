import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DashboardRoute from './components/DashboardRoute';
import About from './routes/About';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Users from './routes/Users';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/not-found">Not Found</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <DashboardRoute exact path="/">
            <Home />
          </DashboardRoute>
          <DashboardRoute exact path="/about">
            <About />
          </DashboardRoute>
          <DashboardRoute path="/users">
            <Users />
          </DashboardRoute>
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
