import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import TravelerSignUp from './TravelerSignUp';
import StaffSignUp from './StaffSignUp';
import SignUpAs from './SignUpAs';
import LogInStaff from './LogInStaff';
import LogInUser from './LogInUser';
import LogInAs from './LogInAs';
import AdminSignUp from './AdminSignUp';
import MyTrips from './Trips/MyTrips';
import { PrivateRoute } from '../utils';
import LogIn from "./LogIn";
import AdminLogIn from './AdminLogIn';
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
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/dashboard/mytrips' component={MyTrips} />
      <PrivateRoute path='/dashboard/:tripid/edit' component={Dash} />



    </div>
  );
}

export default App;
