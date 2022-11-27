import React from "react";
import DropdownHeader from "../../component/Dropdown/DropdownHeader";
import ModalHeader from "../../component/Modal/ModalHeader/ModalHeader";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";
type Props = {
  title?: string;
};

export default function HeaderPage({ title }: Props) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "#ffffff",
        borderBottom: "1px solid #cccccc",
        zIndex: 10,
      }}
    >
      <div
        className="m-auto"
        style={{ height: "80px", padding: "0 26px 0 48px" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <NavLink to="/">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "80px" }}
            >
              <div className="show-under-768px d-none">
                <img
                  style={{ height: "33px", cursor: "pointer" }}
                  src="/img/home/logo.png"
                  alt="..."
                />
              </div>
              <div className="hidden-under-768px">
                <img
                  style={{ height: "33px", cursor: "pointer" }}
                  src="/img/home/logo-text.png"
                  alt="..."
                />
              </div>
            </div>
          </NavLink>
          <ModalHeader />
          <div className="singin-singout">
            <div className="location d-flex justify-content-between align-items-center">
              <div style={{ width: 1, height: 0 }}></div>
              <button
                className="hidden-under-768px btn-BAhost-globe btn rounded-pill text-dark"
                style={{
                  fontSize: "14px",
                  outline: "none",
                  height: "44px",
                  padding: "0 15px",
                }}
              >
                Trở thành chủ nhà
              </button>
              <button
                className="hidden-under-768px btn-BAhost-globe btn rounded-pill text-dark"
                style={{ outline: "none", height: "44px", width: "44px" }}
              >
                <i className="fa-solid fa-globe"></i>
              </button>
              <DropdownHeader />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
