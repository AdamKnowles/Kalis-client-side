import React from "react"
import { Link } from "react-router-dom";





// Author: Adam Knowles
// Purpose: Show all products and related information that a user has shown for sale
// Methods: GET, DELETE

const VitalSignsCard = props => {
  
  return (
    <>
      <main className="vitalsigns">
        <div className="card">
          <div className="card-body">
           <div className="card-text"> 
          Time: {props.vitalsign.time} </div> 
          <div>Temperature {props.vitalsign.temperature}</div>
          <div>Blood Pressure: {props.vitalsign.blood_pressure}</div>
          <div>Heart Rate: {props.vitalsign.heart_rate}</div>
          <div>Respirations: {props.vitalsign.respiration_rate}</div>
          <div>O2 Sats: {props.vitalsign.oxygen_saturation}</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default VitalSignsCard
