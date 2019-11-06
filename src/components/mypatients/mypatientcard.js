import React from "react"
import { Link } from "react-router-dom"
import {Button, Card, CardBody} from "reactstrap"




// Author: Adam Knowles
// Purpose: Show all products and related information that a user has shown for sale
// Methods: GET, DELETE

const MyPatientCard = props => {
  const Capitalize =(str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  return (
    <>
    <div className="d-flex justify-content-center">
      <main className="patients">
        
          <CardBody className="card-body border-bottom">
            <div className="d-flex justify-content-center">
          <Link className="card-text" to={`/patientProfile/${props.patient.patient_id}`}><h3>
          {Capitalize(props.patient.patient.last_name)}, {Capitalize(props.patient.patient.first_name)} </h3></Link>
          </div>
          <div className="patient-profile-detail-text">
          <div className="d-flex justify-content-center mb-2">   
          <div className="mr-3"><strong>Birth Date: </strong>{props.patient.patient.birth_date}</div>
          <div className="mr-3"><strong>Sex: </strong>{props.patient.patient.sex.sex}</div>
          </div>
          <div className="d-flex justify-content-center mb-3">
          <div><strong>Diagnosis: </strong>{props.patient.patient.diagnosis}</div>
          </div>
          </div>
          <div className="d-flex justify-content-center">
          <Button color="info" onClick={() => props.deletePatient(props.patient.id)}>Remove From My Patients</Button>
          </div>
          </CardBody>
        
      </main>
      
      </div>
    </>
  )
}

export default MyPatientCard