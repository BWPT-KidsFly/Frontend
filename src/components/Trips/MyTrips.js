import React, { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchTrips, editFlight, deleteFlight } from "../../store/actions"

const MyTrips = ({ dispatch, upcomingFlightsList,history
,match,params }, props) => {

  function routeToItem(e, trip) {
    e.preventDefault()
   history.push(`/dashboard/mytrips/${trip.id}`);
  }
  console.log("line10 MyTrips props", props,"history",history,"match",match,"params",params)
  // const routeToEdit=(currentTrip)=>{
  //     history.push("/TripForm");
  //     currentTrip=value
  // }

  //   const history=useHistory()
  return (

    <>
      <div className='cardContainer'>
        {upcomingFlightsList.map((trip, index) => {
          return (
            <div className='tripCard'
              key={trip.flight_number +
                Date.now() + "trip.id:" + trip.id}>
              {console.log("flight_number" + trip.flight_number + "date" + Date.now() + "trip.id:" + trip.id)}
              <div className='cardText' onClick={e => routeToItem(e, trip)}>
                <h3>
                  Airport: {trip.airport_name}
                  <br />
                  Airline: {trip.airline}
                </h3>
                <p>Date: {trip.departure_time}</p>
                <p>Flight Number: {trip.flight_number}</p>
                {/* <button onClick={editFlight}>edit</button>
                <button onClick={deleteFlight}>delete</button> */}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return { upcomingFlightsList: state.upcomingFlightsList };
};



export default connect(mapStateToProps, { editFlight, deleteFlight })(MyTrips);