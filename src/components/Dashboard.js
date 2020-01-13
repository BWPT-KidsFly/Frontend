import React, { useState, useEffect } from "react";
import { connect, } from "react-redux"
import { getAiportByCoords, editFlight, fetchTrips, addFlight } from "../store/actions"
import {useHistory} from "react-router-dom"
import TripForm from './Toggle';
import MyTrips from "../components/Trips/MyTrips"
import axios from 'axios'
import { axiosWithAuth } from "../utils/axiosWithAuth"
import NearestAirport from "./Trips/NearestAirport";

const Dash = ({message, dispatch, upcomingFlightsList }) => {

  const history=useHistory()

  const initialAirport = { name: "", distance: "" };
  const [airport, setAirport] = useState({ initialAirport });
  const [position, setPosition] = useState();

  const success = (pos) => {
      const { latitude, longitude, accuracy } = pos.coords;
      console.log('Your current position is:');
      console.log(`Latitude : ${latitude}`);
      console.log(`Longitude: ${longitude}`);
      console.log(`More or less ${accuracy} meters.`);

      setPosition({ latitude: latitude, longitude: longitude, accuracy: accuracy })
      return (console.log("position", position))
  }

  const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };



  const browserCoordsII = () => {
      navigator.geolocation.getCurrentPosition(success, error, options);
      //returns the browser coordinates for the airport by distance api as object position{}
   }
   browserCoordsII();

  useEffect(() => {
    dispatch(fetchTrips())

  }, [])

  return (
    <div className="dashContainer">
      <div className="dashHeader">
        <h2>{message}</h2>
        <p>Below you will find any trips that you have coming up</p>
      </div>
      <div className="tripContainer">
        <h3>Trips</h3>
       <NearestAirport />
        <button onClick={() => dispatch(getAiportByCoords(position))}>getairport</button>
        <button onClick={() => dispatch(fetchTrips())}>gettrips</button>
        <MyTrips upcomingFlightsList={upcomingFlightsList} history={history}/>
        <TripForm/>
      </div>
    </div>
  );
}



const mapStateToProps = state => { return { message: state.welcome, upcomingFlightsList: state.upcomingFlightsList } }


export default connect(mapStateToProps)(Dash);
