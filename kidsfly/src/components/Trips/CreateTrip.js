import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login,addFlight } from "../../store/actions";
import axios from 'axios'
import { bindActionCreators } from "redux"
import { axiosWithAuth } from "../../utils";

const CreateTrip = props => {
  
  const initialTrip = {
       airport_name: "SFO",        airline: "1255",        flight_number: "25",        departure_time: "12PM",
    carryon_items: "3",        checked_items: "1",        children: "10",        special_needs: "We have a stroller",
    user_id:Number(window.localStoarage.getItem('user_id'))
  };

  const [trip, setTrip] = useState(initialTrip);

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
          name="airport_name"
          value={trip.airport_name}
          placholder="airport name"
          onChange={handleChange}
          type="text"
        />
        <input
          name=" airline"
          value={trip. airline}
          placholder=" airline"
          onChange={handleChange}
          type="text"
        />
          <input
            name="flight_number"
            value={trip.flight_number}
            placholder="flight number"
            onChange={handleChange}
            type="text"
          />
        <input
          name="departure_time"
          value={trip.departure_time}
          placholder="departure time"
          onChange={handleChange}
          type="text"
        />
        <input
          name="carryon_items"
          value={trip.carryon_items}
          placholder="carryon items"
          onChange={handleChange}
          type="text"
        />
          <input
            name="checked_items"
            value={trip.checked_items}
            placholder="checked items"
            onChange={handleChange}
            type="text"
          />
        <input
          name="children"
          value={trip.children}
          placholder="children"
          onChange={handleChange}
          type="text"
        />
        <input
          name="special_needs"
          value={trip.special_needs}
          placholder="special needs"
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
const mapStateToProps = state => {
  return { flights: state.upcomingFlightsList };
};

const mapDispatchToProps = dispatch => {
  return { dispatch, ...bindActionCreators({  addFlight },dispatch ) }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip);
