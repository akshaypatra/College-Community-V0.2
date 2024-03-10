import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          College Community
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link " aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link" href="#">
              Connect
            </a>
            <a class="nav-link" href="#">
              Study Material
            </a>
            <a class="nav-link " >
              Help & Support
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
