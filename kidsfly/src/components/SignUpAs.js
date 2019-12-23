import React from "react";
import { Link } from 'react-router-dom';
import { SignUpWrapper, SignUpAsBtn, formFlex, SignUpHeader } from './styles';

const SignUpAs = () => {
   return (
      <div>
         <SignUpHeader>
            <h2>Sign Up</h2>
            <h3>Please complete this form to create an account</h3>
         </SignUpHeader>
         <SignUpWrapper style={formFlex}>
            <Link to='/sign-up/traveler'>
               <SignUpAsBtn>Traveler</SignUpAsBtn>
            </Link>

            <Link to='/sign-up/staff'>
               <SignUpAsBtn>KidsFly Connect</SignUpAsBtn>
            </Link>
         </SignUpWrapper>
      </div>
   );
}

export default SignUpAs;