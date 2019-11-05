import React from "react"
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';
import AssessmentEditForm from "./assessemtneditform";
import moment from "moment"





// Author: Adam Knowles
// Purpose: Show all products and related information that a user has shown for sale
// Methods: GET, DELETE

const AssessmentCard = props => {
    
  
  return (
    <>
    
    <div className="text-center"><strong>{moment(props.assessment.time).format('L')}</strong></div>
      <Table bordered className ="mt-1" >
      <tbody>
      <tr>
          <th scope="row">Time</th>
          <td><strong>{moment(props.assessment.time).format('HHmm')}</strong></td>
        </tr>
      <tr>
          <th scope="row">Mental Status</th>
          <td>{props.assessment.mental_status.mental_status}</td>
        </tr>
        <tr>
          <th scope="row">Pupil Response</th>
          <td>{props.assessment.pupil_response.pupil_response}mm</td>
        </tr>
        <tr>
          <th scope="row">Heart Sounds</th>
          <td>{props.assessment.heart_sounds.heart_sounds}</td>
        </tr>
        <tr>
          <th scope="row">Breath Sounds</th>
          <td>{props.assessment.breath_sounds.breath_sounds}</td>
        </tr>
        <tr>
          <th scope="row">Edema</th>
          <td>{props.assessment.edema.edema}+</td>
        </tr>
        <tr>
          <th scope="row">Oxygen Rate</th>
          <td>{props.assessment.oxygen_rate.oxygen_rate} L</td>
        </tr>
        <tr>
          <th scope="row">Bowel Sounds</th>
          <td>{props.assessment.bowel_sounds.bowel_sounds}</td>
        </tr>
        <tr>
          <th scope="row">NPO</th>
          <td>{props.assessment.npo.npo}</td>
        </tr>
        <tr>
          <th scope="row">Last BM</th>
          <td>{props.assessment.last_bowel_movement}</td>
        </tr>
        <tr>
          <th scope="row">Urine Color</th>
          <td>{props.assessment.urine_color.urine_color}</td>
        </tr>
        <tr>
          <th scope="row">Urine Odor</th>
          <td>{props.assessment.urine_odor.urine_odor}</td>
        </tr>
        <tr>
          <th scope="row">Urine Amount(mL)</th>
          <td>{props.assessment.urine_amount} mL</td>
        </tr>
      </tbody>
    </Table>
    <AssessmentEditForm assessment={props.assessment} getAssessments={props.getAssessments}  {...props} />
    </>
  )
}

export default AssessmentCard
