import React from "react";
import CarouselInfor from "../UserInfor/CarouselInfor";

const UserInforItem = () => {
  return (
    <div
      className="infor-container"
      style={{ width: "100%", marginTop: "80px" }}
    >
      <div
        className="justify-content-center mb-3"
        style={{ margin: "120px 320px 32px 420px", padding: "0 16px" }}
      >
        <div className="justify-content-center mb-3">
          <div
            className="d-flex justify-content-center mb-3"
            style={{ width: "100%", position: "relative" }}
          >
            <div
              className="p-2"
              style={{
                width: "33.33%",
                paddingLeft: "8px",
                paddingRight: "8px",
              }}
            >
              <div
                className="square border border-1"
                style={{
                  maxWidth: "308px",
                  padding: "24px",
                  borderRadius: "12px",
                }}
              >
                <div
                  className="infor-updateimage"
                  style={{ width: "128px", margin: "auto auto 32px auto" }}
                >
                  <div className="infor-img">
                    <img
                      src="https://kientruccb.vn/wp-content/uploads/2020/02/mau-thiet-ke-nha-dep-truyen-cam-hung8.jpg"
                      alt="..."
                      style={{
                        width: "128px",
                        height: "128px",
                        position: "relative",
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                  <div
                    className="infor-editimg"
                    style={{ textAlign: "center" }}
                  >
                    <a
                      href="..."
                      className="edit"
                      style={{ textDecoration: "underline" }}
                    >
                      Cập nhật ảnh
                    </a>
                  </div>
                </div>
                <div
                  className="infor-iconservice"
                  style={{ marginBottom: "16px" }}
                >
                  <img
                    src="./img/home/shieldicon.png"
                    alt="..."
                    style={{
                      height: "40px",
                      widows: "40px",
                      fill: "currentcolor",
                    }}
                  />
                </div>
                <div
                  className="infor-check1"
                  style={{ marginBottom: "8px", fontSize: "18px" }}
                >
                  Xác minh danh tính
                </div>
                <div
                  className="infor-check2"
                  style={{
                    lineHeight: "20px",
                    marginBottom: "16px",
                    fontSize: "16px",
                  }}
                >
                  Xác thực danh tính của bạn với huy hiệu xác minh danh tính.
                </div>
                <div
                  className="infor-challange square border border-dark"
                  style={{
                    padding: "13px 23px",
                    width: "fit-content",
                    textAlign: "center",
                    borderRadius: "8px",
                    border: "1px solid rgba(0,255,0,0.3)",
                  }}
                >
                  Nhận huy hiệu
                </div>
                <div
                  className="infor-line"
                  style={{ marginTop: "32px", marginBottom: "32px" }}
                >
                  <div
                    className="infor-borderline"
                    style={{
                      borderBottom: "1px solid rgb(235,235,235",
                      width: "100%",
                    }}
                  ></div>
                </div>
                <div className="infro-checkemail">
                  <div>
                    <div
                      className="infor-comform"
                      style={{ marginBottom: "24px" }}
                    >
                      <h1
                        style={{
                          fontSize: "22px",
                          lineHeight: "26px",
                          margin: "0",
                        }}
                      >
                        Khang đã xác nhận
                      </h1>
                    </div>
                    <div
                      className="infor-email"
                      style={{ marginBottom: "16px" }}
                    >
                      <div className="d-flex align-items-center p-2">
                        <img
                          src="./img/home/checkicon.png"
                          alt=""
                          style={{ width: "16px", height: "16px" }}
                        />

                        <div style={{ paddingLeft: "10px" }}>Địa chỉ email</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="p-2"
              style={{
                width: "66.67%",
                paddingLeft: "8px",
                paddingRight: "8px",
              }}
            >
              <div
                className="infor-right"
                style={{ margin: "auto", maxWidth: "100%", marginRight: 0 }}
              >
                <div
                  className="infor-right-welcome"
                  style={{ marginBottom: "48px" }}
                >
                  <div
                    className="infor-right-hello"
                    style={{
                      fontSize: "32px",
                      lineHeight: "36px",
                      marginBottom: 8,
                    }}
                  >
                    <h1 style={{ fontSize: "1em", margin: 0 }}>
                      Xin chào, tôi là Khang
                    </h1>
                  </div>
                  <div
                    className="infor-right-status"
                    style={{
                      fontSize: 14,
                      lineHeight: "18px",
                      marginBottom: 8,
                    }}
                  >
                    Bắt đầu tham gia vào 2022
                  </div>
                  <div
                    className="infor-right-editprofile"
                    style={{ marginTop: 16,marginBottom:8 }}
                  >
                    <button
                      style={{
                        border: 0,
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      }}
                    >
                      Chỉnh sửa hồ sơ
                    </button>
                  </div>
                  <div
                    className="infor-myroom"
                    style={{
                      fontSize: "32px",
                      lineHeight: "36px",
                      marginBottom: 8,
                      marginTop:16,
                      fontWeight:700
                    }}
                  >
                    <h1 style={{ fontSize: "1em", margin: 0 }}>
                      Phòng đã thuê
                    </h1>
                  </div>
                </div>
                <CarouselInfor />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInforItem;
