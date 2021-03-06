import React from "react"
import { Link } from "react-router-dom";
import PatientProfile from "./patientProfile"
import {Button, Card, CardBody} from "reactstrap"






const PatientListCard = props => {

  // defines what the patient list will render as

  const createNewMyPatient = e => {
    
    
  
    const newMyPatient = {
      patient_id: props.patient.id,
      
    };
   
      {
      createMyPatient(newMyPatient).then(() => {
        props.history.push({
          pathname: "/mypatients"
        });
      });
      };
    }
  ;
  
  const createMyPatient = newMyPatient => {
    return fetch("http://localhost:8000/mypatients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Token ${localStorage.getItem("kalis_token")}`
        
      },
      body: JSON.stringify(newMyPatient)
    }).then(res => res.json());
  };
  const Capitalize =(str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
      
  
  
  return (
    <>
    <div className="d-flex justify-content-center">
      <main className="patients">
        
          <CardBody className="card-body border-bottom">
            
            <div className="d-flex justify-content-center">
          <Link className="card-text" to={`/patientProfile/${props.patient.id}`}><h3><div className ="hover">
          {Capitalize(props.patient.last_name)}, {Capitalize(props.patient.first_name)}</div> </h3></Link>
          
          </div>
          <div className= "patient-profile-detail-text">
          <div className="d-flex justify-content-center mb-2">   
          <div className="mr-3"><strong>Birth Date: </strong>{props.patient.birth_date}</div>
          <div className="mr-3"><strong>Sex: </strong>{props.patient.sex.sex}</div>
          </div>
          <div className="d-flex justify-content-center mb-3">
          <div ><strong>Diagnosis: </strong>{props.patient.diagnosis}</div>
          </div>
          </div>
          <div className="d-flex justify-content-center">
          <Button className="mr-2" color="info" onClick={() => props.deletePatient(props.patient.id)}>Discharge</Button>
          <Button color="info" onClick = {() => createNewMyPatient()}>Add to My Patients</Button>
          </div>
          </CardBody>
        
      </main>
      </div>
    </>
  )
}

export default PatientListCard
