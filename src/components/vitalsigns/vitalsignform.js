import React, { useEffect, useState, useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const VitalSignForm = props => {


    

    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
      const [nestedModal, setNestedModal] = useState(false);
      const [closeAll, setCloseAll] = useState(false);
    
      const toggle = () => setModal(!modal);
      const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
      }
      const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
      }


  const temperature = useRef();
  const heart_rate = useRef();
  const blood_pressure = useRef();
  const oxygen_saturation = useRef();
  const respiration_rate = useRef();
  


  const handleCreate = e => {
    e.preventDefault();

    const newVitalSign = {
        temperature: temperature.current.value,
        heart_rate: heart_rate.current.value,
        blood_pressure: blood_pressure.current.value,
        oxygen_saturation: oxygen_saturation.current.value,
        respiration_rate: respiration_rate.current.value,
        patient_id: +props.match.params.patientProfileId
      
    };
    if (oxygen_saturation.current.value > 100){
      alert("O2 Sat can not exceed 100%")
    }
    else{

      createVitalSign(newVitalSign).then(() => props.getVitalSigns()).then(() => toggle())
    }
   
      
    
  };

  

  const createVitalSign = newVitalSign => {
    return fetch("http://localhost:8000/vitalsigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Token ${localStorage.getItem(
          "kalis_token"
      )}`
        
      },
      body: JSON.stringify(newVitalSign)
    }).then(res => res.json());
  };

  

  
  

  // Create HTML representation with JSX
  return (
    <>
    <div className="d-flex justify-content-center mb-4">
      <Button  color="info" onClick={toggle}>Add Vital Signs</Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      {/* Add Patient Form */}
      <main style={{ textAlign: "center" }}>
        <form className="form--login patient-form" onSubmit={handleCreate}>
          <div className="card">
            <div className="card-body">
          <h1 className="card-title h3 mb-3 font-weight-normal">Enter in Vital Signs</h1>
          <fieldset>
            <label className="card-text" htmlFor="temperature"> Temperature </label>
            <input
              ref={temperature}
              type="text"
              name="name"
              className="form-control"
              placeholder="Temperature i.e 98.6"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="blood_pressure"> Blood Pressure </label>
            <input
              ref={blood_pressure}
              type="text"
              name="blood_pressure"
              className="form-control"
              placeholder="Blood Pressure i.e 120/80"
              required
            />
          </fieldset>
          
          <fieldset>
            <label className="card-text" htmlFor="heart_rate"> Heart Rate </label>
            <input
              ref={heart_rate}
              type="text"
              name="heart_rate"
              className="form-control"
              placeholder="Heart Rate i.e 72"
              required
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="respiration_rate"> Respiration Rate </label>
            <input
              ref={respiration_rate}
              type="text"
              name="respiration_rate"
              className="form-control"
              placeholder="Respiration Rate i.e 18"
              required
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="oxygen_saturation"> O2 Sats </label>
            <input
              ref={oxygen_saturation}
              type="text"
              name="oxygen_saturation"
              className="form-control"
              placeholder="O2 Sats i.e 94"
              required
            />
          </fieldset>
         
          <fieldset>
            <div className="d-flex justify-content-center mt-2">
            <Button  color="info" type="submit">submit</Button>
            </div>
          </fieldset>
          </div>
          </div>
        </form>
      </main>
      </Modal>
    </>
  );
};

export default VitalSignForm;