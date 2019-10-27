import React from "react"
import { Link } from "react-router-dom";
import PatientProfile from "./patientProfile"




// Author: Adam Knowles
// Purpose: Show all products and related information that a user has shown for sale
// Methods: GET, DELETE

const PatientListCard = props => {
  
  return (
    <>
      <main className="patients">
        <div className="card">
          <div className="card-body">
          <Link className="card-text" to={`/patientProfile/${props.patient.id}`}><h3>
          {props.patient.first_name} {props.patient.last_name}</h3></Link>   
          <div>Birth Date {props.patient.birth_date}</div>
          <div>Sex: {props.patient.sex}</div>
          <div>Diagnosis: {props.patient.diagnosis}</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PatientListCard
