import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Styled from "styled-components";

const TripForm = ({ values, errors, touched, status }) => {
//   console.log("Values: ", values);
//   console.log("Errors: ", errors);
//   console.log("Touched: ", touched);

  const [trip, setTrip] = useState([]);

  useEffect(() => {
    console.log("Status: ", status);

    status && setTrip(trip => [...trip, status]);
  }, [status]);

  let Container = Styled.div`
  width: 1000px;
  margin: 0 auto;
  `;

  let FormContainer = Styled(Form)`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  `;

  let FieldInputs = Styled(Field)`
  width: 100%
  height: 30px;
  align-content: stretch;
  margin-bottom: 3%;
  `;

  return (
    <Container>
      <FormContainer>
        <label htmlFor="airport">
          Airport
          {touched.airport && errors.airport && (
            <p className="errorMssg">{errors.airport}</p>
          )}
          <Field
            id="airport"
            type="text"
            name="airport"
            placeholder="Airport"
          />
        </label>
        <label htmlFor="airline">
          Airline
          {touched.airline && errors.airline && (
            <p className="errorMssg">{errors.airline}</p>
          )}
          <Field
            id="airline"
            type="text"
            name="airline"
            placeholder="Airline"
          />
        </label>
        <label htmlFor="flight">
          Flight Number
          {touched.flight && errors.flight && (
            <p className="errorMssg">{errors.flight}</p>
          )}
          <Field
            id="flight"
            type="text"
            name="flight"
            placeholder="Flight Number"
          />
        </label>
        <label htmlFor="dateTime">
          Date & Departure Time
          {touched.dateTime && errors.dateTime && (
            <p className="errorMssg">{errors.dateTime}</p>
          )}
          <Field id="dateTime" type="datetime-local" name="dateTime" />
        </label>
        <Field as="select" name="luggage">
          <option disabled selected>
            Amount of Luggage
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10+</option>
        </Field>
        <Field as="select" name="kids">
          <option disabled selected>
            Amount of Kids
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10+</option>
        </Field>
        <Field
          as="textarea"
          type="text"
          name="requests"
          placeholder="Special Requests"
        />
        <button type="submit">Submit</button>
      </FormContainer>
      {trip.map(props => {
          return (
              <div key={props.dateTime}>
              <h3>{props.airline}</h3>
              <p>{props.flight}</p>
              </div>
          )
      })}
    </Container>
  );
};

const FormikTripForm = withFormik({
  mapPropsToValues(props) {
    return {
      airport: props.airport || "",
      airline: props.airline || "",
      flight: props.flight || "",
      dateTime: props.dateTime || "",
      luggage: props.luggage || "",
      kids: props.kids || "",
      requests: props.requests || ""
    };
  },

  validationSchema: Yup.object().shape({
    airport: Yup.string().required("An Airport is Required."),
    airline: Yup.string().required("An Airline is Required."),
    flight: Yup.string().required("A Flight is Required."),
    dateTime: Yup.string().required("Please select a Date and Time."),
    luggage: Yup.string().required("Luggage Amount is required."),
    kids: Yup.string().required("How many kids will be joining you?")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log("Submitting... ", values);
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log("Success: ", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log("Error: ", err.response));
  }
})(TripForm);

export default FormikTripForm;