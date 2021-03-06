import React, { useState, useEffect, useRef } from "react"
import PatientListCard from "./PatientListCard";
import {Button, Card, CardBody} from "reactstrap"
import PatientForm from "./PatientForm"

// renders the patient list card

const PatientList = props => {
  const [patients, setPatients] = useState([])
  const searchBar = useRef()

  

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


const filterByLastName = (last_name) => {
  fetch(`http://localhost:8000/patients?last_name=${last_name}`, {
      method: "GET",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("kalis_token")}`
    }

    
  }).then(response => response.json())
    .then(setPatients)
    .then(() => {
      if (patients.length === 0){
        getPatients()
        alert("patient not found")
      }
    })
    
  }

  const SearchSubmitButton = e => {
    e.preventDefault()
    filterByLastName(searchBar.current.value)
    
}
  const clear = e => {
    getPatients()
    searchBar.current.value = ""
}

  
    useEffect(getPatients, [])

  return (
    <>
    <div className="patient-profile-detail-text">
    <div className="d-flex justify-content-center mb-4">
    <h2>Global Patient List</h2>
    </div>
    </div>
    <div className="d-flex justify-content-center mb-4">
    <PatientForm getPatients={getPatients} {...props} />
    </div>
    <div className="d-flex justify-content-center">
      <div className="mr-2">
    <div className="search-by-last_name "></div>
            <form className="search-by-last_name" onSubmit={SearchSubmitButton}>
                <input placeholder="   Search by Last Name"
                autoFocus
                defaultValue=""
                ref={searchBar}
                type="text">
                </input>
                
            </form>
            </div>
            <Button  
    type="button" size="sm" color="primary" onClick={() => clear()}>
    clear
    </Button>
            </div>
    
    {patients.map(patient => (

      

      <PatientListCard key={patient.id} patient={patient} patients={patients}  deletePatient={deletePatient} {...props} />
    ))}
      
    </>
  )
}

export default PatientList
