import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import TravelerSignUp from './TravelerSignUp';
import StaffSignUp from './StaffSignUp';
import SignUpAs from './SignUpAs';
import LogIn from './LogIn';
import LogInAs from './LogInAs';
import Dashboard from './Dashboard/Dashboard'
import {PrivateRoute} from '../utils'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path='/' />
      <Route exact path='/sign-up' component={SignUpAs} />
      <Route path='/sign-up/traveler' component={TravelerSignUp} />
      <Route path='/sign-up/staff' component={StaffSignUp} />
      <Route exact path='/log-in' component={LogInAs} />
      <Route path='/log-in/staff' component={LogIn} />
      <Route path='/log-in/traveler' component={LogIn} />
      <PrivateRoute path='/dashboard/:user' component={Dashboard} />
      <PrivateRoute path='/dashboard/:user/:tripid' component={Dashboard} />
      <PrivateRoute path='/dashboard/:user/:tripid/edit' component={Dashboard} />
     
     

    </div>
  );
}

export default App;
