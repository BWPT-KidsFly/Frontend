import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import axios from 'axios';

const TravelerForm = ({ values, errors, touched, status }) => {
   const [travelers, setTravelers] = useState([]);

   useEffect(() => {
      console.log('status has changed', status);
      status && setTravelers(traveler => [...travelers, status]);
   }, [status]);

   return (
      <div className='traveler-form'>
         <Form>
            <Field type='email' name='email' placeholder='email' />
            {touched.email && errors.email && (
               <p className='errors'>{errors.email}</p>
            )}

            <Field type='password' name='password' placeholder='password' />
            {touched.password && errors.password && (
               <p className='errors'>{errors.password}</p>
            )}

            <Field type='text' name='fname' placeholder='first name' />
            {touched.fname && errors.fname && (
               <p className='errors'>{errors.fname}</p>
            )}

            <Field type='text' name='lname' placeholder='last name' />
            {touched.lname && errors.lname && (
               <p className='errors'>{errors.lname}</p>
            )}

            <Field as='textarea' name='address' placeholder='street address' />
            {touched.address && errors.address && (
               <p className='errors'>{errors.address}</p>
            )}

            <Field type='text' name='city_state' placeholder='city, state' />
            {touched.city_state && errors.city_state && (
               <p className='errors'>{errors.city_state}</p>
            )}

            <Field type='text' name='zip' placeholder='zip code' />
            {touched.zip && errors.zip && (
               <p className='errors'>{errors.zip}</p>
            )}

            <Field type='text' name='airport' placeholder='home airport code' />
            {touched.airport && errors.airport && (
               <p className='errors'>{errors.airport}</p>
            )}

            <Field type='tel' name='phone' placeholder='phone number' />
            {touched.phone && errors.phone && (
               <p className='errors'>{errors.phone}</p>
            )}

            <button type='submit'>Submit</button>
         </Form>

         {travelers.map(traveler => {
            return (
               <ul key={traveler.lname}>
                  <li>{traveler.fname}</li>
                  <li>{traveler.lname}</li>
                  <li>{traveler.email}</li>
                  <li>{traveler.password}</li>
                  <li>{traveler.address}</li>
                  <li>{traveler.city_state}</li>
                  <li>{traveler.zip}</li>
                  <li>{traveler.phone}</li>
                  <li>{traveler.airport}</li>
               </ul>
            );
            })}
      </div>
   );
};

const FormikTravelerForm = withFormik({
   mapPropsToValues(props) {
      return {
         email: props.email || '',
         password: props.password || '',
         fname: props.fname || '',
         lname: props.lname || '',
         address: props.address || '',
         city_state: props.city_state || '',
         zip: props.zip || '',
         airport: props.airport || '',
         phone: props.phone || '',
      };
   },

   validationSchema: Yup.object().shape({
      email: Yup
         .string()
         .required('please enter your email'),
      password: Yup
         .string()
         .min(6, 'your password must be 6 characters or longer')
         .required('please enter a password'),
      fname: Yup
         .string()
         .required('please enter your first name'),
      lname: Yup
         .string()
         .required('please enter your last name'),
      address: Yup
         .string()
         .required('please enter your address'),
      city_state: Yup
         .string()
         .required('please enter your city and state'),
      zip: Yup
         .string()
         .required('please enter your zip code'),
      airport: Yup
         .string()
         .max(3)
         .required("please enter your home airport's 3-letter code"),
      phone: Yup
         .string()
         .required('please enter your phone number')
   }),

   handleSubmit(values, { setStatus, resetForm }) {
      console.log('submitting', values);
      axios
      .post('https://reqres.in/api/users', values)
      .then(res => {
         console.log('success', res);
         setStatus(res.data);
         resetForm();
      })
      .catch(err => console.log('NOOOOO!!!', err.response));
   },
})(TravelerForm);

export default FormikTravelerForm;
