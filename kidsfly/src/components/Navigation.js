import React from "react";
import { NavLink } from "react-router-dom";
import Styled from "styled-components";
import { Logout } from './Logout'


const Navigation = () => {
  let NavBar = Styled.div`
  width: 65%;
  height: 60px;
  margin: 0 auto;
  margin-bottom: 40px;
  `;

  let NavContainer = Styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  `;

  let NavigationLinks = Styled(NavLink)`
  text-decoration: none;
  padding: 3px 20px;
  color: black;
  border-radius: 7px;

  &:hover{
    color: white;
    background-color: #0070B7;
  }
  `;

  return (
    <NavBar className="navbar">
      <NavContainer>
        {
          !localStorage.getItem("token") ?
            <>
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
            </>
            :
            <>
              <div>
                <NavigationLinks to="/dashboard/mytrips">My Trips</NavigationLinks>
              </div>
              <div>
                <NavigationLinks to="/dashboard">Home</NavigationLinks>
              </div>
              <Logout>Logout</Logout>
            </>
        }
      </NavContainer>
    </NavBar>
  );
};

export default (Navigation);
