import { Route } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"
import Register from "./auth/Register"
import Login from "./auth/Login"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"
import PatientList from "./patient/patient"
import PatientForm from "./patient/PatientForm"


const ApplicationViews = () => {
    const { isAuthenticated } = useSimpleAuth();
    return (
        <React.Fragment>

          {<Route
              exact path="/" render={props => {
                  return (
                      <>
                      <PatientList {...props} />
                      </>
                  )
              }}
          /> }
          

      
      <Route
        path="/register"
        render={props => {
          return <Register {...props} />;
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