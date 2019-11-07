import React, { useEffect, useState, useRef } from "react";
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

  const [heart_rate_danger, setHeartDanger] =  useState(false);
  const [oxygen_danger, setOxygenDanger] =  useState(false);
  const [respiration_danger, setRespirationDanger] =  useState(false);
  const [temperature_danger, setTemperatureDanger] =  useState(false);

  const heartrateCritical = () =>{

    props.vitalsign.heart_rate > 100 || props.vitalsign.heart_rate < 50 ? setHeartDanger(true) : setHeartDanger(false)
  }
  const respirationCritical = () =>{

    props.vitalsign.respiration_rate > 30 || props.vitalsign.respiration_rate < 10 ? setRespirationDanger(true) : setRespirationDanger(false)
  }
  const oxygenCritical = () =>{

    props.vitalsign.oxygen_saturation < 90 ? setOxygenDanger(true) : setOxygenDanger(false)
  }
  const temperatureCritical = () =>{

    props.vitalsign.temperature > 100.0 || props.vitalsign.temperature < 97.0 ? setTemperatureDanger(true) : setTemperatureDanger(false)
  }

  let classNameHeart = heart_rate_danger ? 'danger' : ''
  let classNameRespiration = respiration_danger ? 'danger' : ''
  let classNameOxygen = oxygen_danger ? 'danger' : ''
  let classNameTemperature = temperature_danger ? 'danger' : ''

  useEffect(() => {
   respirationCritical()
   heartrateCritical()
   temperatureCritical()
   oxygenCritical()
  });

  





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
          <td className={classNameTemperature}>{props.vitalsign.temperature} °F</td>
        </tr>
        <tr>
          <th scope="row">HR</th>
          <td className={classNameHeart}>{props.vitalsign.heart_rate} bpm</td>
        </tr>
        <tr>
          <th scope="row">BP</th>
          <td>{props.vitalsign.blood_pressure}</td>
        </tr>
        
        <tr>
          <th scope="row">RR</th>
          <td className={classNameRespiration}>{props.vitalsign.respiration_rate} bpm</td>
        </tr>
        <tr>
          <th scope="row">02 Sat</th>
          <td className={classNameOxygen}>{props.vitalsign.oxygen_saturation}%</td>
        </tr>
      </tbody>
    </Table>
    <VitalSignsEditForm  vitalsign={props.vitalsign} getVitalsigns={props.getVitalsigns}  {...props} />
    </div>
    </>
  )
}

export default VitalSignsCard


  
