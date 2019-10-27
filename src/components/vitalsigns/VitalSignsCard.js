import React from "react"
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';





// Author: Adam Knowles
// Purpose: Show all products and related information that a user has shown for sale
// Methods: GET, DELETE

const VitalSignsCard = props => {
    
  
  return (
    <>
    <h3 className = "text-center mb-4">{props.vitalsign.patient.first_name} {props.vitalsign.patient.last_name}</h3>
      <Table bordered >
      
      <tbody>
      <tr>
          <th scope="row">Time</th>
          <td>{props.vitalsign.time}</td>
        </tr>
      <tr>
          <th scope="row">Temp</th>
          <td>{props.vitalsign.temperature}</td>
        </tr>
        <tr>
          <th scope="row">HR</th>
          <td>{props.vitalsign.heart_rate}</td>
        </tr>
        <tr>
          <th scope="row">BP</th>
          <td>{props.vitalsign.blood_pressure}</td>
        </tr>
        <tr>
          <th scope="row">RR</th>
          <td>{props.vitalsign.respiration_rate}</td>
        </tr>
        <tr>
          <th scope="row">02 Sat</th>
          <td>{props.vitalsign.oxygen_saturation}</td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default VitalSignsCard


  
