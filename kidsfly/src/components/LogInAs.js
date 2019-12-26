import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { LogInWrapper, logInAsFlex, SignUpHeader } from './styles';

const LogInAs = () => {
   return (
      <div>
         <SignUpHeader>
            <h2>Log In</h2>
            <h3>Please log into your Traveler or KidsFly Connect account</h3>
         </SignUpHeader>
         <LogInWrapper style={logInAsFlex}>
            <NavLink className='sign-up-btn' activeClassName='active' to='/log-in/traveler'>
               Traveler
            </NavLink>

            <NavLink className='sign-up-btn' activeClassName='active' to='/log-in/staff'>
               KidsFly Connect
            </NavLink>
         </LogInWrapper>
      </div>
   );
}

export default LogInAs;