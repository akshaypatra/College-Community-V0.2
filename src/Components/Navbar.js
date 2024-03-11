import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          College Community
        </a>
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
            <a className="nav-link " aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/">
              Connect
            </a>
            <a className="nav-link" href="/">
              Study Material
            </a>
            <a className="nav-link " href="/" >
              Help & Support
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
