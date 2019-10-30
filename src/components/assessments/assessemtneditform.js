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
      
      
      
    
      const toggle = (e) => setModal(!modal)
      

      const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
      }
      const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
      }

  const mental_status = useRef();
  const pupil_response = useRef();
  const heart_sounds = useRef();
  const breath_sounds = useRef();
  const edema = useRef();
  const oxygen_rate = useRef();
  const bowel_sounds = useRef();
  const npo = useRef();
  const last_bowel_movement = useRef();
  const urine_color = useRef();
  const urine_odor = useRef();
  const urine_amount = useRef();
      
      const handleAssessment = (e) => {
          e.preventDefault()
    
    const editAssessment = {
        mental_status:  mental_status.current.value,
        pupil_response: pupil_response.current.value,
        heart_sounds: heart_sounds.current.value,
        breath_sounds: breath_sounds.current.value,
        edema: edema.current.value,
        oxygen_rate: oxygen_rate.current.value,
        bowel_sounds: bowel_sounds.current.value,
        npo: npo.current.value,
        last_bowel_movement: last_bowel_movement.current.value,
        urine_color: urine_color.current.value,
        urine_odor: urine_odor.current.value,
        urine_amount: urine_amount.current.value,
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
        


        <Button color="danger" onClick={toggle}>Edit Assessment</Button>
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
              ref={mental_status}
              type="text"
              name="mental_status"
              className="form-control"
              placeholder="Mental Status"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="pupil_response"> Pupil Response </label>
            <input
              ref={pupil_response}
              type="text"
              name="pupil_response"
              className="form-control"
              placeholder="Pupil Response"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="heart_sounds"> Heart Sounds </label>
            <input
              ref={heart_sounds}
              type="text"
              name="heart_sounds"
              className="form-control"
              placeholder="Heart Sounds"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="breath_sounds"> Breath Sounds </label>
            <input
              ref={breath_sounds}
              type="text"
              name="breath_sounds"
              className="form-control"
              placeholder="Breath Sounds"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="edema"> Edema </label>
            <input
              ref={edema}
              type="text"
              name="edema"
              className="form-control"
              placeholder="Edema"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="oxygen_rate"> Oxygen Rate </label>
            <input
              ref={oxygen_rate}
              type="text"
              name="oxygen_rate"
              className="form-control"
              placeholder="Oxygen Rate"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="bowel_sounds"> Bowel Sounds </label>
            <input
              ref={bowel_sounds}
              type="text"
              name="bowel_sounds"
              className="form-control"
              placeholder="bowel_sounds"
              required
            />
          </fieldset>
          
          <fieldset>
            <label className="card-text" htmlFor="npo"> NPO </label>
            <input
              ref={npo}
              type="text"
              name="npo"
              className="form-control"
              placeholder="NPO Status"
              required
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="urine_color"> Urine Color </label>
            <input
              ref={urine_color}
              type="text"
              name="urine_color"
              className="form-control"
              placeholder="Urine Color"
              required
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="urine_odor"> Urine Odor </label>
            <input
              ref={urine_odor}
              type="text"
              name="urine_odor"
              className="form-control"
              placeholder="Urine Odor"
              required
            />
          </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="urine_amount"> Urine Amount </label>
            <input
              ref={urine_amount}
              type="text"
              name="urine_amount"
              className="form-control"
              placeholder="Urine Amount"
              required
            />
          <fieldset>
          <label className="card-text" htmlFor="last_bowel_movement"> Last BM </label>
          <input
          type="date"
          ref={last_bowel_movement}
          name="last_bowel_movement"
          defaultValue={new Date()}
          
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