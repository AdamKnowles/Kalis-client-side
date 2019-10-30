import React, { useState, useEffect } from "react"
import VitalSignsCard from "./VitalSignsCard";
import VitalSignForm from "./vitalsignform"

// Author: Adam Knowles
// Purpose: Show all vital signs and related information that a user has shown for sale
// Methods: GET, DELETE

const VitalSigns = props => {
    

    
    
  const [vitalsigns, setVitalSigns] = useState([])
  

  const getVitalSigns = () => {
    fetch(`http://localhost:8000/vitalsigns`, {
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
      .then(setVitalSigns)
  }

  const deleteVitalSigns = (id) => {
    fetch(`http://localhost:8000/vitalsigns/${id}`, {
        "method": "DELETE",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("kalis_token")}`
            
        }
    })
        .then(getVitalSigns)
}

  useEffect(getVitalSigns, [])

  return (
    
        
      
        
        <div>
        
          <VitalSignForm getVitalSigns={getVitalSigns}  {...props} /> 
        {vitalsigns.filter(vitalsign => vitalsign.patient_id === +props.match.params.patientProfileId).map(vitalsign => (
            <>
          <VitalSignsCard key={vitalsign.id} getVitalSigns={getVitalSigns} vitalsign={vitalsign} {...props} />
          </>
        ))}
          </div>
);
}
  

export default VitalSigns


