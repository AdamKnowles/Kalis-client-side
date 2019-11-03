import { Route, Redirect } from "react-router-dom"
import React, { useRef, useState, useEffect } from "react";
import { withRouter } from "react-router-dom"
import Register from "./auth/Register"
import Login from "./auth/Login"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import PatientList from "./patient/patient"
import PatientForm from "./patient/PatientForm"
import PatientProfile from "./patient/patientProfile"
import VitalSigns from "./vitalsigns/vitalsigns"
import MyPatients from "./mypatients/mypatientlist"


const ApplicationViews = () => {
    const { isAuthenticated } = useSimpleAuth();
    const [mentalstatus, setMentalStatus] = useState([]);
    const [heartsounds, setHeartSounds] = useState([]);


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

        useEffect(() => {
          getMentalStatus();
          getHeartSounds();
          
        }, []);











    return (
        <React.Fragment>
        
          {<Route
          
              exact path="/" render={props => {
                if(isAuthenticated())
                  return (
                      <>
                      <PatientList {...props} />
                      
                      </>
                  )
                  else return <Redirect to="/login"/>
              }}
          /> }

        <Route
        path="/patientProfile/:patientProfileId(\d+)"
        render={props => {
          const patientId = +props.match.params.patientProfileId;
          return <PatientProfile  patientProfileId={patientId} mentalstatus={mentalstatus} heartsounds={heartsounds} {...props} />;
        }}
      />
          

      
      <Route
        path="/register"
        render={props => {
          return <Register {...props} />;
        }}
      />
      <Route
        exact path="/mypatients"
        render={props => {
          return <MyPatients {...props} />;
        }}
      />

      <Route
        path="/login"
        render={props => {
          return <Login {...props} />;
        }}
      />
      <Route
        path="/patientform"
        render={props => {
          return <PatientForm {...props} />;
        }}
      />
      
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);