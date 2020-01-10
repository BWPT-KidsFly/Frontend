import React from 'react'
import { deleteFlight, editFlight } from '../../store/actions'
import {connect} from 'react-redux'

function Trip(props,{trip,dispatch}){




    return(
        

      
       
    {trip?<ul> Object.values(trip).map(v=><li>`${v}`</li>)</ul><button onClick={dispatch(editFlight())}>edit</button><button onClick={dispatch(deleteFlight())}>delete</button>
        
        :"no trips?"}
       
        
        
      
    )
}

export default connect()(Trip)