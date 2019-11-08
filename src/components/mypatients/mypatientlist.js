import React, { useState, useEffect } from "react"
import MyPatientCard from "./mypatientcard"



const MyPatients = props => {

  // renders the my patient card


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
      <div className="">
        <div className="patient-profile-detail-text">
      <div className="d-flex justify-content-center mb-5">
    <h2> My Patient List</h2>
    </div>
    </div>
    
    
    {patients.filter(patient => patient.patient.deleted == null).map(patient => (

      <MyPatientCard key={patient.id} patient={patient} deletePatient={deletePatient} {...props} />
    ))}
      </div>
    </>
  )
}

export default MyPatients
