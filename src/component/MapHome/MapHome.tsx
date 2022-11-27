import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import HeaderPage from "../Header/HeaderPage";

export default function MapHome() {
  return (
    <div className="vw-100 vh-100">
      <HeaderPage />
      <div>
        <iframe
          className="w-100"
          style={{ height: "calc(100vh - 98px)", border: 0, marginTop: "80px" }}
          title="Map demo"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1125985.4022361215!2d106.75118808994623!3d10.894440694941805!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1667536336616!5m2!1svi!2s"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        className="show-map d-flex justify-content-between"
        style={{
          position: "fixed",
          left: "0px",
          bottom: "60px",
          width: "100%",
          height: "50px",
        }}
      >
        <div style={{ width: "1px", height: "0px" }}></div>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div
            className="bg-dark text-white text-center"
            style={{
              cursor: "pointer",
              width: "200px",
              height: "50px",
              lineHeight: "50px",
              border: "none",
              borderRadius: "50px",
            }}
          >
            Hiện thị danh sách <i className="fa-solid fa-list-ul"></i>
          </div>
        </NavLink>
        <div style={{ width: "1px", height: "0px" }}></div>
      </div>
    </div>
  );
}
