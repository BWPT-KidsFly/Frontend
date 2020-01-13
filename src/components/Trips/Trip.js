import React from 'react'
import { deleteFlight } from '../../store/actions'
import { connect } from 'react-redux'

function Trip(props, { dispatch, history }) {


    const trip = props.trips.find(
        thing => `${thing.id}` === props.match.params.id
    )
    const handleEditClick = e => {
        e.preventDefault()
        props.history.push(`/dashboard/mytrips/edit/${trip.id}`)
    }
    const handleDeleteTrip = e => {
        e.preventDefault();
        dispatch(deleteFlight(trip, history))

    }
    if (!props.trips.length || !trip) {
        return <h2>Loading trip data...</h2>;
    }
    return (


        <>

            {<div>

                <ul>

                    <h3>Airport: {trip.airport_name} <br /> Airline: {trip.airline}</h3>
                    <p>Date: {trip.departure_time}</p>
                    <p>Flight Number: {trip.flight_number}</p>

                </ul>
                <button onClick={e => handleEditClick(e)}>edit</button>
                <button onClick={e => handleDeleteTrip(e, trip)}>delete</button>
            </div>

            }
        </>





    )
}
const mapStateToProps = state => {
    return {
        trips: state.upcomingFlightsList
    }
}
export default connect(mapStateToProps)(Trip)