import React from "react"
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';
import VitalSignForm from "./vitalsignform";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import VitalSignsEditForm from "./vitalsignsedit";
import moment from "moment"





// Author: Adam Knowles
// Purpose: Show all products and related information that a user has shown for sale
// Methods: GET, DELETE

const VitalSignsCard = props => {
  
  
    
  
  return (
    <>
    <div className="patient-data-card">
    <div className="text-center patient-timestamp">{moment(props.vitalsign.time).format('L')}</div>
      <Table bordered className="mt-1" >
      
      <tbody>
      <tr>
          <th scope="row">Time</th>
          <td><strong>{moment(props.vitalsign.time).format('HHmm')}</strong></td>
        </tr>
      <tr>
          <th scope="row">Temp</th>
          <td>{props.vitalsign.temperature} °F</td>
        </tr>
        <tr>
          <th scope="row">HR</th>
          <td>{props.vitalsign.heart_rate} bpm</td>
        </tr>
        <tr>
          <th scope="row">BP</th>
          <td>{props.vitalsign.blood_pressure}</td>
        </tr>
        
        <tr>
          <th scope="row">RR</th>
          <td>{props.vitalsign.respiration_rate} bpm</td>
        </tr>
        <tr>
          <th scope="row">02 Sat</th>
          <td>{props.vitalsign.oxygen_saturation}%</td>
        </tr>
      </tbody>
    </Table>
    <VitalSignsEditForm  vitalsign={props.vitalsign} getVitalsigns={props.getVitalsigns}  {...props} />
    </div>
    </>
  )
}

export default VitalSignsCard


  
