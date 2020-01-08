import React from "react";
import { Redirect } from "react-router-dom";

export const Logout = () => { localStorage.clear();  return <Redirect to="/login" />;
};
