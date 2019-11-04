import React, { useRef, useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const AssessmentEditForm = props => {

    const {
        buttonLabel,
        className
      } = props;


    
    const [modal, setModal] = useState(false);
    const [last_bowel_movement, setLastBowelMovement] = useState("");
            const [urine_amount, setUrineAmount] = useState("");
  
  const mental_status = useRef();
  const pupil_response = useRef();
  const heart_sounds = useRef();
  const breath_sounds = useRef();
  const edema = useRef();
  const oxygen_rate = useRef();
  const bowel_sounds = useRef();
  const npo = useRef();
  const urine_color = useRef();
  const urine_odor = useRef();
  
      
      
      
    
      const toggle = () => {
      setModal(!modal)
      setLastBowelMovement(props.assessment.last_bowel_movement)
        setUrineAmount(props.assessment.urine_amount)
        {console.log(props.assessment.id)}

      
      }
      

      

  
      
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
        last_bowel_movement: last_bowel_movement,
        urine_color: urine_color.current.value,
        urine_odor: urine_odor.current.value,
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

        
      }).then(res => res.json())
      .then(res => {
        if ("error" in res == true) {
          alert("Can not enter BM date in the future")
        } 
        else {
           props.getAssessments()
           toggle()
        }
      });
    };
  
    

   

    return (
        <>
        


        <Button color="info" onClick={toggle}>Edit Assessment</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      {/* Add Patient Form */}
      <main style={{ textAlign: "center" }}>
        <form className="form--login" onSubmit={handleAssessment}>
          <div className="card">
            <div className="card-body">
          <h1 className="card-title h3 mb-3 font-weight-normal">Edit an Assessment</h1>
          <fieldset>
      <label>Mental Status</label>
      <select ref={mental_status} className="form-control" name="mental_status" required >
      <option   >Select</option>
      {
       props.mentalstatus.map(assessment=> {
            if(props.assessment.mental_status_id === assessment.id){
                return <option value={assessment.id} selected>{assessment.mental_status}</option>
            }
            else{
                return <option value={assessment.id} >{assessment.mental_status}</option>
            }
            })
        }
       </select>
      </fieldset>
      <fieldset>
      <label>Pupil Response</label>
      <select  ref={pupil_response}  className="form-control" name="pupil_response" required >
      <option value={props.assessment.pupil_response}>Select</option>
      {
       props.pupilresponse.map(assessment=> {
            if(props.assessment.pupil_response_id === assessment.id){
                return <option value={assessment.id} selected>{assessment.pupil_response}</option>
            }
            else{
                return <option value={assessment.id} >{assessment.pupil_response}</option>
            }
            })
        }
       </select>
      </fieldset>
          <fieldset>
      <label>Heart Sounds</label>
      <select ref={heart_sounds} className="form-control" name="heart_sounds" required >
      <option  value={props.assessment.heart_sounds}>Select</option>
      {
       props.heartsounds.map(assessment=> {
            if(props.assessment.heart_sounds_id === assessment.id){
                return <option value={assessment.id} selected>{assessment.heart_sounds}</option>
            }
            else{
                return <option value={assessment.id} >{assessment.heart_sounds}</option>
            }
            })
        }
       </select>
      </fieldset>
      <fieldset>
      <label>Breath Sounds</label>
      <select ref={breath_sounds}  className="form-control" name="breath_sounds" required >
      <option  value={props.assessment.breath_sounds}>Select</option>
      {
       props.breathsounds.map(assessment=> {
            if(props.assessment.breath_sounds_id === assessment.id){
                return <option value={assessment.id} selected>{assessment.breath_sounds}</option>
            }
            else{
                return <option value={assessment.id} >{assessment.breath_sounds}</option>
            }
            })
        }
       </select>
       <fieldset>
      <label>Edema</label>
      <select ref={edema} className="form-control" name="edema" required >
      <option  value={props.assessment.edema}>Select</option>
      {
       props.edema.map(assessment=> {
            if(props.assessment.edema_id === assessment.id){
                return <option value={assessment.id} selected>{assessment.edema}</option>
            }
            else{
                return <option value={assessment.id} >{assessment.edema}</option>
            }
            })
        }
       </select>
      </fieldset>
      <fieldset>
      <label>Oxygen Rate</label>
      <select ref={oxygen_rate} className="form-control" name="oxygen_rate" required >
      <option  value={props.assessment.oxygen_rate}>Select</option>
      {
       props.oxygenrate.map(assessment=> {
            if(props.assessment.oxygen_rate_id === assessment.id){
                return <option value={assessment.id} selected>{assessment.oxygen_rate}</option>
            }
            else{
                return <option value={assessment.id} >{assessment.oxygen_rate}</option>
            }
            })
        }
       </select>
      </fieldset>
          <fieldset>
      <label>Bowel Sounds</label>
      <select ref={bowel_sounds} className="form-control" name="bowel_sounds" required >
      <option  value={props.assessment.bowel_sounds}>Select</option>
      {
       props.bowelsounds.map(assessment=> {
            if(props.assessment.bowel_sounds_id === assessment.id){
                return <option value={assessment.id} selected>{assessment.bowel_sounds}</option>
            }
            else{
                return <option value={assessment.id} >{assessment.bowel_sounds}</option>
            }
            })
        }
       </select>
      </fieldset>
          
      <fieldset>
      <label>NPO</label>
      <select ref={npo} className="form-control" name="npo" required >
      <option  value={props.assessment.npo}>Select</option>
      {
       props.npo.map(assessment=> {
            if(props.assessment.npo_id === assessment.id){
                return <option value={assessment.id} selected>{assessment.npo}</option>
            }
            else{
                return <option value={assessment.id} >{assessment.npo}</option>
            }
            })
        }
       </select>
      </fieldset>
      <fieldset>
      <label>Urine Odor</label>
      <select ref={urine_odor} className="form-control" name="urine_odor" required >
      <option  value={props.assessment.urine_odor}>Select</option>
      {
       props.urineodor.map(assessment=> {
            if(props.assessment.urine_odor_id === assessment.id){
                return <option value={assessment.id} selected>{assessment.urine_odor}</option>
            }
            else{
                return <option value={assessment.id} >{assessment.urine_odor}</option>
            }
            })
        }
       </select>
      </fieldset>
          <fieldset>
      <label>Urine Color</label>
      <select ref={urine_color} className="form-control" name="urine_color" required >
      <option  value={props.assessment.urine_color}>Select</option>
      {
       props.urinecolor.map(assessment=> {
            if(props.assessment.urine_color_id === assessment.id){
                return <option value={assessment.id} selected>{assessment.urine_color}</option>
            }
            else{
                return <option value={assessment.id} >{assessment.urine_color}</option>
            }
            })
        }
       </select>
      </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="urine_amount"> Urine Amount </label>
            <input
              
              type="text"
              name="urine_amount"
              className="form-control"
              value={urine_amount} 
              onChange={e => setUrineAmount(e.target.value)}
              placeholder="Urine Amount"
              required
            />
            </fieldset>
          <fieldset>
          <label className="card-text" htmlFor="last_bowel_movement"> Last BM </label>
          <input
          type="date"
          value={last_bowel_movement} 
          onChange={e => setLastBowelMovement(e.target.value)}

          name="last_bowel_movement"
          defaultValue={new Date()}
          
        >
            
        </input>
        </fieldset>
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
    
    export default AssessmentEditForm;