import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          College Community
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link " aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/connect">
              Connect
            </Link>
            <Link className="nav-link" to="/studymaterial">
              Study Material
            </Link>
            <Link className="nav-link " to="/helpandsupport" >
              Help & Support
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
