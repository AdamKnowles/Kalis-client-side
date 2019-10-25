import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";

const NavBar = props => {
  const { isAuthenticated, logout } = useSimpleAuth();

  return (
    <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
      <div style={{ fontSize: "2em", marginLeft: "1em" }}>
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
        
      </ul>
    </nav>
    );
  };

export default NavBar;