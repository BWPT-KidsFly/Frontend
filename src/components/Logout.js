import React from "react";
import { connect } from 'react-redux'
import { LOGOUT } from '../store/actions'
import { Redirect, Link } from 'react-router-dom'


const Logout = ({ logout,dispatch}) => {
const logoutandclear=()=>{
  window.localStorage.removeItem(`token`);
  dispatch({ type: "LOGOUT" })
}
  return (
    <Link to="/log-in" onClick={logoutandclear}>Logout </Link>
  )
};
const mapState = state => { return { token: state.token } }

export default connect(mapState)(Logout)