import React from 'react'
import { deleteFlight } from '../../store/actions'
import { connect } from 'react-redux'
import {DeleteButton} from '../../utils/buttons'

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
        props.deleteFlight(trip, history)
        props.history.push(`/dashboard`)

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
<div className="updateButtons">

    
                <button onClick={e => handleEditClick(e)}>edit 🤏 </button>
                <DeleteButton onClick={e => handleDeleteTrip(e, trip)}/>
</div>
                </ul>
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
export default connect(mapStateToProps,{deleteFlight})(Trip)