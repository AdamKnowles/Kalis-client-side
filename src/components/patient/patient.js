import React, { useState, useEffect } from "react"
import PatientListCard from "./PatientListCard";

// Author: Adam Knowles
// Purpose: Show all products and related information that a user has shown for sale
// Methods: GET, DELETE

const PatientList = props => {
  const [patients, setPatients] = useState([])

  

  const getPatients = () => {
    fetch(`http://localhost:8000/patients`, {
      method: "GET",
      headers: {
        
        "Accept": "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem(
          "kalis_token"
      )}`
        
      }
    })
      .then(response => response.json())
      .then(setPatients)
  }

  const deletePatient = (id) => {
    fetch(`http://localhost:8000/patients/${id}`, {
        "method": "DELETE",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem(
            "kalis_token"
        )}`
          
          
            
        }
    })
        .then(getPatients)
}

  useEffect(getPatients, [])

  return (
    <>
    <h2><strong>Patients</strong></h2>
    <button  
    type="button" onClick={() => props.history.push("/patientform")}>
    Add New Patient
    </button>
    
    {patients.map(patient => (

      <PatientListCard key={patient.id} patient={patient} patients={patients}  deletePatient={deletePatient} {...props} />
    ))}
      
    </>
  )
}

export default PatientList
