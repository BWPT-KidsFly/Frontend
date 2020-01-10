import React from 'react';

const Stats = ({ traveler }) => {
   return (
      <div className='stats'>
            <p>id: {traveler.id}</p>
            <p>username: {traveler.username}</p>
            <p>password: {traveler.password}</p>
         </div>
   );
};          

export default Stats;