import React from 'react'
import TravelerView from './Traveler/TravelerView'
import KidsConnexView from './KidsConnex/KidsConnexView'
import AdminView from './Admin/AdminView'

export default function Dashboard(props) {
    return (

        <>

         <TravelerView/>
         <KidsConnexView/>
         <AdminView/>

        </>
    )
}