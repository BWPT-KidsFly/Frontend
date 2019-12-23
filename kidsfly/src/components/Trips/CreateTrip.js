import React, { useState } from "react";
import { connect } from "react-redux";
import { addFlight } from "../../store/actions";

const CreateTrip = props => {
    console.log( "addFlight()========>>>",
    addFlight())
  const initialTrip = {
    name: "",
    date: "",
    time: "",
    airport: "",
    numpassengers: ""
  };

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
          value={initialTrip.name}
          placholder="name"
          onChange={handleChange}
          type="text"
        />
        <input
          name="date"
          value={initialTrip.date}
          placholder="date"
          onChange={handleChange}
          type="text"
        />
        <input
          name="time"
          value={initialTrip.time}
          placholder="time"
          onChange={handleChange}
          type="text"
        />
        <input
          name="airport"
          value={initialTrip.airport}
          placholder="airport"
          onChange={handleChange}
          type="text"
        />
        <input
          name="numpassengers"
          value={initialTrip.numpassengers}
          placholder="number of passengers"
          onChange={handleChange}
          type="text"
        />
        <button  onSubmit={handleSubmit}>
          create trip
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return { flights: state.upcomingFlightsList };
};

export default connect(mapStateToProps, { addFlight })(CreateTrip);
