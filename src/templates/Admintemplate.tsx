import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import DropdownAdmin from "../component/Dropdown/DropdownAdmin";

export default function Admintemplate() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className={show? "out-admin-page" : "out-admin-page d-none"} onClick={() =>{
        setShow(!show)
      }}></div>
      <div
        className="d-flex"
      >
        <div
          className="admin-header w-100 d-flex justify-content-between align-items-center border-bottom"
          style={{ height: "50px" }}
        >
          <div
            className="Dashboard bg-dark text-white text-end mx-2 py-3 d-flex justify-content-center align-items-center"
            style={{ height: "50px", width: "250px" }}
            onClick={() =>{
              setShow(!show)
            }}
          >
            <span className="d-none-under-991px"> Dashboard</span>
            <span className="px-3">
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="pe-3">Admin</span>
            <DropdownAdmin />
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className={show ? 'ms-2 admin-navbar-body' : 'ms-2 admin-navbar-body isHidden-admin-navbar-body'} style={{width: "250px"}}>
          <NavLink to="/admin/usermanage" className="text-decoration-none">
            <button
              className="btn btn-primary mt-1 w-100 rounded-0 text-start text-center-under-991px"
              style={{ cursor: "pointer" }}
              onClick={() =>{
                setShow(!show)
              }}
            >
              <i className="fa-regular fa-user border rounded-circle p-2 bg-transparent"></i>
              <span className="d-none-under-991px ps-2 bg-transparent">
                User
              </span>
            </button>
          </NavLink>
          <NavLink
            to="/admin/locationinfomanage"
            className="text-decoration-none"
          >
            <button
              className="btn btn-primary mt-1 w-100 rounded-0 text-start text-center-under-991px"
              style={{ cursor: "pointer" }}
              onClick={() =>{
                setShow(!show)
              }}
            >
              <i className="fa-solid fa-location-dot border rounded-circle p-2 bg-transparent"></i>
              <span className="d-none-under-991px ps-2 bg-transparent">
                Location information
              </span>
            </button>
          </NavLink>
          <NavLink
            to="/admin/roominfomanage"
            className="text-decoration-none"
          >
            <button
              className="btn btn-primary mt-1 w-100 rounded-0 text-start text-center-under-991px"
              style={{ cursor: "pointer" }}
              onClick={() =>{
                setShow(!show)
              }}
            >
              <i className="fa-solid fa-house-user border rounded-circle p-2 bg-transparent"></i>
              <span className="d-none-under-991px ps-2 bg-transparent">
                Room information
              </span>
            </button>
          </NavLink>
          <NavLink
            to="/admin/reservationmanage"
            className="text-decoration-none"
          >
            <button
              className="btn btn-primary mt-1 w-100 rounded-0 text-start text-center-under-991px"
              style={{ cursor: "pointer" }}
              onClick={() =>{
                setShow(!show)
              }}
            >
              <i className="fa-solid fa-address-book border rounded-circle p-2 bg-transparent"></i>
              <span className="d-none-under-991px ps-2 bg-transparent">
                Reservation
              </span>
            </button>
          </NavLink>
        </div>
        
        <Outlet />
      </div>
    </div>
  );
}
