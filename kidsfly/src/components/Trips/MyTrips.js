import React, { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { gettrips } from "../../store/actions"

const MyTrips = ({ flights, fetchtrips }) => {
    const [myflights, setmyFlights] = (flights)

    useEffect(() => {
        fetchtrips()
        
    }, [flights])
return(

    <>
{myflights ?  myflights.map(fly=><p>fly.name</p>): "loading"}
<NavLink>CreateTrip</NavLink>
    </>
)
}

const mapStateToProps = state => {
    return { flights: state.upcomingFlightsList };
};


const mapDispatch = dispatch => ({
    fetchtrips: () => dispatch(gettrips())
});
export default connect(mapStateToProps, mapDispatch)(MyTrips);