import React, { useRef, useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const AssessmentEditForm = props => {

    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
      const [nestedModal, setNestedModal] = useState(false);
      const [closeAll, setCloseAll] = useState(false);
      const [mental_status, setMentalStatus] = useState("");
      const [pupil_response, setPupilResponse] = useState("");
      const [heart_sounds, setHeartSounds] = useState("");
      const [breath_sounds, setBreathSounds] = useState("");
      const [edema, setEdema] = useState("");
      const [oxygen_rate, setOxygenRate] = useState("");
      const [bowel_sounds, setBowelSounds] = useState("");
      const [npo, setNpo] = useState("");
      const [last_bowel_movement, setLastBowelMovement] = useState("");
      const [urine_color, setUrineColor] = useState("");
      const [urine_odor, setUrineOdor] = useState("");
      const [urine_amount, setUrineAmount] = useState("");
      
      
      
    
      const toggle = () => {
      setModal(!modal)
      setMentalStatus(props.assessment.mental_status)
      setPupilResponse(props.assessment.pupil_response)
      setHeartSounds(props.assessment.heart_sounds)
      setBreathSounds(props.assessment.breath_sounds)
      setEdema(props.assessment.edema)
      setOxygenRate(props.assessment.oxygen_rate)
      setBowelSounds(props.assessment.bowel_sounds)
      setNpo(props.assessment.npo)
      setLastBowelMovement(props.assessment.last_bowel_movement)
      setUrineColor(props.assessment.urine_color)
      setUrineOdor(props.assessment.urine_odor)
      setUrineAmount(props.assessment.urine_amount)
      }
      

      const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
      }
      const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
      }

  
      
      const handleAssessment = (e) => {
          e.preventDefault()
    
    const editAssessment = {
        mental_status:  mental_status,
        pupil_response: pupil_response,
        heart_sounds: heart_sounds,
        breath_sounds: breath_sounds,
        edema: edema,
        oxygen_rate: oxygen_rate,
        bowel_sounds: bowel_sounds,
        npo: npo,
        last_bowel_movement: last_bowel_movement,
        urine_color: urine_color,
        urine_odor: urine_odor,
        urine_amount: urine_amount,
        patient_id: props.assessment.patient_id
    }
    

    fetch(`http://localhost:8000/assessments/${props.assessment.id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem(
                "kalis_token"
            )}`
        },
        body: JSON.stringify(editAssessment)

        
      })
      .then( () => props.getAssessments())
      .then(() => toggle())
      
    }

    // const edit = () => {
        
    //     handleAssessment()
    //     .then(() => toggle())
    // }

    return (
        <>
        


        <Button color="success" onClick={toggle}>Edit Assessment</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      {/* Add Patient Form */}
      <main style={{ textAlign: "center" }}>
        <form className="form--login" onSubmit={handleAssessment}>
          <div className="card">
            <div className="card-body">
          <h1 className="card-title h3 mb-3 font-weight-normal">Enter in a new Assessment</h1>
          <fieldset>
            <label className="card-text" htmlFor="mental_status"> Mental Status </label>
            <input
              type="text"
              name="mental_status"
              className="form-control"
              placeholder="Mental Status"
              value={mental_status}
              onChange = {e => setMentalStatus(e.target.value)}
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="pupil_response"> Pupil Response </label>
            <input
              type="text"
              name="pupil_response"
              className="form-control"
              placeholder="Pupil Response"
              value={pupil_response}
              onChange = {e => setPupilResponse(e.target.value)}
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="heart_sounds"> Heart Sounds </label>
            <input
              type="text"
              name="heart_sounds"
              className="form-control"
              placeholder="Heart Sounds"
              value={heart_sounds}
              onChange = {e => setHeartSounds(e.target.value)}
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="breath_sounds"> Breath Sounds </label>
            <input
              type="text"
              name="breath_sounds"
              className="form-control"
              placeholder="Breath Sounds"
              value={breath_sounds}
              onChange = {e => setBreathSounds(e.target.value)}
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="edema"> Edema </label>
            <input
              type="text"
              name="edema"
              className="form-control"
              placeholder="Edema"
              value={edema}
              onChange = {e => setEdema(e.target.value)}
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="oxygen_rate"> Oxygen Rate </label>
            <input
              type="text"
              name="oxygen_rate"
              className="form-control"
              placeholder="Oxygen Rate"
              value={oxygen_rate}
              onChange = {e => setOxygenRate(e.target.value)}
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="bowel_sounds"> Bowel Sounds </label>
            <input
              type="text"
              name="bowel_sounds"
              className="form-control"
              placeholder="bowel_sounds"
              value={bowel_sounds}
              onChange = {e => setBowelSounds(e.target.value)}
              required
            />
          </fieldset>
          
          <fieldset>
            <label className="card-text" htmlFor="npo"> NPO </label>
            <input
              type="text"
              name="npo"
              className="form-control"
              placeholder="NPO Status"
              value={npo}
              onChange = {e => setNpo(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="urine_color"> Urine Color </label>
            <input
              type="text"
              name="urine_color"
              className="form-control"
              placeholder="Urine Color"
              value={urine_color}
              onChange = {e => setUrineColor(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="urine_odor"> Urine Odor </label>
            <input
              type="text"
              name="urine_odor"
              className="form-control"
              placeholder="Urine Odor"
              value={urine_odor}
              onChange = {e => setUrineOdor(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="urine_amount"> Urine Amount </label>
            <input
              type="text"
              name="urine_amount"
              className="form-control"
              placeholder="Urine Amount"
              value={urine_amount}
              onChange = {e => setUrineAmount(e.target.value)}
              required
            />
          <fieldset>
          <label className="card-text" htmlFor="last_bowel_movement"> Last BM </label>
          <input
          type="date"
          name="last_bowel_movement"
          defaultValue={new Date()}
          value={last_bowel_movement}
          
        >
            
        </input>
        </fieldset>
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
    
    export default AssessmentEditForm;