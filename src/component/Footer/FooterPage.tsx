import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  title?: string;
};

export default function FooterPage({ title }: Props) {
  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        height: "47px",
        background: "#ffffff",
        border: "1px solid #cccccc",
        width: "100%",
        padding: "16px 48px",
        fontSize: "16px",
        lineHeight: "16px",
        zIndex: 10,
      }}
    >
      <div
        className="footer-left d-flex"
        style={{ fontFamily: "Roboto-Regular", fontSize: "14px" }}
      >
        © 2022 Airbnb, Inc.
        <div className="hidden-under-768px px-1">
          <i
            style={{
              fontSize: "2px",
              lineHeight: "20px",
              verticalAlign: "top",
              padding: "0 5px",
            }}
            className="fa-solid fa-circle"
          ></i>
        </div>
        <NavLink
          to=""
          className="hidden-under-768px"
          style={{ textDecoration: "none" }}
        >
          <span
            className="text-dark"
            style={{ fontFamily: "Roboto-Regular", fontSize: "14px" }}
          >
            Quyền riêng tư
          </span>
        </NavLink>
        <div className=" hidden-under-768px px-1">
          <i
            style={{
              fontSize: "2px",
              lineHeight: "20px",
              verticalAlign: "top",
              padding: "0 5px",
            }}
            className="fa-solid fa-circle"
          ></i>
        </div>
        <NavLink
          to=""
          className="hidden-under-768px"
          style={{ textDecoration: "none" }}
        >
          <span
            className="text-dark"
            style={{ fontFamily: "Roboto-Regular", fontSize: "14px" }}
          >
            Điều khoản
          </span>
        </NavLink>
        <div className="hidden-under-768px px-1">
          <i
            style={{
              fontSize: "2px",
              lineHeight: "20px",
              verticalAlign: "top",
              padding: "0 5px",
            }}
            className="fa-solid fa-circle"
          ></i>
        </div>
        <NavLink
          className="hidden-under-768px"
          to=""
          style={{ textDecoration: "none" }}
        >
          <span
            className="text-dark"
            style={{ fontFamily: "Roboto-Regular", fontSize: "14px" }}
          >
            Sơ đồ trang web
          </span>
        </NavLink>
      </div>
      <div className="footer-right d-flex">
        <i className="fa-solid fa-globe"></i>
        <div className="px-1">
          <i
            style={{
              fontSize: "2px",
              lineHeight: "20px",
              verticalAlign: "top",
              padding: "0 5px",
            }}
          ></i>
        </div>
        <NavLink
          className="hidden-under-576px"
          to=""
          style={{ textDecoration: "none" }}
        >
          <span className="text-dark" style={{ fontSize: "14px" }}>
            Tiếng Việt (VN)
          </span>
        </NavLink>
        <div className="hidden-under-576px px-1">
          <i
            style={{
              fontSize: "2px",
              lineHeight: "20px",
              verticalAlign: "top",
              padding: "0 5px",
            }}
          ></i>
        </div>
        <NavLink
          className="hidden-under-576px"
          to=""
          style={{ textDecoration: "none" }}
        >
          <span className="text-dark" style={{ fontSize: "14px" }}>
            $ USD
          </span>
        </NavLink>
        <div className="hidden-under-576px px-1">
          <i
            style={{
              fontSize: "2px",
              lineHeight: "20px",
              verticalAlign: "top",
              padding: "0 5px",
            }}
          ></i>
        </div>
        <NavLink
          to=""
          className="hidden-under-768px"
          style={{ textDecoration: "none" }}
        >
          <span className="text-dark" style={{ fontSize: "14px" }}>
            Hỗ trợ và tài nguyên
          </span>
        </NavLink>
        <div className="hidden-under-576px px-1">
          <i
            style={{
              fontSize: "2px",
              lineHeight: "20px",
              verticalAlign: "top",
              padding: "0 5px",
            }}
          ></i>
        </div>
        <i className="fa-solid fa-chevron-up"></i>
      </div>
    </div>
  );
}
