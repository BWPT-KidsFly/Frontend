import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as Yup from "yup";
import axios from "axios";
import { addFlight } from "../../store/actions";

const TripForm = ({ values, errors, touched, status }) => {
  console.log("Values: ", values,"Errors: ", errors,"Touched: ", touched);
  const history = useHistory()
  const dispatch = useDispatch()
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    console.log("Status: ", status);

    status && setTrip(trip => [...trip, status]);
  }, [status]);
const handleSubmit=(e)=>{
  e.preventDefault();
  dispatch(addFlight(values,history))
}
  return (
    <div className="formBox">
      <Form className="formContainer" onSubmit={(e)=>handleSubmit(e)} >
        <label htmlFor="airport_name">
          Airport
          {touched.airport_name && errors.airport_name && (
            <p className="errorMssg">{errors.airport_name}</p>
          )}
          <Field
            className="formFields"
            id="airport_name"
            type="text"
            name="airport_name"
            placeholder="Airport"
          />
        </label>
        <label htmlFor="airline">
          Airline
          {touched.airline && errors.airline && (
            <p className="errorMssg">{errors.airline}</p>
          )}
          <Field
            className="formFields"
            id="airline"
            type="text"
            name="airline"
            placeholder="Airline"
          />
        </label>
        <label htmlFor="flight_number">
          Flight Number
          {touched.flight_number && errors.flight_number && (
            <p className="errorMssg">{errors.flight_number}</p>
          )}
          <Field
            className="formFields"
            id="flight_number"
            type="text"
            name="flight_number"
            placeholder="Flight Number"
          />
        </label>
        <label htmlFor="departure_time">
          Date & Departure Time
          {touched.departure_time && errors.departure_time && (
            <p className="errorMssg">{errors.departure_time}</p>
          )}
          <Field
            className="formFields"
            id="departure_time"
            type="datetime-local"
            name="departure_time"
          />
        </label>
        <Field className="formFields" as="select" name="carryon_items">
          <option selected disabled>
            Number of Carry-On Items
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
        <Field className="formFields" as="select" name="checked_items">
          <option selected disabled>
            Checked Items
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
        <Field className="formFields" as="select" name="children">
          <option selected disabled>
            Number of Kids
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
          className="formFields"
          as="textarea"
          type="text"
          name="special_needs"
          placeholder="Special Requests"
        />
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </Form>
    </div>
  );
};

const FormikTripForm = withFormik({
  mapPropsToValues(props) {
    return {
      airport_name: props.airport_name || "",
      airline: props.airline || "",
      flight_number: props.flight_number || "",
      departure_time: props.departure_time || "",
      carryon_items: props.carryon_items || "",
      checked_items: props.checked_items || '',
      children: props.children || "",
      special_needs: props.special_needs || ""
    };
  },

  validationSchema: Yup.object().shape({
    airport_name: Yup.string().required("An Airport is Required."),
    airline: Yup.string().required("An Airline is Required."),
    flight_number: Yup.string().required("A Flight is Required."),
    departure_time: Yup.string().required("Please select a Date and Time."),
    carryon_items: Yup.string().required("Luggage Amount is required."),
    checked_items: Yup.string().required('Did you check in any items?'),
    children: Yup.string().required("How many kids will be joining you?")
  }),

  
})(TripForm);

export default FormikTripForm;