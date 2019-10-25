import { Route } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"
import Register from "./auth/Register"
import Login from "./auth/Login"
import useSimpleAuth from "../hooks/ui/useSimpleAuth"


const ApplicationViews = () => {
    const { isAuthenticated } = useSimpleAuth();
    return (
        <React.Fragment>

          {<Route
              exact path="/" render={props => {
                  return (
                      <>
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
      
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);