import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { useAppDispatch } from "../../redux/example/hooks";
import { getProfileRoomApi, ProfileRoomModel } from "../../redux/reducer/profileReducer";
import CarouselInfor from "../UserInfor/CarouselInfor";

type Props = {
  title?:string;
};

export default function UserInforItem ({title}: Props) {
  
  const {arrProfileRoom} = useSelector((state:RootState) => state.profileReducer)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    // call api
    const actionApi = getProfileRoomApi();
    dispatch(actionApi);
  },[])

// chuc nang
  const [open, setOpen] = useState(false)
  const [enable, setEnable] = useState(true)

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
                      href=""
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
                    src="./img/security.png"
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
                          src="./img/check.png"
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

                  {open && <div className="border-bottom ">

                    <p style={{ fontSize: 16, marginTop: 20, marginBottom: 10 }}>Giới thiệu</p>
                    <div className="input-group" style={{ width: "100%", minHeight: 96, marginBottom: 20 }}>
                      <textarea onChange={e => {
                        if (e.target.value) setEnable(false)
                      }} className="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <p style={{ fontSize: 16, marginTop: 20, marginBottom: 10 }}>Vị trí</p>
                    <div className="input-group mb-3">
                      <input onChange={e => {
                        if (e.target.value) setEnable(false)
                      }} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <p style={{ fontSize: 16, margin: 0 }}>Ngôn ngữ của tôi</p>
                    <p style={{ fontSize: 14, margin: 0, textDecoration: "underline" }} data-bs-toggle="modal" data-bs-target="#exampleModal">Thêm ngôn ngữ khác</p>
                    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ margin: 0 }}></button>
                            <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ fontSize: 16, margin: 0, marginRight: 150 }}>Ngôn ngữ của tôi</h1>
                          </div>
                          <div className="modal-body">
                            <ul className="list-group">
                              <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                                <label className="form-check-label" htmlFor="firstCheckbox">Bahasa Indonesia</label>
                              </li>
                              <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" />
                                <label className="form-check-label" htmlFor="secondCheckbox">Bengali</label>
                              </li>
                              <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                                <label className="form-check-label" htmlFor="thirdCheckbox">English</label>
                              </li>
                              <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                                <label className="form-check-label" htmlFor="thirdCheckbox">Español</label>
                              </li>
                              <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                                <label className="form-check-label" htmlFor="thirdCheckbox">Português</label>
                              </li>
                              <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                                <label className="form-check-label" htmlFor="thirdCheckbox">ภาษาไทย</label>
                              </li>
                              <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                                <label className="form-check-label" htmlFor="thirdCheckbox">中文</label>
                              </li>
                              <li className="list-group-item">
                                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" />
                                <label className="form-check-label" htmlFor="thirdCheckbox">Vietnamese</label>
                              </li>

                            </ul>
                          </div>
                          <div className="modal-footer" style={{ justifyContent: "flex-start" }}>
                            <button type="button" className="btn btn-dark">Hoàn tất</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p style={{ fontSize: 16, marginTop: 20, marginBottom: 10 }}>Công việc</p>
                    <div className="input-group" style={{ marginBottom: 32 }}>
                      <input onChange={e => {
                        if (e.target.value) setEnable(false)
                      }} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="d-flex justify-content-between" style={{ marginBottom: 20 }}>
                      <button type="button" onClick={() => setOpen(false)} className="btn btn-secondary text-decoration-underline" style={{ padding: "6px 10px" }}>Hủy</button>
                      <button type="button" disabled={enable} className="btn btn-dark" style={{ fontSize: 20, padding: "10px 20px" }}>Lưu</button>
                    </div>

                  </div>}

                  <div
                    className="infor-myroom"
                    style={{
                      fontSize: "32px",
                      lineHeight: "36px",
                      marginBottom: 16,
                      marginTop: 16,
                      fontWeight: 700
                    }}
                  >
                    <h1 style={{ fontSize: "1em", margin: 0 }}>
                      Phòng đã thuê
                    </h1>
                  </div>
                </div>
                {arrProfileRoom.map((prod:ProfileRoomModel, index:number) =>
                  <div key={index}>
                    {CarouselInfor({product:prod})}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
