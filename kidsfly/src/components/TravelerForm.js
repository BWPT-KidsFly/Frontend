import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import axios from 'axios';

const TravelerForm = ({ values, errors, touched, status }) => {
   const [travelers, setTravelers] = useState([]);

   useEffect(() => {
      console.log('status has changed', status);
      status && setTravelers(travelers => [...travelers, status]);
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
         </Form>
      </div>
   );
};
