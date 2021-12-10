import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './auth';


import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import SignUp from './pages/SignUp';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/admin" component={Dashboard} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/signup" component={SignUp} />
        </Switch>
    </Router>
);

export default Routes;