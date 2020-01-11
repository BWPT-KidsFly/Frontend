import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { loginUser } from "../store/actions"
import { Link, useHistory } from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import { LogInWrapper, fullWidth, formFlex, LogInBtn, RedirectWrap } from './styles';
import LogInAs from "./LogInAs";



const LogIn = ({ values, errors, touched, status, setStatus, resetForm }, props) => {

   const [member, setMember] = useState([]);
   const history = useHistory()
   const dispatch = useDispatch()

   useEffect(() => {
      // console.log('status has changed', status);
      status && setMember(member => [...member, status]);
   }, [status]);


   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('submitting', values);
      dispatch(loginUser(values, history))
   }

   return (
      <div>
         <LogInAs />
         <LogInWrapper>
            <Form onSubmit={(e) => handleSubmit(e)} style={formFlex}>
               <Field style={fullWidth} type='email' name='username' placeholder='Username (email)' />
               {touched.username && errors.username && (
                  <p className='errors'>{errors.username}</p>
               )}

               <Field style={fullWidth} type='password' name='password' placeholder='Password' />
               {touched.password && errors.password && (
                  <p className='errors'>{errors.password}</p>
               )}

               <LogInBtn style={fullWidth} type='submit'>Log In</LogInBtn>
            </Form >
         </LogInWrapper>

         <RedirectWrap>
            <div>If you don't already have an account, please <Link to='/sign-up'>Sign Up here</Link></div>
            <div className='admin-redirect'>ADMIN, please <Link to='/log-in/admin'>log in here</Link></div>
         </RedirectWrap>

      </div>
   );
};

const FormikLogIn = withFormik({
   mapPropsToValues(props) {
      return {
         username: props.username || '',
         password: props.password || '',
      };
   },

   validationSchema: Yup.object().shape({
      username: Yup
         .string()
         .required('please enter your username'),
      password: Yup
         .string()
         .min(6, 'your password must be 6 characters or longer')
         .required('please enter a password'),
   }),


})(LogIn);


export default (FormikLogIn);
