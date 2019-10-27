import React, { useState, useEffect } from "react"
import AssessmentCard from "./assessmentcard"

// Author: Adam Knowles
// Purpose: Show all vital signs and related information that a user has shown for sale
// Methods: GET, DELETE

const Assessments = props => {
    

    
    
  const [assessments, setAssessments] = useState([])
  

  const getAssessments = () => {
    fetch(`http://localhost:8000/assessments`, {
      method: "GET",
      headers: {
        
        "Accept": "application/json",
        "Content-Type": "application/json",
        
      }
    })
      .then(response => response.json())
      .then(setAssessments)
  }

  const deleteAssessments = (id) => {
    fetch(`http://localhost:8000/assessments/${id}`, {
        "method": "DELETE",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("kalis_token")}`
            
        }
    })
        .then(getAssessments)
}

  useEffect(getAssessments, [])

  return (
    
        
      
        
        <div>
        
        {assessments.filter(assessment => assessment.patient_id === +props.match.params.patientProfileId).map(assessment => (
    
          <AssessmentCard key={assessment.id} assessment={assessment} {...props} />
        ))}
          
          </div>
);
}
  

export default Assessments
