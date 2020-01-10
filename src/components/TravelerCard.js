import React from 'react';

const TravelerCard = ({ traveler }) => {

   return (
      <div>
         <div>{traveler.id}</div>
         <div>
            Email: {traveler.username}
            Password: {traveler.password}
         </div>
      </div>
   );
};

export default TravelerCard;