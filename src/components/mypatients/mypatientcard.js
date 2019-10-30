import React from "react"
import { Link } from "react-router-dom"
import {Button} from "reactstrap"




// Author: Adam Knowles
// Purpose: Show all products and related information that a user has shown for sale
// Methods: GET, DELETE

const MyPatientCard = props => {
  
  return (
    <>
      <main className="patients">
        <div className="card">
          <div className="card-body">
          <Link className="card-text" to={`/patientProfile/${props.patient.patient_id}`}><h3>
          {props.patient.patient.first_name} {props.patient.patient.last_name}</h3></Link>   
          <div>Birth Date {props.patient.patient.birth_date}</div>
          <div>Sex: {props.patient.patient.sex}</div>
          <div>Diagnosis: {props.patient.patient.diagnosis}</div>
          <Button onClick={() => props.deletePatient(props.patient.id)}>Remove From My Patients</Button>
          </div>
        </div>
      </main>
    </>
  )
}

export default MyPatientCard