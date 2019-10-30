import React, { useState, useEffect } from "react"
import MyPatientCard from "./mypatientcard"

// Author: Adam Knowles
// Purpose: Show all products and related information that a user has shown for sale
// Methods: GET, DELETE

const MyPatients = props => {
  const [patients, setPatients] = useState([])
  
    
    
  
  
    
  

  

  const getMyPatients = () => {
    fetch(`http://localhost:8000/mypatients/owner`, {
      method: "GET",
      headers: {
        
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("kalis_token")}`
        
      }
    })
      .then(response => response.json())
      .then(setPatients)
  }

  const deletePatient = (id) => {
    fetch(`http://localhost:8000/mypatients/${id}`, {
        "method": "DELETE",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem(
            "kalis_token"
        )}`
          
            
        }
    })
        .then(getMyPatients)
}

  useEffect(getMyPatients, [])

  return (
    <>
    <h2><strong> My Patients</strong></h2>
    
    
    {patients.map(patient => (

      <MyPatientCard key={patient.id} patient={patient} deletePatient={deletePatient} {...props} />
    ))}
      
    </>
  )
}

export default MyPatients
