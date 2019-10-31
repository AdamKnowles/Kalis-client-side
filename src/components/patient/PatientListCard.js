import React from "react"
import { Link } from "react-router-dom";
import PatientProfile from "./patientProfile"
import {Button} from "reactstrap"




// Author: Adam Knowles
// Purpose: Show all products and related information that a user has shown for sale
// Methods: GET, DELETE

const PatientListCard = props => {

  const createNewMyPatient = e => {
    // e.preventDefault();
    
  
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
  
  
  return (
    <>
      <main className="patients">
        <div className="card">
          <div className="card-body">
          <Link className="card-text" to={`/patientProfile/${props.patient.id}`}><h3>
          {props.patient.last_name}, {props.patient.first_name} </h3></Link>   
          <div>Birth Date {props.patient.birth_date}</div>
          <div>Sex: {props.patient.sex}</div>
          <div>Diagnosis: {props.patient.diagnosis}</div>
          <Button onClick={() => props.deletePatient(props.patient.id)}>Delete</Button>
          <Button onClick = {() => createNewMyPatient()}>Add to My List</Button>
          </div>
        </div>
      </main>
    </>
  )
}

export default PatientListCard
