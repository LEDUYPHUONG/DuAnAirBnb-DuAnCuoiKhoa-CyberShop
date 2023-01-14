import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { isAdminLogIn } from "../index";
import DropdownAdmin from "../component/Dropdown/DropdownAdmin";

export default function Admintemplate() {
  const [show, setShow] = useState(false);
  return (
    <div className="container" style={{ position: 'relative'}}>
      <div
        className={show ? "out-admin-page" : "out-admin-page d-none"}
        onClick={() => {
          setShow(!show);
        }}
      ></div>
      <div className="row">
        <div
          className="dashboard-menu col-lg-3 px-0"
          style={{ borderRight: "1px solid #cccccc" }}
        >
          <div>
            <div
              className="Dashboard bg-dark text-white text-end py-3 d-flex justify-content-center align-items-center"
              onClick={() => {
                setShow(!show);
              }}
            >
              <span className="d-none-under-991px"> Dashboard</span>
              <span className="px-3">
                <i className="fa-solid fa-bars"></i>
              </span>
            </div>
            <div
              className={
                show
                  ? "admin-navbar-body"
                  : "admin-navbar-body isHidden-admin-navbar-body"
              }
            >
              <NavLink to="/admin/usermanage" className="text-decoration-none">
                <button
                  className="btn btn-primary mt-1 w-100 rounded-0 text-start"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <i className="fa-regular fa-user border rounded-circle p-2 bg-transparent"></i>
                  <span className="ps-2 bg-transparent">User</span>
                </button>
              </NavLink>
              <NavLink
                to="/admin/locationinfomanage"
                className="text-decoration-none"
              >
                <button
                  className="btn btn-primary mt-1 w-100 rounded-0 text-start"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <i className="fa-solid fa-location-dot border rounded-circle p-2 bg-transparent"></i>
                  <span className="ps-2 bg-transparent">
                    Location information
                  </span>
                </button>
              </NavLink>
              <NavLink
                to="/admin/roominfomanage"
                className="text-decoration-none"
              >
                <button
                  className="btn btn-primary mt-1 w-100 rounded-0 text-start"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <i className="fa-solid fa-house-user border rounded-circle p-2 bg-transparent"></i>
                  <span className="ps-2 bg-transparent">Room information</span>
                </button>
              </NavLink>
              <NavLink
                to="/admin/reservationmanage"
                className="text-decoration-none"
              >
                <button
                  className="btn btn-primary mt-1 w-100 rounded-0 text-start"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <i className="fa-solid fa-address-book border rounded-circle p-2 bg-transparent"></i>
                  <span className="ps-2 bg-transparent">Reservation</span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-9 px-0">
          <div
            className="text-end"
            style={{
              height: "56px",
              borderBottom: "1px solid #cccccc",
              lineHeight: "54px",
            }}
          >
            <span>Hello, {isAdminLogIn()?.name}</span>
            <DropdownAdmin />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
