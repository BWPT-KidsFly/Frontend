import React from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import { SignUpAs, StaffSignUp, AdminSignUp, TravelerSignUp } from './SignUp';
import { LogInAs, LogIn, LogInStaff, AdminLogIn, LogInUser } from './Login';
import { Trip, MyTrips, TripForm, UpdateTrip, CreateTrip } from './Trips'
import { PrivateRoute } from '../utils';
import Dash from './Dashboard';

function App() {
  return (

    <div className="App">
      <Navigation />
      <Route exact path='/' />
      <Route exact path='/sign-up' component={SignUpAs} />
      <Route path='/sign-up/traveler' component={TravelerSignUp} />
      <Route path='/sign-up/staff' component={StaffSignUp} />
      <Route path='/sign-up/admin' component={AdminSignUp} />

      {/* <Route exact path='/log-in' component={LogInAs}/>
      <Route path='/log-in/traveler' component={LogIn} />
      <Route path='/log-in/staff' component={LogIn} /> */}
      {/* <Route exact path='/dashboard' component={TravelerList} /> */}

      <Route path='/log-in/admin' component={AdminLogIn} />
      <Route exact path='/log-in' component={LogInAs} />
      <Route path='/log-in/staff' component={LogInStaff} />
      <Route path='/log-in/traveler' component={LogInUser} />
      <PrivateRoute exact path='/dashboard' component={Dash} />
      <PrivateRoute exact path='/dashboard/mytrips' component={MyTrips} />
      <PrivateRoute exact path='/dashboard/mytrips/:id' component={Trip} />
      <PrivateRoute exact path='dashboard/mytrips/edit/:id' component={UpdateTrip} />



    </div>
  );
}

export default connect()(App);
