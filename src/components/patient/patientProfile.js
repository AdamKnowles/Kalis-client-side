import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VitalSigns from "../vitalsigns/vitalsigns";
import Assessments from "../assessments/assessments"
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import classnames from 'classnames';
import VitalSignForm from "../vitalsigns/vitalsignform"
import AssessmentForm from "../assessments/assessmentform";


// Author: Adam Knowles
// Purpose: Show the category Profile. This includes information(name, price, quantity) about each product the category contains.

const PatientProfile = props => {

  const [activeTab, setActiveTab] = useState('1');
      
  const toggle = tab => {
  if(activeTab !== tab) setActiveTab(tab);
  }

  const [patient, setPatient] = useState([]);
  const [mentalstatus, setMentalStatus] = useState([]);
    const [heartsounds, setHeartSounds] = useState([]);
    const [breathsounds, setBreathSounds] = useState([]);
    const [bowelsounds, setBowelSounds] = useState([]);
    const [edema, setEdema] = useState([]);
    const [pupilresponse, setPupilResponse] = useState([]);
    const [npo, setNpo] = useState([]);
    const [urinecolor, setUrineColor] = useState([]);
    const [urineodor, setUrineOdor] = useState([]);
    const [oxygenrate, setOxygenRate] = useState([]);
  const [sex, setSex] = useState([] )
  

  const getPatient = patientProfileId => {
    fetch(`http://localhost:8000/patients/${patientProfileId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("kalis_token")}`
      }
    })
      .then(response => response.json())
      .then(patient => {
        setPatient(patient);
        setSex(patient.sex)
        
      });
  };

  const getMentalStatus = () => {
    fetch(`http://localhost:8000/mentalstatus`, {
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
      .then(setMentalStatus)
  }
  const getHeartSounds = () => {
    fetch(`http://localhost:8000/heartsounds`, {
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
      .then(setHeartSounds)
  }
  const getBreathSounds = () => {
    fetch(`http://localhost:8000/breathsounds`, {
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
      .then(setBreathSounds)
  }
  const getBowelSounds = () => {
    fetch(`http://localhost:8000/bowelsounds`, {
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
      .then(setBowelSounds)
  }
  const getEdema = () => {
    fetch(`http://localhost:8000/edema`, {
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
      .then(setEdema)
  }
  const getPupilResponse = () => {
    fetch(`http://localhost:8000/pupilresponse`, {
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
      .then(setPupilResponse)
  }
  const getNpo = () => {
    fetch(`http://localhost:8000/npo`, {
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
      .then(setNpo)
  }
  const getUrineColor = () => {
    fetch(`http://localhost:8000/urinecolor`, {
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
      .then(setUrineColor)
  }
  const getUrineOdor = () => {
    fetch(`http://localhost:8000/urineodor`, {
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
      .then(setUrineOdor)
  }
  const getOxygenRate = () => {
    fetch(`http://localhost:8000/oxygenrate`, {
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
      .then(setOxygenRate)
  }
  

  
  console.log(sex)
  
  useEffect(() => {
    getPatient(props.patientProfileId);
    getMentalStatus();
          getHeartSounds();
          getBreathSounds();
          getBowelSounds();
          getEdema();
          getPupilResponse();
          getNpo();
          getUrineColor();
          getUrineOdor();
          getOxygenRate();
  }, []);
  
  
  const Capitalize =(str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  

  //If the category ID matches the categoryProfile ID, show all products and information associated with that category

  return (
    <><div >
      <div className="d-flex justify-content-center">
    <Nav tabs>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === '1' })}
          onClick={() => { toggle('1'); }}
        >
          Vital Signs
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === '2' })}
          onClick={() => { toggle('2'); }}
        >
          Assessments
        </NavLink>
      </NavItem>
    </Nav>
    </div>
    <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
        <Row>
          <Col sm="12">
          <Card body>
          <div className="d-flex justify-content-center mb-1">
            <h3 className="patient-name">{(patient.first_name)} {patient.last_name}</h3>
            </div>
            <div className = "patient-profile-detail-text">
            <div className="d-flex justify-content-center mb-4">   
          <div className="mr-3"><strong>Birth Date: </strong>{patient.birth_date}</div>
          <div className="mr-3"><strong>Sex: </strong>{sex.sex}</div>
          <div className="mr-3"><strong>Diagnosis: </strong>{patient.diagnosis}</div>
          </div>
            </div>
            
            
          
      {/* vital signs component rendered */}
      <VitalSigns  {...props} />

      </Card>
      </Col>
    </Row>
  </TabPane>
  <TabPane tabId="2">
    <Row>
      <Col sm="12">
      <Card body>
      <div className="d-flex justify-content-center mb-1">
            <h3 className="patient-name">{(patient.first_name)} {patient.last_name}</h3>
            </div>
            <div className="patient-profile-detail-text">
            <div className="d-flex justify-content-center mb-4">   
          <div className="mr-3"><strong>Birth Date: </strong>{patient.birth_date}</div>
          <div className="mr-3"><strong>Sex: </strong>{sex.sex}</div>
          <div className="mr-3"><strong>Diagnosis: </strong>{patient.diagnosis}</div>
          </div>
            </div>
        
        {/* rendering the assessments component */}
      <Assessments mentalstatus={mentalstatus} heartsounds={heartsounds} npo={npo} pupilresponse={pupilresponse} edema={edema} bowelsounds={bowelsounds} breathsounds={breathsounds} oxygenrate={oxygenrate} urinecolor={urinecolor} urineodor={urineodor}  {...props} />
        </Card>
      </Col>
    </Row>
  </TabPane>
</TabContent>
</div>
    </>
  );
};

export default PatientProfile;
