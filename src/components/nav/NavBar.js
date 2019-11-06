import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";

const NavBar = props => {
  const { isAuthenticated, logout } = useSimpleAuth();

  return (
    <nav className="navbar navbar-light light-blue flex-md-nowrap">
      <div style={{ fontSize: "2em", marginLeft: "1em", color: "#068484"}}>
        <strong>Kalis</strong>
      </div>
      <ul className="nav nav-pills nav-fill">
        {isAuthenticated() ? (
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Global Patient List
          </Link>
        </li>
        ) : null }
        {isAuthenticated() ? (
        <li className="nav-item">
          <Link className="nav-link" to="/mypatients">
            My Patients
          </Link>
        </li>
        ) : null }
        {isAuthenticated() ? (
          <li className="nav-item">
            <Link className="nav-link"
            onClick={() => localStorage.clear()} to="/login">
              Logout
            </Link>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
    );
  };

export default NavBar;