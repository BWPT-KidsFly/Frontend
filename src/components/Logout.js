import React from "react";

import { Link } from "react-router-dom";

export const Logout = () => {
  window.localStorage.clear();
  return(
       <Link to="/login">Logout </Link>
       )
};
