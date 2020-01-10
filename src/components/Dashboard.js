import React from "react";
import TripForm from './Toggle';

const Dash = () => {
  return (
    <div className="dashContainer">
      <div className="dashHeader">
        <h2>Welcome to your Dashboard</h2>
        <p>Below you will find any trips that you have coming up</p>
      </div>
      <div className="tripContainer">
        <h3>Trips</h3>
        <TripForm />
      </div>
    </div>
  );
};

export default Dash;
