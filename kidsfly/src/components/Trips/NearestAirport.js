import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAiportByCoords } from "../../store/actions";
import axios from 'axios'
import { bindActionCreators } from "redux"
import { axiosWithAuth } from "../../utils";

const nearestAirport = props => {
  
  const initialAirport = {
    name: "",
    distance: "",
  
  };
  const [airport,setairport]=useState({initialAirport})

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
 return(
     <>

<div>{props.nearestAirport}</div>

     </>

  
  );
};
const mapStateToProps = state => {
  return { nearestAirport: state.neartestAirport };
};

const mapDispatchToProps = dispatch => {
  return { dispatch, ...bindActionCreators({  }, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip);
