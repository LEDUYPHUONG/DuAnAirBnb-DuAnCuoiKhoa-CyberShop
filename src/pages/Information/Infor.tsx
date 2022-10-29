import React from "react";
import UserInforItem from "../../component/UserInfor/UserInforItem";
import { NavLink } from "react-router-dom";

type Props = {
  title?: string;
};

export default function Infor({ title }: Props) {
  
  return (
    <>
      <div className="infor-main">
        <div
          className="header-container"
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
          <div className="header-top m-auto px-5" style={{ height: "80px" }}>
            <div
              className="header d-flex justify-content-around align-items-center"
              style={{ paddingRight: "80px", paddingLeft: "80px" }}
            >
              <div
                className="header_logo d-flex justify-content-center align-items-center"
                style={{ height: "80px" }}
              >
                <div className="header_logo d-none">
                  <img
                    style={{ height: "33px", cursor: "pointer" }}
                    src="/img/home/logo.png"
                    alt="..."
                  />
                </div>
                <div className="header_logo-text d-block">
                  <img
                    style={{ height: "33px", cursor: "pointer" }}
                    src="/img/home/logo-text.png"
                    alt="..."
                  />
                </div>
              </div>
              <div className="order-bar rounded-pill"></div>
              <div className="singin-singout">
                <div className="location d-flex justify-content-between align-items-center p-2">
                  <div style={{ width: 1, height: 0 }}></div>
                  <button
                    className="btn text-dark p-0"
                    style={{ fontSize: "14px" }}
                  >
                    Trở thành chủ nhà
                  </button>
                  <button className="btn text-dark">
                    <i className="fa-solid fa-globe"></i>
                  </button>
                  <button
                    className="btn rounded-pill d-flex justify-content-between align-items-center"
                    style={{ border: "1px solid rgba(204, 204, 204, 0.5)" }}
                  >
                    <i className="fa-solid fa-bars pe-3 text-dark"></i>
                    <i
                      className="fa-solid fa-circle-user text-dark"
                      style={{
                        width: 30,
                        height: 30,
                        lineHeight: "30px",
                        fontSize: 30,
                      }}
                    ></i>
                  </button>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
