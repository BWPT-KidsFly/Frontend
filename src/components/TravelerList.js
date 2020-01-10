import React, { useEffect, useState } from "react";
import axios from 'axios';
import  TravelerCard  from './TravelerCard';

export default function TravelerList() {
  const [travelerArr, setTravelerArr] = useState([]);

  useEffect(() => {
    axios
      .get('https://bw-kids-fly.herokuapp.com/api/user/')
      .then(res => {
        console.log(res.data.results);
        setTravelerArr(res.data.results);
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <section>
       <h3>Welcome</h3>
      <div className='card-container'>
        {travelerArr.map(travelerObj => {
          return <TravelerCard traveler={travelerObj} key={travelerObj.id} />
        })}
      </div>
    </section>
  );
}