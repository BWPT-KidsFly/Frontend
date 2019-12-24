import React from 'react';
import { Route } from 'react-router-dom';
import TravelerSignUp from './TravelerSignUp';
import StaffSignUp from './StaffSignUp';
import SignUpAs from './SignUpAs';
import LogIn from './LogIn';

function App() {
  return (
    <div className="App">
      <Route exact path='/' />
      <Route exact path='/sign-up' component={SignUpAs}/>
      <Route path='/sign-up/traveler' component={TravelerSignUp} />
      <Route path='/sign-up/staff' component={StaffSignUp} />
      <Route path='/log-in/traveler' component={LogIn} />
      <Route path='/log-in/staff' component={LogIn} />
    </div>
  );
}

export default App;
