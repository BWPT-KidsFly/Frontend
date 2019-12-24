import React from "react";
import { NavLink } from 'react-router-dom';
import { SignUpWrapper, formFlex, SignUpHeader } from './styles';

const SignUpAs = () => {
   return (
      <div>
         <SignUpHeader>
            <h2>Sign Up</h2>
            <h3>Please complete this form to create an account</h3>
         </SignUpHeader>
         <SignUpWrapper style={formFlex}>
            <NavLink className='sign-up-btn' activeClassName='active' to='/sign-up/traveler'>
               Traveler
            </NavLink>

            <NavLink className='sign-up-btn' activeClassName='active' to='/sign-up/staff'>
               KidsFly Connect
            </NavLink>
         </SignUpWrapper>
      </div>
   );
}

export default SignUpAs;