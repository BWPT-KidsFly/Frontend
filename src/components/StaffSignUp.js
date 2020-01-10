import React, { useState, useEffect } from "react";
import { Link, Redirect} from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { SignUpWrapper, SubmitBtn, SubmitWrapper,
   halfWidth, fullWidth, formFlex, RedirectWrap } from './styles';
import SignUpAs from "./SignUpAs";
import { axiosWithAuth } from "../utils";


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
               <Field style={halfWidth} id='first_name' type='text' name='first_name' placeholder='First Name' />
               {touched.first_name && errors.first_name && (
                  <p className='errors'>{errors.first_name}</p>
               )}

               <Field style={halfWidth} id='last_name' type='text' name='last_name' placeholder='Last Name' />
               {touched.last_name && errors.last_name && (
                  <p className='errors'>{errors.last_name}</p>
               )} 

               <Field style={fullWidth} id='email' type='email' name='email' placeholder='Email' />
               {touched.email && errors.email && (
                  <p className='errors'>{errors.email}</p>
               )}
                       
               <Field style={fullWidth} id='password' type='password' name='password' placeholder='Password' />
               {touched.password && errors.password && (
                  <p className='errors'>{errors.password}</p>
               )}
            
               <Field style={fullWidth} id='confirm' type='password' name='confirm' placeholder='Confirm Password' />
               {touched.confirm && errors.confirm && (
                  <p className='errors'>{errors.confirm}</p>
               )}

               <SubmitWrapper>
                  <SubmitBtn type='submit'>Apply</SubmitBtn>
               </SubmitWrapper>
            </Form>
         </SignUpWrapper>

         <RedirectWrap>
            <div>If you already have an account, please <Link to='/log-in'>log in here</Link></div>
            <div className='admin-redirect'>ADMIN, please <Link to='/log-in/admin'>log in here</Link></div>
         </RedirectWrap>

         {/* {staff.map(employee => {
            return (
               <ul key={employee.last_name}>
                  <li>{employee.first_name}</li>
                  <li>{employee.last_name}</li>
                  <li>{employee.email}</li>
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
         email: props.email || '',
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
   }),

   handleSubmit(values, { setStatus, resetForm }) {
      console.log('submitting', values);

     

      axiosWithAuth()
      .post('adminauth/register/admin', values)

      .then(res => {
         console.log('success', res);
         Redirect("/dashboard")
         setStatus(res.data);
         resetForm();
      })
      .catch(err => console.log('NOOOOO!!!', err.response));
   },
})(StaffSignUp);

export default FormikStaffSignUp;
