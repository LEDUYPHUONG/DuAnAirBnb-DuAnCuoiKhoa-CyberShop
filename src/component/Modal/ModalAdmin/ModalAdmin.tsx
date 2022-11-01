import React from "react";
import { NavLink } from "react-router-dom";

export default function ModalAdmin() {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
            <span className="pe-3"><i className="fa-solid fa-globe"></i></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <NavLink className="dropdown-item" to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="/login">
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
