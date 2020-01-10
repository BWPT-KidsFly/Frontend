import React from "react";
import { connect } from 'react-redux'
import { LOGOUT } from '../store/actions'
import { Redirect, Link } from 'react-router-dom'


const Logout = ({ token,logout}) => {

 
  return (
    <Link to="/log-in" onClick={() => logout}>Logout </Link>
  )
};
const mapState = state => { return { token: state.token } }
const mapDispatch = dispatch => { return { logout: () => dispatch({ type: "LOGOUT" }) } }
export default connect(mapState, { mapDispatch })(Logout)