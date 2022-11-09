import React from "react";
import UserInforItem from "../../component/UserInfor/UserInforItem";
import { NavLink } from "react-router-dom";
import HeaderPage from "../../component/Header/HeaderPage";



export default function Infor() {
  
  return (
    <>
      <div className="infor-main">
        <HeaderPage />
        <UserInforItem />
        <div
          className="d-flex justify-content-around align-items-center"
          style={{
            position: "relative",
            bottom: 0,
            left: 0,
            height: "47px",
            backgroundColor: "rgb(247, 247, 247)",
            border: "1px solid #cccccc",
            width: "100%",
            padding: "16px 48px",
            paddingLeft: "80px",
            paddingRight: "80px",
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
            <div className="px-1">
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
            <NavLink to="">
              <span
                className="text-dark"
                style={{ fontFamily: "Roboto-Regular", fontSize: "14px" }}
              >
                Quyền riêng tư
              </span>
            </NavLink>
            <div className="px-1">
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
            <NavLink to="">
              <span
                className="text-dark"
                style={{ fontFamily: "Roboto-Regular", fontSize: "14px" }}
              >
                Điều khoản
              </span>
            </NavLink>
            <div className="px-1">
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
            <NavLink to="">
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
            <NavLink to="">
              <span className="text-dark" style={{ fontSize: "14px" }}>
                Tiếng Việt (VN)
              </span>
            </NavLink>
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
            <NavLink to="">
              <span className="text-dark" style={{ fontSize: "14px" }}>
                $ USD
              </span>
            </NavLink>
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
            <NavLink to="">
              <span className="text-dark" style={{ fontSize: "14px" }}>
                Hỗ trợ và tài nguyên
              </span>
            </NavLink>
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
            <i className="fa-solid fa-chevron-up"></i>
          </div>
        </div>
      </div>
    </>
  );
}
