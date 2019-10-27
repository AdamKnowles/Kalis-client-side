import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VitalSigns from "../vitalsigns/vitalsigns";
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import classnames from 'classnames';


// Author: Adam Knowles
// Purpose: Show the category Profile. This includes information(name, price, quantity) about each product the category contains.

const PatientProfile = props => {

  const [activeTab, setActiveTab] = useState('1');
      
  const toggle = tab => {
  if(activeTab !== tab) setActiveTab(tab);
  }

  const [patient, setPatient] = useState([]);
  

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
      });
  };

  
  useEffect(() => {
    getPatient(props.patientProfileId);
  }, []);
  

  //If the category ID matches the categoryProfile ID, show all products and information associated with that category

  return (
    <><div>
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
    <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
        <Row>
          <Col sm="12">
          <Card body>
      {/* vital signs component rendered */}
      <VitalSigns {...props} />

      </Card>
      </Col>
    </Row>
  </TabPane>
  <TabPane tabId="2">
    <Row>
      <Col sm="12">
      <Card body>

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
