import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { TravelerSignUpWrapper } from './styles';

const RegistrationForm = ({ values, errors, touched, status }) => {
   const [users, setUsers] = useState([]);

   const halfWidth = {
      width: '45%',
      height: '35px',
      marginTop: '20px',
   }

   const fullWidth = {
      width: '95%',
      height: '35px',
      marginTop: '20px',
   }

   const formFlex = {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
   }

   useEffect(() => {
      console.log('status has changed', status);
      status && setUsers(users => [...users, status]);
   }, [status]);



   return (
      <div>
         <TravelerSignUpWrapper>
            <Form style={formFlex}>  
               <Field style={halfWidth} type='text' name='fname' placeholder='first name' />
               {touched.fname && errors.fname && (
                  <p className='errors'>{errors.fname}</p>
               )}

               <Field style={halfWidth} type='text' name='lname' placeholder='last name' />
               {touched.lname && errors.lname && (
                  <p className='errors'>{errors.lname}</p>
               )} 

               <Field style={fullWidth} type='email' name='email' placeholder='email' />
               {touched.email && errors.email && (
                  <p className='errors'>{errors.email}</p>
               )}
                       
               <Field style={fullWidth} type='password' name='password' placeholder='password' />
               {touched.password && errors.password && (
                  <p className='errors'>{errors.password}</p>
               )}
            
               <Field style={fullWidth} type='password' name='confirm' placeholder='confirm password' />
               {touched.confirm && errors.confirm && (
                  <p className='errors'>{errors.confirm}</p>
               )}

               <Field style={fullWidth} type='text' name='address1' placeholder='address 1' />
               {touched.address1 && errors.address1 && (
                  <p className='errors'>{errors.address1}</p>
               )}

               <Field style={fullWidth} type='text' name='address2' placeholder='address 2' />
               {touched.address2 && errors.address2 && (
                  <p className='errors'>{errors.address2}</p>
               )}

               <Field style={halfWidth} type='text' name='city_state' placeholder='city, state' />
               {touched.city_state && errors.city_state && (
                  <p className='errors'>{errors.city_state}</p>
               )}

               <Field style={halfWidth} type='text' name='zip' placeholder='zip code' />
               {touched.zip && errors.zip && (
                  <p className='errors'>{errors.zip}</p>
               )}

               <Field style={halfWidth} type='text' name='airport' placeholder='home airport code' />
               {touched.airport && errors.airport && (
                  <p className='errors'>{errors.airport}</p>
               )}

               <Field style={halfWidth} type='tel' name='phone' placeholder='phone number' />
               {touched.phone && errors.phone && (
                  <p className='errors'>{errors.phone}</p>
               )}

               <button type='submit'>Submit</button>
            </Form>
         </TravelerSignUpWrapper>

         {users.map(user => {
            return (
               <ul key={user.lname}>
                  <li>{user.fname}</li>
                  <li>{user.lname}</li>
                  <li>{user.email}</li>
                  <li>{user.password}</li>
                  <li>{user.address1}</li>
                  <li>{user.address2}</li>
                  <li>{user.city_state}</li>
                  <li>{user.zip}</li>
                  <li>{user.phone}</li>
                  <li>{user.airport}</li>
               </ul>
            );
         })}
      </div>
   );
};

const FormikRegistrationForm = withFormik({
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
})(RegistrationForm);

export default FormikRegistrationForm;
