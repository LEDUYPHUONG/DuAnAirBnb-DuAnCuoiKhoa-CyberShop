import React from "react";
import UserInforItem from "../../component/UserInfor/UserInforItem";
import { NavLink } from "react-router-dom";
import { Row } from "antd";

type Props = {
  title?: string;
};

export default function Infor({ title }: Props) {
  return (
    <>
      <div className="infor-main">
        <div
          className="infor-header-container"
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
          <div className="infor-header-top" style={{ height: "80px" }}>
            <div
              className="infor-header d-flex justify-content-around align-items-center"
              style={{ paddingRight: "80px", paddingLeft: "80px" }}
            >
              <div
                className="infor-header_logo d-flex justify-content-center align-items-center"
                style={{ height: "80px" }}
              >
                <div className="infor-header_logo d-none">
                  <img
                    style={{ height: "33px", cursor: "pointer" }}
                    src="/img/home/logo.png"
                    alt="..."
                  />
                </div>
                <div className="infor-header_logo-text d-block">
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
          className="infor-footer border-top"
          style={{ backgroundColor: "rgb(247, 247, 247)" }}
        >
          <div
            className="infor-footer-box"
            style={{ padding: "0 80px", margin: "0 230px" }}
          >
            <div
              className="infor-footer-top d-flex"
              style={{ padding: "48px 0", flexDirection: "row" }}
            >
              <div className="infor-list1 w-25">
                <h3 style={{ fontSize: "unset" }}>Hỗ trợ</h3>
                <div className="mt-3 mb-0">Trung tâm trợ giúp</div>
                <div className="mt-3 mb-0">AirCover</div>
                <div className="mt-3 mb-0">Thông tin an toàn</div>
                <div className="mt-3 mb-0">Hỗ trợ người khuyết tật</div>
                <div className="mt-3 mb-0">Các tùy chọn hủy</div>
                <div className="mt-3 mb-0">
                  Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi
                </div>
                <div className="mt-3 mb-0">Báo cáo lo ngại của hàng xóm</div>
              </div>

              <div className="infor-list2 w-25">
                <h3 style={{ fontSize: "unset", margin: 0 }}>Cộng đồng</h3>
                <div className="mt-3 mb-0">Airbnb.org: nhà ở cứu trợ</div>
                <div className="mt-3 mb-0">Hỗ trợ dân tị nạn Afghanistan</div>
                <div className="mt-3 mb-0">Chống phân biệt đối xử</div>
              </div>

              <div className="infor-list3 w-25">
                <h3 style={{ fontSize: "unset" }}>Đón tiếp khách</h3>
                <div className="mt-3 mb-0">Thử đón tiếp khách</div>
                <div className="mt-3 mb-0">AirCover cho Chủ nhà</div>
                <div className="mt-3 mb-0">Xem tài nguyên đón tiếp khách</div>
                <div className="mt-3 mb-0">Truy cập diễn đàn cộng đồng</div>
                <div className="mt-3 mb-0">Đón tiếp khách có trách nhiệm</div>
              </div>

              <div className="infor-list4 w-25">
                <h3 style={{ fontSize: "unset" }}>Airbnb</h3>
                <div className="mt-3 mb-0">Trang tin tức</div>
                <div className="mt-3 mb-0">Tìm hiểu các tính năng mới</div>
                <div className="mt-3 mb-0">Thư ngỏ từ các nhà sáng lập</div>
                <div className="mt-3 mb-0">Cơ hội nghề nghiệp</div>
                <div className="mt-3 mb-0">Nhà đầu tư</div>
              </div>
            </div>
            <div
              className="footer-bottom d-flex justify-content-between align-items-center border-top"
              style={{
                position: "relative",
                bottom: 0,
                left: 0,
                height: "47px",
                width: "100%",
                fontSize: "16px",
                lineHeight: "16px",
                paddingBottom: "24px",
                paddingTop: "24px",
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
        </div>
      </div>
    </>
  );
}
