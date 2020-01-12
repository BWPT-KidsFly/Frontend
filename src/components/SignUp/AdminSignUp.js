import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { SignUpWrapper, SubmitBtn, SubmitWrapper,
   SignUpHeader, fullWidth, formFlex, RedirectWrap } from '.././styles';


const AdminSignUp = ({ values, errors, touched, status }) => {
   const [admin, setAdmin] = useState([]);

   useEffect(() => {
      console.log('status has changed', status);
      status && setAdmin(admin => [...admin, status]);
   }, [status]);

   return (
      <div>
         <SignUpHeader>
            <h3>Please register for an ADMIN account below</h3>
         </SignUpHeader>
         <SignUpWrapper>
            <Form style={formFlex}>  
               <Field style={fullWidth} id='username' type='email' name='username' placeholder='Email' />
               {touched.username && errors.username && (
                  <p className='errors'>{errors.username}</p>
               )}
                       
               <Field style={fullWidth} id='password' type='password' name='password' placeholder='Password' />
               {touched.password && errors.password && (
                  <p className='errors'>{errors.password}</p>
               )}

               <SubmitWrapper>
                  <SubmitBtn type='submit'>Register</SubmitBtn>
               </SubmitWrapper>
            </Form>
         </SignUpWrapper>

         <RedirectWrap>
            <div>If you already have an ADMIN account, please <Link to='/log-in/admin'>Log-In here</Link></div>
         </RedirectWrap>

         {/* {admin.map(employee => {
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

const FormikAdminSignUp = withFormik({
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
      .post('https://bw-kids-fly.herokuapp.com/api/adminauth/register/admin', values)
      .then(res => {
         console.log('success', res);
         setStatus(res.data);
         resetForm();
      })
      .catch(err => console.log('NOOOOO!!!', err.response));
   },
})(AdminSignUp);

export default FormikAdminSignUp;
