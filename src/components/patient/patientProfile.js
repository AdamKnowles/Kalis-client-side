import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VitalSigns from "../vitalsigns/vitalsigns";


// Author: Adam Knowles
// Purpose: Show the category Profile. This includes information(name, price, quantity) about each product the category contains.

const PatientProfile = props => {
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
    <>
      <VitalSigns {...props} />
    </>
  );
};

export default PatientProfile;
