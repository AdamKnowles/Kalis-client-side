import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import './index.css'
import KalisApp from './components/KalisApp'
import 'bootstrap/dist/css/bootstrap.css'; 

ReactDOM.render(
  <Router>
      <KalisApp />
  </Router>
  , document.getElementById('root'))
