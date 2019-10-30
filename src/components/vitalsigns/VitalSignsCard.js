import React from "react"
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';
import VitalSignForm from "./vitalsignform";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import VitalSignsEditForm from "./vitalsignsedit";





// Author: Adam Knowles
// Purpose: Show all products and related information that a user has shown for sale
// Methods: GET, DELETE

const VitalSignsCard = props => {
  
    
  
  return (
    <>
    
    
      <Table bordered className="mt-3" >
      
      <tbody>
      <tr>
          <th scope="row">Time</th>
          <td><strong>{props.vitalsign.time}</strong></td>
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
    <VitalSignsEditForm  vitalsign={props.vitalsign} getVitalsigns={props.getVitalsigns}  {...props} />
    </>
  )
}

export default VitalSignsCard


  
