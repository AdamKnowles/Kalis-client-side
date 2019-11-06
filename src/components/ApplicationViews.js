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
    const [breathsounds, setBreathSounds] = useState([]);
    const [bowelsounds, setBowelSounds] = useState([]);
    const [edema, setEdema] = useState([]);
    const [pupilresponse, setPupilResponse] = useState([]);
    const [npo, setNpo] = useState([]);
    const [urinecolor, setUrineColor] = useState([]);
    const [urineodor, setUrineOdor] = useState([]);
    const [oxygenrate, setOxygenRate] = useState([]);
    const [patientgender, setPatientGender] = useState([]);



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
    const getPatientGender = () => {
      fetch(`http://localhost:8000/patientgender`, {
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
        .then(setPatientGender)
    }

        useEffect(() => {
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
          getPatientGender();
          
        }, []);











    return (
        <React.Fragment>
        
          {<Route
          
              exact path="/" render={props => {
                if(isAuthenticated())
                  return (
                      <>
                      <PatientList patientgender={patientgender} {...props} />
                      
                      </>
                  )
                  else return <Redirect to="/login"/>
              }}
          /> }

        <Route
        path="/patientProfile/:patientProfileId(\d+)"
        render={props => {
          const patientId = +props.match.params.patientProfileId;
          return <PatientProfile  patientProfileId={patientId} npo={npo} pupilresponse={pupilresponse} edema={edema} bowelsounds={bowelsounds} breathsounds={breathsounds} mentalstatus={mentalstatus} heartsounds={heartsounds}
          oxygenrate={oxygenrate} urinecolor={urinecolor} urineodor={urineodor} {...props} />;
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
          return <PatientForm patientgender={patientgender} {...props} />;
        }}
      />
      
    </React.Fragment>
  );
};

export default withRouter(ApplicationViews);