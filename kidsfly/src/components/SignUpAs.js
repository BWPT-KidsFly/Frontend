import React from "react";
import { Link } from 'react-router-dom';
import { SignUpWrapper, SignUpAsBtn, formFlex } from './styles';

const SignUpAs = () => {
   return (
      <SignUpWrapper style={formFlex}>
         <Link to='/sign-up/traveler'>
            <SignUpAsBtn>Traveler</SignUpAsBtn>
         </Link>

         <Link to='/sign-up/staff'>
            <SignUpAsBtn>KidsFly Connect</SignUpAsBtn>
         </Link>
      </SignUpWrapper>
   );
}

export default SignUpAs;