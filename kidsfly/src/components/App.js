import React from 'react';
import { Route } from 'react-router-dom';
import TravelerSignUp from './TravelerSignUp';
import StaffSignUp from './StaffSignUp';
import SignUpAs from './SignUpAs';

function App() {
  return (
    <div className="App">
      {/* <TravelerSignUp />
      <StaffSignUp /> */}

      <Route exact path='/sign-up' component={SignUpAs}/>
      <Route path='/sign-up/traveler' component={TravelerSignUp} />
      <Route path='/sign-up/staff' component={StaffSignUp} />
    </div>
  );
}

export default App;
