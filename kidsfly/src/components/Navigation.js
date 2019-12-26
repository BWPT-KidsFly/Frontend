import React from "react";
import { NavLink } from "react-router-dom";
import Styled from "styled-components";

const Navigation = () => {
  let NavBar = Styled.div`
  width: 900px;
  `;

  let NavContainer = Styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  `;

  let NavigationLinks = Styled(NavLink)`
  text-decoration: none;
  padding: 3px 20px;
  color: black;
  border-radius: 10px;

  &:hover{
    color: white;
    background-color: #0070B7;
  }
  `;

  return (
    <NavBar className="navbar">
      <NavContainer>
        <div>
          <NavigationLinks exact to="/">
            Home
          </NavigationLinks>
        </div>
        <div>
          <NavigationLinks to="/about-us">About Us</NavigationLinks>
        </div>
        <div>
          <NavigationLinks to="/log-in">Log In</NavigationLinks>
        </div>
        <div>
          <NavigationLinks to="/sign-up">Sign Up</NavigationLinks>
        </div>
      </NavContainer>
    </NavBar>
  );
};

export default Navigation;
