immport React from 'react'

export default function Trip(props){




    return(


        <>
        trip?  trip.map(details=><ul>
            <li>details.name</li>
            <li>details.time</li>
            <li>details.checkeditmes</li>
            <li>details.airline</li>
        </ul>):no trips? 
        
        
        </>
    )
}