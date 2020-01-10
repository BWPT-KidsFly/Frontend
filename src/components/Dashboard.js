import React, { useState, useEffect } from "react";
import TripForm from './Toggle';
import axios from 'axios';

const Dash = () => {

  const [tripCard, setTripCard] = useState([]);

  const fetchTrips = props => {
    axios
    .get('https://bw-kids-fly.herokuapp.com/api/trips')
    .then(res => {
      console.log('Data: ', res)
      return setTripCard(res.data)
    })
    .catch(err => {
      console.log('Error: ', err)
    });
  }

  useEffect(fetchTrips, []);

  return (
    <div className="dashContainer">
      <div className="dashHeader">
        <h2>Welcome to your Dashboard</h2>
        <p>Below you will find any trips that you have coming up</p>
      </div>
      <div className="tripContainer">
        <h3>Trips</h3>
        <TripForm />
        {tripCard.map((value, index) => {
          return (<div className='tripCard' key={index}>
              <h3>{value.airline}</h3>
              <p>{value.flight_number}</p>
              </div>)
        })}
      </div>
    </div>
  );
};

export default Dash;
