import React, { useEffect, useState, useRef } from "react";
import {Button, Card, CardBody} from "reactstrap"





const PatientForm = props => {
  const first_name = useRef();
  const last_name = useRef();
  const birth_date = useRef();
  const sex = useRef();
  const diagnosis = useRef();
  


  const handleCreate = e => {
    e.preventDefault();
    

    const newPatient = {
      first_name: first_name.current.value.toLowerCase(),
      last_name: last_name.current.value.toLowerCase(),
      birth_date: birth_date.current.value,
      sex: sex.current.value,
      diagnosis: diagnosis.current.value,
      
    };
   
      {
      createPatient(newPatient)
      
    }
  };

  

  const createPatient = newPatient => {
    return fetch("http://localhost:8000/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Token ${localStorage.getItem(
          "kalis_token"
      )}`
        
      },
      body: JSON.stringify(newPatient)
    }).then(res => res.json())
    .then(res => {
      if ("error" in res == true) {
        alert("You can not have birth date in the future")
      } 
      else {
        props.history.push("/");
      }
    });
  };

  
  

  // Create HTML representation with JSX
  return (
    <>
      
      
      {/* Add Patient Form */}
      <main style={{ textAlign: "center" }}>
        <form className="form--login" onSubmit={handleCreate}>
          <div className="card">
            <div className="card-body">
              <div className="patient-profile-detail-text">
          <h1 className="card-title h3 mb-3 font-weight-normal">Create a New Patient</h1>
          <fieldset>
            <label className="card-text" htmlFor="first_name"> First Name </label>
            <input
              ref={first_name}
              type="text"
              name="name"
              className="form-control"
              placeholder="First Name"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="last_name"> Last Name </label>
            <input
              ref={last_name}
              type="text"
              name="last_name"
              
              className="form-control"
              placeholder="Last Name"
              required
            />
          </fieldset>
          
          <fieldset>
      <label>Sex</label>
      <select ref={sex} className="form-control" name="sex" required >
      <option defaultValue="Select">Select</option>
      {
       props.patientgender.map(sex => {
           return <option key={sex.id} value={sex.id} >{sex.sex}</option>
          })
       }
       </select>
      </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="diagnosis"> Diagnosis </label>
            <input
              ref={diagnosis}
              type="text"
              name="diagnosis"
              className="form-control"
              placeholder="Diagnosis"
              required
            />
          </fieldset>
          <fieldset>
          <label className="card-text" htmlFor="birth_date"> Birth Date </label>
          <div className="mb-3">
          <input
          type="date"
          ref={birth_date}
          name="birth_date"
          defaultValue={new Date()}
          
          >
            
        </input>
          </div>
        </fieldset>
          <fieldset>
            <div className="d-flex justify-content-center">
            <Button color="info" type="submit">submit</Button>
            </div>
          </fieldset>
          </div>
          </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default PatientForm;