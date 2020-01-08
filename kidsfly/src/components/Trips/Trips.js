import React, { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { gettrips } from "../store/actions"

const MyTrips = ({ flights, fetchtrips }) => {
    const [myflights, setmyFlights] = (flights)

    useEffect(() => {
        fetchtrips()
    }, [flights])

}

const mapStateToProps = state => {
    return { flights: state.upcomingFlightsList };
};

const mapDispatchToProps = dispatch => {
    return { dispatch, ...bindActionCreators({ gettrips }, dispatch) }
}
const mapDispatch = dispatch => ({
    fetchtrips: () => dispatch(gettrips())
});
export default connect(mapStateToProps, mapDispatch)(MyTrips);