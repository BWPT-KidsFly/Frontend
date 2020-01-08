import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { SignUpWrapper, SubmitBtn, SubmitWrapper,
   halfWidth, fullWidth, formFlex, RedirectWrap } from './styles';
import SignUpAs from "./SignUpAs";


const StaffSignUp = ({ values, errors, touched, status }) => {
   const [staff, setStaff] = useState([]);

   useEffect(() => {
      console.log('status has changed', status);
      status && setStaff(staff => [...staff, status]);
   }, [status]);

   return (
      <div>
         <SignUpAs />
         <SignUpWrapper>
            <Form style={formFlex}>  
               <Field style={halfWidth} type='text' name='first_name' placeholder='First Name' />
               {touched.first_name && errors.first_name && (
                  <p className='errors'>{errors.first_name}</p>
               )}

               <Field style={halfWidth} type='text' name='last_name' placeholder='Last Name' />
               {touched.last_name && errors.last_name && (
                  <p className='errors'>{errors.last_name}</p>
               )} 

               <Field style={fullWidth} type='email' name='username' placeholder='username' />
               {touched.username && errors.username && (
                  <p className='errors'>{errors.username}</p>
               )}
                       
               <Field style={fullWidth} type='password' name='password' placeholder='Password' />
               {touched.password && errors.password && (
                  <p className='errors'>{errors.password}</p>
               )}
            
               <Field style={fullWidth} type='password' name='confirm' placeholder='Confirm Password' />
               {touched.confirm && errors.confirm && (
                  <p className='errors'>{errors.confirm}</p>
               )}

               <SubmitWrapper>
                  <SubmitBtn type='submit'>Apply</SubmitBtn>
               </SubmitWrapper>
            </Form>
         </SignUpWrapper>

         <RedirectWrap>
            <div>If you already have an account, please <Link to='/log-in'>Log-In here</Link></div>
         </RedirectWrap>

         {/* {staff.map(employee => {
            return (
               <ul key={employee.last_name}>
                  <li>{employee.first_name}</li>
                  <li>{employee.last_name}</li>
                  <li>{employee.username}</li>
                  <li>{employee.password}</li>
               </ul>
            );
         })} */}
      </div>
   );
};

const FormikStaffSignUp = withFormik({
   mapPropsToValues(props) {
      return {
         first_name: props.first_name || '',
         last_name: props.last_name || '',
         username: props.username || '',
         password: props.password || '',
         confirm: props.confirm || '',
      };
   },

   validationSchema: Yup.object().shape({
      first_name: Yup
         .string()
         .required('please enter your first name'),
      last_name: Yup
         .string()
         .required('please enter your last name'),
      username: Yup
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
   }),

   handleSubmit(values, { setStatus, resetForm }) {
      console.log('submitting', values);
      axios
      .post('https://bw-kids-fly.herokuapp.com/api/apps', values)
      .then(res => {
         console.log('success', res);
         setStatus(res.data);
         resetForm();
      })
      .catch(err => console.log('NOOOOO!!!', err.response));
   },
})(StaffSignUp);

export default FormikStaffSignUp;
