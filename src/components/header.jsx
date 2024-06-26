import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-5">
      <div className="container-fluid">
        
        <Link className="navbar-brand" to="/">
          <img src={"/favicon.webp"} className="m-2" alt="Logo" />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                INFINITE-MĚSTA
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                O NÁS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
