import React, { useState, useEffect } from "react"
import VitalSignsCard from "./VitalSignsCard";
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import classnames from 'classnames';
// Author: Adam Knowles
// Purpose: Show all vital signs and related information that a user has shown for sale
// Methods: GET, DELETE

const VitalSigns = props => {

    
    const [activeTab, setActiveTab] = useState('1');
      
        const toggle = tab => {
          if(activeTab !== tab) setActiveTab(tab);
        }
  const [vitalsigns, setVitalSigns] = useState([])
  

  const getVitalSigns = () => {
    fetch(`http://localhost:8000/vitalsigns`, {
      method: "GET",
      headers: {
        
        "Accept": "application/json",
        "Content-Type": "application/json",
        
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
        
        <h2><strong>Vital Signs</strong></h2>
        
        
        {vitalsigns.map(vitalsign => (
    
          <VitalSignsCard key={vitalsign.id} vitalsign={vitalsign} {...props} />
        ))}
          
        </Card>
      </Col>
    </Row>
  </TabPane>
  <TabPane tabId="2">
    <Row>
      <Col sm="12">
      <Card body>
        
        <h2><strong>Vital Signs</strong></h2>
        
        
        {vitalsigns.map(vitalsign => (
    
          <VitalSignsCard key={vitalsign.id} vitalsign={vitalsign} {...props} />
        ))}
          
        </Card>
      </Col>
    </Row>
  </TabPane>
</TabContent>
</div>
);
}
  

export default VitalSigns


