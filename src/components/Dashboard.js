import React, { useState, useEffect } from "react";
import {connect,  } from "react-redux"
import { deleteFlight, editFlight, fetchTrips, addFlight } from "../store/actions"
import TripForm from './Toggle';
import MyTrips from "../components/Trips/MyTrips"
import axios from 'axios'
import { axiosWithAuth } from "../utils/axiosWithAuth"

const Dash = ({ dispatch, upcomingFlightsList }) => {



  // const fetchtrips = props => {



    //   axiosWithAuth()
    //   .get('https://bw-kids-fly.herokuapp.com/api/trips')
    //   .then(res => {
    //     console.log('Data: ', res.data)




    //   })
    //   .catch(err => {
    //     console.error('Error: ', err)
    //   });
    // } 
    
    useEffect(() => {
      dispatch(fetchTrips())

    }, []);

    return (
      <div className="dashContainer">
        <div className="dashHeader">
          <h2>Welcome to your Dashboard</h2>
          <p>Below you will find any trips that you have coming up</p>
        </div>
        <div className="tripContainer">
          <h3>Trips</h3>
          <TripForm />
          <button onClick={()=>dispatch(fetchTrips())}>gettrips</button>
          <MyTrips upcomingFlightsList={upcomingFlightsList} />
        </div>
      </div>
    );
  }



const mapStateToProps = state => { return { upcomingFlightsList: state.upcomingFlightsList } }


export default connect(mapStateToProps)(Dash);
