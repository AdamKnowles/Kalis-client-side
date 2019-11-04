import React, { useRef, useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const VitalSignsEditForm = props => {

    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
      const [nestedModal, setNestedModal] = useState(false);
      const [closeAll, setCloseAll] = useState(false);
      const [temperature, setTemperature] = useState("");
      const [blood_pressure, setBloodPressure] = useState("");
      const [oxygen_saturation, setOxygenSaturation] = useState("");
      const [heart_rate, setHeartRate] = useState("");
      const [respiration_rate, setRespirationRate] = useState("");
      
      
      
    
      const toggle = () => {
        setModal(!modal)
        setTemperature(props.vitalsign.temperature)
        setBloodPressure(props.vitalsign.blood_pressure)
        setOxygenSaturation(props.vitalsign.oxygen_saturation)
        setHeartRate(props.vitalsign.heart_rate)
        setRespirationRate(props.vitalsign.respiration_rate)
        
      }
      

      const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
      }
      const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
      }

    

  const handleEditVitalSigns = (e) => {
    e.preventDefault()
    const editVitalSign = {
        temperature: temperature,
        heart_rate: heart_rate,
        blood_pressure: blood_pressure,
        oxygen_saturation: oxygen_saturation,
        respiration_rate: respiration_rate,
        patient_id: props.vitalsign.patient_id
    }
    if (oxygen_saturation > 100){
      alert("O2 Sat can not exceed 100%")
    }
    else{

      fetch(`http://localhost:8000/vitalsigns/${props.vitalsign.id}`, {
          method: "PUT",
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              Authorization: `Token ${localStorage.getItem(
                  "kalis_token"
              )}`
          },
          body: JSON.stringify(editVitalSign)
  
          
        })
        .then( () => props.getVitalSigns())
        .then(() => toggle())
      }
    }
    


    return (
        <>
        


<Button color="info" onClick={toggle}>Edit Vital Signs</Button>
<Modal isOpen={modal} toggle={toggle} className={className}>
{/* Add Patient Form */}
<main style={{ textAlign: "center" }}>
  <form className="form--login" onSubmit={handleEditVitalSigns}>
    <div className="card">
      <div className="card-body">
    <h1 className="card-title h3 mb-3 font-weight-normal">Enter in Vital Signs</h1>
    <fieldset>
      <label className="card-text" htmlFor="temperature"> Temperature </label>
      <input
        // ref={temperature}
        type="text"
        name="name"
        className="form-control"
        placeholder="Temperature"
        onChange = {e => setTemperature(e.target.value)}
        value={temperature}
        required
        autoFocus
      />
    </fieldset>
    <fieldset>
      <label className="card-text" htmlFor="blood_pressure"> Blood Pressure </label>
      <input
        // ref={blood_pressure}
        type="text"
        name="blood_pressure"
        className="form-control"
        placeholder="Blood Pressure"
        onChange = {e => setBloodPressure(e.target.value)}
        value={blood_pressure}
        required
      />
    </fieldset>
    
    <fieldset>
      <label className="card-text" htmlFor="heart_rate"> Heart Rate </label>
      <input
        // ref={heart_rate}
        type="text"
        name="heart_rate"
        className="form-control"
        placeholder="Heart Rate"
        onChange = {e => setHeartRate(e.target.value)}
        value={heart_rate}
        required
      />
    </fieldset>
    <fieldset>
      <label className="card-text" htmlFor="respiration_rate"> Respiration Rate </label>
      <input
        // ref={respiration_rate}
        type="text"
        name="respiration_rate"
        className="form-control"
        placeholder="Respiration Rate"
        onChange = {e => setRespirationRate(e.target.value)}
        value={respiration_rate}
        required
      />
    </fieldset>
    <fieldset>
      <label className="card-text" htmlFor="oxygen_saturation"> O2 Sats </label>
      <input
        // ref={oxygen_saturation}
        type="text"
        name="oxygen_saturation"
        className="form-control"
        placeholder="O2 Sats"
        onChange = {e => setOxygenSaturation(e.target.value)}
        value={oxygen_saturation}
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
    
    export default VitalSignsEditForm;