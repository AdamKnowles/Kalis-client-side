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
        
      }
    })
      .then(response => response.json())
      .then(setPatients)
  }

  const deleteMyProducts = (id) => {
    fetch(`http://localhost:8000/products/${id}`, {
        "method": "DELETE",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            
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

      <PatientListCard key={patient.id} patient={patient} {...props} />
    ))}
      
    </>
  )
}

export default PatientList
