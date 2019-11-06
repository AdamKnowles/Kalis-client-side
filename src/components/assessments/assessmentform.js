import React, { useEffect, useState, useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const AssessmentForm = props => {


    

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

  
  
  


  const handleCreate = e => {
    e.preventDefault();

    

    const newAssessment = {
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
        patient_id: +props.match.params.patientProfileId
      
    };
   
      {
      createAssessment(newAssessment)
    }
  };

  

  const createAssessment = newAssessment => {
    return fetch("http://localhost:8000/assessments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Token ${localStorage.getItem(
          "kalis_token"
      )}`
        
      },
      body: JSON.stringify(newAssessment)
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

  
//   time = models.DateTimeField(auto_now_add=True)
//   mental_status = models.CharField(max_length=100)
//   pupil_response = models.CharField(max_length=50)
//   heart_sounds = models.CharField(max_length=50)
//   breath_sounds = models.CharField(max_length=50)
//   edema = models.CharField(max_length=50)
//   oxygen_rate = models.IntegerField()
//   bowel_sounds = models.CharField(max_length=50)
//   npo = models.CharField(max_length=50)
//   last_bowel_movement = models.DateField()
//   urine_color = models.CharField(max_length=50)
//   urine_odor = models.CharField(max_length=50)
//   urine_amount = models.IntegerField()
//   patient = models.ForeignKey(Patient, on_delete=models.DO_NOTHING)
  
  

  // Create HTML representation with JSX
  return (
    <>
    <div className="d-flex justify-content-center mb-4">
      <Button color="info" onClick={toggle}>Add Assessment</Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      {/* Add Patient Form */}
      <main style={{ textAlign: "center" }}>
        <form className="form--login patient-form" onSubmit={handleCreate}>
          <div className="card">
            <div className="card-body">
          <h1 className="card-title h3 mb-3 font-weight-normal">Enter in a new Assessment</h1>
          <fieldset>
      <label>Mental Status</label>
      <select ref={mental_status}  className="form-control" name="mental_status" required >
      <option value="Select" placeholder="Select"></option>
      {
       props.mentalstatus.map(assessment => {
           return <option key={assessment.id} value={assessment.id} >{assessment.mental_status}</option>
          })
       }
       </select>
      </fieldset>
      <fieldset>
      <label>Pupil Response</label>
      <select ref={pupil_response} className="form-control" name="pupil_response" required >
      <option defaultValue="Select"></option>
      {
       props.pupilresponse.map(assessment => {
           return <option key={assessment.id} value={assessment.id} >{assessment.pupil_response}</option>
          })
       }
       </select>
      </fieldset>
          <fieldset>
      <label>Heart Sounds</label>
      <select ref={heart_sounds} className="form-control" name="heart_sounds" required >
      <option defaultValue="Select"></option>
      {
       props.heartsounds.map(assessment => {
           return <option key={assessment.id} value={assessment.id} >{assessment.heart_sounds}</option>
          })
       }
       </select>
      </fieldset>
      <fieldset>
      <label>Breath Sounds</label>
      <select ref={breath_sounds} className="form-control" name="breath_sounds" required >
      <option defaultValue="Select"></option>
      {
       props.breathsounds.map(assessment => {
           return <option key={assessment.id} value={assessment.id} >{assessment.breath_sounds}</option>
          })
       }
       </select>
       <fieldset>
      <label>Edema</label>
      <select ref={edema} className="form-control" name="edema" required >
      <option defaultValue="Select"></option>
      {
       props.edema.map(assessment => {
           return <option key={assessment.id} value={assessment.id} >{assessment.edema}</option>
          })
       }
       </select>
      </fieldset>
      <fieldset>
      <label>Oxygen Rate(L)</label>
      <select ref={oxygen_rate} className="form-control" name="oxygen_rate" required >
      <option defaultValue="Select"></option>
      {
       props.oxygenrate.map(assessment => {
           return <option key={assessment.id} value={assessment.id} >{assessment.oxygen_rate}</option>
          })
       }
       </select>
      </fieldset>
          <fieldset>
      <label>Bowel Sounds</label>
      <select ref={bowel_sounds} className="form-control" name="bowel_sounds" required >
      <option defaultValue="Select"></option>
      {
       props.bowelsounds.map(assessment => {
           return <option key={assessment.id} value={assessment.id} >{assessment.bowel_sounds}</option>
          })
       }
       </select>
      </fieldset>
          
      <fieldset>
      <label>NPO(Nothing by Mouth)</label>
      <select ref={npo} className="form-control" name="npo" required >
      <option defaultValue="Select"></option>
      {
       props.npo.map(assessment => {
           return <option key={assessment.id} value={assessment.id} >{assessment.npo}</option>
          })
       }
       </select>
      </fieldset>
      <fieldset>
      <label>Urine Odor</label>
      <select ref={urine_odor} className="form-control" name="urine_odor" required >
      <option defaultValue="Select"></option>
      {
       props.urineodor.map(assessment => {
           return <option key={assessment.id} value={assessment.id} >{assessment.urine_odor}</option>
          })
       }
       </select>
      </fieldset>
          <fieldset>
      <label>Urine Color</label>
      <select ref={urine_color} className="form-control" name="urine_color" required >
      <option defaultValue="Select"></option>
      {
       props.urinecolor.map(assessment => {
           return <option key={assessment.id} value={assessment.id} >{assessment.urine_color}</option>
          })
       }
       </select>
      </fieldset>
          <fieldset>
            <label className="card-text" htmlFor="urine_amount"> Urine Amount(mL) </label>
            <input
              ref={urine_amount}
              type="text"
              name="urine_amount"
              className="form-control"
              placeholder="Urine Amount i.e. 250"
              required
            />
            </fieldset>
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

export default AssessmentForm;