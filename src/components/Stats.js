import React from 'react';

const Stats = ({ traveler }) => {
   return (
      <div className='stats'>
            <p>Born: {traveler.birth_year}</p>
            <p>Gender: {traveler.gender}</p>
            <p>Skin: {traveler.skin_color}</p>
            <p>Hair: {traveler.hair_color}</p>
            <p>Eyes: {traveler.eye_color}</p>
            <p>Height: {traveler.height}</p>
            <p>Mass: {traveler.mass}</p>
         </div>
   );
};          

export default Stats;