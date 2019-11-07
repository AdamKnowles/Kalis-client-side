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
    
    



    

        










    return (
        <React.Fragment>
        
          {<Route
          
              exact path="/" render={props => {
                if(isAuthenticated())
                  return (
                      <>
                      <PatientList  {...props} />
                      
                      </>
                  )
                  else return <Redirect to="/login"/>
              }}
          /> }

        <Route
        path="/patientProfile/:patientProfileId(\d+)"
        render={props => {
          const patientId = +props.match.params.patientProfileId;
          return <PatientProfile  patientProfileId={patientId}  {...props} />;
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
          return <PatientForm  {...props} />;
        }}
      />
      
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);