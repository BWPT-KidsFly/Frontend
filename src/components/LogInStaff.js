import React, { useState, useEffect } from "react";
import { Link ,useHistory} from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { LogInWrapper, fullWidth, formFlex, LogInBtn, RedirectWrap } from './styles';
import LogInAs from "./LogInAs";
import { axiosWithAuth } from "../utils";


const LogIn = ({ values, errors, touched, status,setStatus,resetForm },props) => {
   const [member, setMember] = useState([]);
   const history=useHistory()

console.log("history",history,)
useEffect(() => {
 
   status && setMember(member => [...member, status]);
}, [status]);


const handleSubmit=(e, setStatus, resetForm )=> {
e.preventDefault()
   console.log('submitting', values);

   axiosWithAuth()
   .post(`/adminauth/login/admin`, values)
   .then(res => {
      console.log('success', res);
      setStatus(res.data);
      resetForm();
      history.push('/dashboard')
   })
   .catch(err => console.log('NOOOOO!!!', err.response),
   history.push('/dashboard')
   );
}

return (
   <div>
         <LogInAs />
         <LogInWrapper>
            <Form onSubmit={(e)=>handleSubmit(e)} style={formFlex}>  
               <Field style={fullWidth} type='email' name='email' placeholder='Username (Email)' />
               {touched.email && errors.email && (
                  <p className='errors'>{errors.email}</p>
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

         {member.map(member => {
            return (
               <ul key={member.lname}>
                  <li>{member.email}</li>
                  <li>{member.password}</li>
               </ul>
            );
         })}
      </div>
   );
};

const FormikLogIn = withFormik({
   mapPropsToValues(props) {
      return {
         email: props.email || '',
         password: props.password || '',
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
   }),
   
  
})(LogIn);

export default FormikLogIn;
