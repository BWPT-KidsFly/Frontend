import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import{ axiosWithAuth} from '../utils/axiosWithAuth';
import { SignUpWrapper, SubmitBtn, SubmitWrapper,
   halfWidth, fullWidth, formFlex, RedirectWrap } from './styles';
import SignUpAs from "./SignUpAs";


const TravelerSignUp = ({ values, errors, touched, status }) => {
   const [travelers, setTravelers] = useState([]);

   useEffect(() => {
      console.log('status has changed', status);
      status && setTravelers(travelers => [...travelers, status]);
   }, [status]);

   return (
      <div>
         <SignUpAs />
         <SignUpWrapper>
            <Form style={formFlex}>  
               <Field style={halfWidth} type='text' name='fname' placeholder='First Name' />
               {touched.fname && errors.fname && (
                  <p className='errors'>{errors.fname}</p>
               )}

               <Field style={halfWidth} type='text' name='lname' placeholder='Last Name' />
               {touched.lname && errors.lname && (
                  <p className='errors'>{errors.lname}</p>
               )} 

               <Field style={fullWidth} type='email' name='email' placeholder='Email' />
               {touched.email && errors.email && (
                  <p className='errors'>{errors.email}</p>
               )}
                       
               <Field style={fullWidth} type='password' name='password' placeholder='Password' />
               {touched.password && errors.password && (
                  <p className='errors'>{errors.password}</p>
               )}
            
               <Field style={fullWidth} type='password' name='confirm' placeholder='Confirm Password' />
               {touched.confirm && errors.confirm && (
                  <p className='errors'>{errors.confirm}</p>
               )}

               <Field style={fullWidth} type='text' name='address1' placeholder='Address 1' />
               {touched.address1 && errors.address1 && (
                  <p className='errors'>{errors.address1}</p>
               )}

               <Field style={fullWidth} type='text' name='address2' placeholder='Address 2' />
               {touched.address2 && errors.address2 && (
                  <p className='errors'>{errors.address2}</p>
               )}

               <Field style={halfWidth} type='text' name='city_state' placeholder='City, State' />
               {touched.city_state && errors.city_state && (
                  <p className='errors'>{errors.city_state}</p>
               )}

               <Field style={halfWidth} type='text' name='zip' placeholder='Zip Code' />
               {touched.zip && errors.zip && (
                  <p className='errors'>{errors.zip}</p>
               )}

               <Field style={halfWidth} type='text' name='airport' placeholder='Home Airport Code' />
               {touched.airport && errors.airport && (
                  <p className='errors'>{errors.airport}</p>
               )}

               <Field style={halfWidth} type='tel' name='phone' placeholder='Phone Number' />
               {touched.phone && errors.phone && (
                  <p className='errors'>{errors.phone}</p>
               )}

               <SubmitWrapper>
                  <label className='checkbox-container'>
                  
                     <Field type='checkbox' name='tos' checked={values.tos} />
                     {touched.tos && errors.tos && (
                        <p className='errors'>{errors.tos}</p>
                     )}

                     Terms of Service

                     <span className='checkmark' />
                  </label>

                  <SubmitBtn type='submit'>Submit</SubmitBtn>
               </SubmitWrapper>
            </Form>
         </SignUpWrapper>

         <RedirectWrap>
            <div>If you already have an account, please <Link to='/log-in'>Log-In here</Link></div>
         </RedirectWrap>

         {travelers.map(traveler => {
            return (
               <ul key={traveler.lname}>
                  <li>{traveler.fname}</li>
                  <li>{traveler.lname}</li>
                  <li>{traveler.email}</li>
                  <li>{traveler.password}</li>
                  <li>{traveler.address1}</li>
                  <li>{traveler.address2}</li>
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

const FormikTravelerSignUp = withFormik({
   mapPropsToValues(props) {
      return {
         fname: props.fname || '',
         lname: props.lname || '',
         email: props.email || '',
         password: props.password || '',
         confirm: props.confirm || '',
         address1: props.address1 || '',
         address2: props.address2 || '',
         city_state: props.city_state || '',
         zip: props.zip || '',
         airport: props.airport || '',
         phone: props.phone || '',
         tos: props.tos || false,
      };
   },

   validationSchema: Yup.object().shape({
      fname: Yup
         .string()
         .required('please enter your first name'),
      lname: Yup
         .string()
         .required('please enter your last name'),
      email: Yup
         .string()
         .required('please enter your email'),
      password: Yup
         .string()
         .min(6, 'your password must be 6 characters or longer')
         .required('please enter a password'),
      confirm: Yup
         .string()
         .min(6, 'your password must be 6 characters or longer')
         .required('please confirm your password'),
      address1: Yup
         .string()
         .required('please enter your address'),
      address2: Yup
         .string(),
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
         .required('please enter your phone number'),
      tos: Yup
         .bool()
         .oneOf([true], 'You must accept the terms of service to continue')
         .required()
   }),

   handleSubmit(values, { setStatus, resetForm }) {
      console.log('submitting', values);
      axiosWithAuth()
      .post('/auth/register/user', values)
      .then(res => {
         console.log('success', res);
         setStatus(res.data);
         resetForm();
      })
      .catch(err => console.log('NOOOOO!!!', err.response));
   },
})(TravelerSignUp);

export default FormikTravelerSignUp;
