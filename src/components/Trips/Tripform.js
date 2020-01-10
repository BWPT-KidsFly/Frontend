import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login,addFlight,updateFlight } from "../../store/actions";
import axios from 'axios'
import { bindActionCreators } from "redux"
import { axiosWithAuth } from "../../utils";

const Tripform = props => {
  
  const initialTrip = {
    name: "",
    date: "",
    time: "",
    airport: "",
    numpassengers: "",
    userid:"",
  };
  
  const handleChange = event => {
    setTrip({ ...trip, [event.target.name]: event.target.value });
  };
 
  const handleSubmit = e => {
    e.preventDefault();
    props.addFlight(trip);
    setTrip(initialTrip);
  };

  return (
    <div>
      <form>
        <input
          name="name"
          value={trip.name}
          placholder="name"
          onChange={handleChange}
          type="text"
        />
        <input
          name="date"
          value={trip.date}
          placholder="date"
          onChange={handleChange}
          type="text"
        />
        <input
          name="time"
          value={trip.time}
          placholder="time"
          onChange={handleChange}
          type="text"
        />
        <input
          name="airport"
          value={trip.airport}
          placholder="airport"
          onChange={handleChange}
          type="text"
        />
        <input
          name="numpassengers"
          value={trip.numpassengers}
          placholder="number of passengers"
          onChange={handleChange}
          type="text"
        />
        <button onClick={handleSubmit}>
          create trip
        </button>
      </form>
    </div>
  );
};