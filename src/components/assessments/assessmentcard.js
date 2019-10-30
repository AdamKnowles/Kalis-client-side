import React from "react"
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';
import AssessmentEditForm from "./assessemtneditform";





// Author: Adam Knowles
// Purpose: Show all products and related information that a user has shown for sale
// Methods: GET, DELETE

const AssessmentCard = props => {
    
  
  return (
    <>
    <h3 className = "text-center mb-4">{props.assessment.patient.first_name} {props.assessment.patient.last_name}</h3>
      <Table bordered >
      <tbody>
      <tr>
          <th scope="row">Time</th>
          <td>{props.assessment.time}</td>
        </tr>
      <tr>
          <th scope="row">Mental Status</th>
          <td>{props.assessment.mental_status}</td>
        </tr>
        <tr>
          <th scope="row">Pupil Response</th>
          <td>{props.assessment.pupil_response}</td>
        </tr>
        <tr>
          <th scope="row">Heart Sounds</th>
          <td>{props.assessment.heart_sounds}</td>
        </tr>
        <tr>
          <th scope="row">Breath Sounds</th>
          <td>{props.assessment.breath_sounds}</td>
        </tr>
        <tr>
          <th scope="row">Edema</th>
          <td>{props.assessment.edema}</td>
        </tr>
        <tr>
          <th scope="row">Oxygen Rate</th>
          <td>{props.assessment.oxygen_rate}</td>
        </tr>
        <tr>
          <th scope="row">Bowel Sounds</th>
          <td>{props.assessment.bowel_sounds}</td>
        </tr>
        <tr>
          <th scope="row">NPO</th>
          <td>{props.assessment.npo}</td>
        </tr>
        <tr>
          <th scope="row">Last BM</th>
          <td>{props.assessment.last_bowel_movement}</td>
        </tr>
        <tr>
          <th scope="row">Urine Color</th>
          <td>{props.assessment.urine_color}</td>
        </tr>
        <tr>
          <th scope="row">Urine Odor</th>
          <td>{props.assessment.urine_odor}</td>
        </tr>
        <tr>
          <th scope="row">Urine Amount</th>
          <td>{props.assessment.urine_amount}</td>
        </tr>
      </tbody>
    </Table>
    <AssessmentEditForm assessment={props.assessment} {...props} />
    </>
  )
}

export default AssessmentCard
