import React, { useState, useEffect } from "react";
import {Form} from "formik"

import { connect } from "react-redux";
import { editFlight } from "../../store/actions";


const UpdateTrip = (props, { dispatch, history, match, params }) => {

  const initialTrip = {
    airport_name: "", airline: "", flight_number: "", departure_time: "",
    carryon_items: "", checked_items: "", children: "", special_needs: "",

  };

  const [trip, setTrip] = useState(initialTrip);
  console.log("line10 MyTrips props", props, "history", history, "match", match, "params", params)
  useEffect(() => {
    const itemToEdit = props.flights.find(e => `${e.id}` === props.match.params.id)
    itemToEdit && setTrip(itemToEdit)
  }, [props.flights, props.match.params.id])

  const handleChange = event => {

    setTrip({ ...trip, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editFlight(trip, history))

  };




  return (
    <div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="airport_name"
          value={trip.airport_name}
          placholder="airport name"
          onChange={handleChange}
          type="text"
        />
        <input
          name=" airline"
          value={trip.airline}
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
      </Form>
    </div>
  );
};
const mapStateToProps = state => {
  return { flights: state.upcomingFlightsList };
};


export default connect(mapStateToProps, { editFlight })(UpdateTrip)