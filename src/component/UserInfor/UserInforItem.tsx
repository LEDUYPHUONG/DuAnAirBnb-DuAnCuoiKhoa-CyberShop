import { useFormik } from "formik";
import { values } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/configStore";
import { useAppDispatch } from "../../redux/example/hooks";
import {getProfileRoomApi,getProfileUserApi,ProfileRoomModel} from "../../redux/reducer/profileReducer";
import CarouselInfor from "../UserInfor/CarouselInfor";

export default function UserInforItem () {
  const { arrProfileRoom , arrProfileUser } = useSelector(
    (state: RootState) => state.profileReducer
  );

  const dispatch = useAppDispatch();

  const param = useParams();
  const userid: any = param.iduser


  useEffect(() => {
    // call api
    dispatch(getProfileRoomApi());
    dispatch(getProfileUserApi(userid));

  }, [userid]);
  

  // const renderInfor
  // chuc nang
  const [open, setOpen] = useState(false);
  const [enable, setEnable] = useState(true);
  

  return (
    <div
      className="infor-container"
      style={{ width: "100%", marginTop: "80px" }}
    >
      <div
        className="justify-content-center mb-3"
        style={{ margin: "120px 300px 32px 300px", padding: "0 16px" }}
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
                  <div
                    className="infor-img"
                    style={{
                      width: "128px",
                      height: "128px",
                      position: "relative",
                      borderRadius: "100%",
                    }}
                  >
                    <img
                      src={arrProfileUser.avatar}
                      alt="..."
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                  <div
                    className="infor-editimg"
                    style={{ textAlign: "center" }}
                  >
                    <p
                      className="edit"
                      style={{ textDecoration: "underline",marginTop:8}}
                    >
                      Cập nhật ảnh
                    </p>
                  </div>
                </div>
                <div
                  className="infor-iconservice"
                  style={{ marginBottom: "16px" }}
                >
                  <img
                    src="/img/security.png"
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
                        {arrProfileUser.name} đã xác nhận
                      </h1>
                    </div>
                    <div
                      className="infor-email"
                      style={{ marginBottom: "16px" }}
                    >
                      <div className="d-flex align-items-center p-2">
                        <img
                          src="/img/check.png"
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
                <div className="infor-right-welcome">
                  <div
                    className="infor-right-hello"
                    style={{
                      fontSize: "32px",
                      lineHeight: "36px",
                      marginBottom: 8,
                    }}
                  >
                    <h1 style={{ fontSize: "1em", margin: 0 }}>
                      Xin chào, tôi là {arrProfileUser.name}
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
                    style={{ marginTop: 16, marginBottom: 8 }}
                  >
                    <button
                      style={{
                        border: 0,
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Chỉnh sửa hồ sơ
                    </button>
                  </div>

                  {open && (
                    <div className="border-bottom ">
                      <p
                        style={{
                          fontSize: 16,
                          marginTop: 20,
                          marginBottom: 10,
                        }}
                      >
                        Tên cá nhân
                      </p>
                      
                      <div className="input-group mb-3">
                        <input
                          onChange={(e) => {
                            if (e.target.value) setEnable(false);
                          }}
                          type="text"
                          className="form-control"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          style={{ borderRadius: 5! }}
                          defaultValue={arrProfileUser.name}
                        />
                      </div>
                      <p
                        style={{
                          fontSize: 16,
                          marginTop: 20,
                          marginBottom: 10,
                        }}
                      >
                        Email
                      </p>
                      <div className="input-group mb-3">
                        <input
                          onChange={(e) => {
                            if (e.target.value) setEnable(false);
                          }}
                          type="text"
                          className="form-control"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          style={{ borderRadius: 5! }}
                          defaultValue={arrProfileUser.email}
                        />
                      </div>

                      <p
                        style={{
                          fontSize: 16,
                          marginTop: 20,
                          marginBottom: 10,
                        }}
                      >
                        Số điện thoại
                      </p>
                      <div className="input-group" style={{ marginBottom: 32 }}>
                        <input
                          onChange={(e) => {
                            if (e.target.value) setEnable(false);
                          }}
                          type="nu"
                          className="form-control"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          style={{ borderRadius: 5! }}
                          defaultValue={arrProfileUser.phone}
                        />
                      </div>

                      <p
                        style={{
                          fontSize: 16,
                          marginTop: 20,
                          marginBottom: 10,
                        }}
                      >
                        Ngày sinh
                      </p>
                      <div className="input-group" style={{ marginBottom: 32 }}>
                        <input
                          onChange={(e) => {
                            if (e.target.value) setEnable(false);
                          }}
                          type="nu"
                          className="form-control"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          style={{ borderRadius: 5! }}
                          defaultValue={arrProfileUser.birthday}
                        />
                      </div>

                      <div
                        className="d-flex justify-content-between"
                        style={{ marginBottom: 20 }}
                      >
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="btn btn-secondary text-decoration-underline"
                          style={{ padding: "10px 20px" }}
                        >
                          Hủy
                        </button>
                        <button
                          type="button"
                          disabled={enable}
                          className="btn btn-dark"
                          style={{ fontSize: 20, padding: "10px 20px" }}
                        >
                          Lưu
                        </button>
                      </div>
                    </div>
                  )}

                  <div
                    className="infor-myroom"
                    style={{
                      fontSize: "32px",
                      lineHeight: "36px",
                      marginBottom: 16,
                      marginTop: 16,
                      fontWeight: 700,
                    }}
                  >
                    <h1 style={{ fontSize: "1em", margin: 0 }}>
                      Phòng đã thuê
                    </h1>
                  </div>
                </div>
                {arrProfileRoom.map((prod: ProfileRoomModel, index: number) => (
                  <div key={index}>{CarouselInfor({ product: prod })}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
