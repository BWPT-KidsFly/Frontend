import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { LogInWrapper, fullWidth, formFlex, LogInBtn, RedirectWrap, SignUpHeader } from './styles';



const LogIn = ({ values, errors, touched, status }) => {
   const [admin, setAdmin] = useState([]);

   useEffect(() => {
      console.log('status has changed', status);
      status && setAdmin(admin => [...admin, status]);
   }, [status]);

   return (
      <div>
         <SignUpHeader>
            <h3>Please log into your ADMIN account below</h3>
         </SignUpHeader>
         <LogInWrapper>
            <Form style={formFlex}>  
               <Field style={fullWidth} id='username' type='email' name='username' placeholder='Username (Email)' />
               {touched.username && errors.username && (
                  <p className='errors'>{errors.username}</p>
               )}
                       
               <Field style={fullWidth} id='password' type='password' name='password' placeholder='Password' />
               {touched.password && errors.password && (
                  <p className='errors'>{errors.password}</p>
               )}

               <LogInBtn style={fullWidth} type='submit'>Log In</LogInBtn>
            </Form>
         </LogInWrapper>

         <RedirectWrap>
            <div>If you don't already have an ADMIN account, please <Link to='/sign-up/admin'>register here</Link></div>
         </RedirectWrap>

         {/* {admin.map(admin => {
            return (
               <ul key={admin.lname}>
                  <li>{admin.username}</li>
                  <li>{admin.password}</li>
               </ul>
            );
         })} */}
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
         .required('please enter your email'),
      password: Yup
         .string()
         .min(6, 'your password must be 6 characters or longer')
         .required('please enter a password'),
   }),

   handleSubmit(values, { setStatus, resetForm }) {
      console.log('submitting', values);
      axios
      .post('https://bw-kids-fly.herokuapp.com/api/adminauth/login/admin', values)
      .then(res => {
         console.log('success', res);
         setStatus(res.data);
         resetForm();
      })
      .catch(err => console.log('NOOOOO!!!', err.response));
   },
})(LogIn);

export default FormikLogIn;
