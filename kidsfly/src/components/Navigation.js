import React from 'react';
import { Link } from 'react-router-dom';
import Styled from  'styled-components';

const Navigation = () => {
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <Link to='/'>Home</Link>
                <Link to='/about-us'>About Us</Link>
                <div className='imageContainer'>
                </div>
                <Link to='/log-in'>Log In</Link>
                <Link to='/sign-up'>Sign Up</Link>
            </div>
        </div>
    )
}

export default Navigation;