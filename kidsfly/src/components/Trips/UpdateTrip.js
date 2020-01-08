import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateFlight } from "../../store/actions";
import axios from 'axios'
import { bindActionCreators } from "redux"
import { axiosWithAuth } from "../../utils";

const UpdateTrip = props => {
  
  const initialTrip = {
    name: "",
    date: "",
    time: "",
    airport: "",
    numpassengers: ""
  };
function findnearestAirport(){
  window.onload = function() {
    var startPos;
    var geoOptions = {
      enableHighAccuracy: true
    }
  
    var geoSuccess = function(position) {
      startPos = position;
      document.getElementById('startLat').innerHTML = startPos.coords.latitude;
      document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    };
    var geoError = function(error) {
      console.log('Error occurred. Error code: ' + error.code);
      // error.code can be:
      //   0: unknown error
      //   1: permission denied
      //   2: position unavailable (error response from location provider)
      //   3: timed out
    };
  
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
  };var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

}



nearestAirport(){navigator.geolocation.getCurrentPosition(function(position) {
  const getAirportByCoords=()=>{
    axiosWithAuth().get"https://aerodatabox.p.rapidapi.com/airports/search/location/51.511142/-0.103869/km/100/16");
  }

  getAirportByCoords(position.coords.latitude, position.coords.longitude);


});
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
const mapStateToProps = state => {
  return { flights: state.upcomingFlightsList };
};

const mapDispatchToProps = dispatch => {
  return { dispatch, ...bindActionCreators({ login, addFlight }, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip);
