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
   
      {
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
      <Button color="danger" onClick={toggle}>Add Vital Signs</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      {/* Add Patient Form */}
      <main style={{ textAlign: "center" }}>
        <form className="form--login" onSubmit={handleCreate}>
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
              placeholder="Temperature"
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
              placeholder="Blood Pressure"
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
              placeholder="Heart Rate"
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
              placeholder="Respiration Rate"
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
              placeholder="O2 Sats"
              required
            />
          </fieldset>
         
          <fieldset>
            <button type="submit">submit</button>
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