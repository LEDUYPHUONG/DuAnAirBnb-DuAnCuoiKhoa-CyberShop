import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { DatePicker } from "antd";
import FooterPage from "../../component/Footer/FooterPage";
import HeaderPage from "../../component/Header/HeaderPage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/configStore";
import { signupApi } from "../../redux/reducer/userReducer";

export default function SignUp() {
  const dispacth: AppDispatch = useDispatch();
  const [typePW, setTypePW] = useState("password");
  const [type_REPW, setType_REPW] = useState("password");
  const handle_Password_Icon = () => {
    typePW === "password" ? setTypePW("text") : setTypePW("password");
  };
  const handle_Retype_Password_Icon = () => {
    type_REPW === "password" ? setType_REPW("text") : setType_REPW("password");
  };
  const frm = useFormik({
    initialValues: {
      id: 0,
      name: "",
      email: "",
      password: "",
      phone: "",
      retype_password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email đang trống")
        .email("Email không đúng định dạng"),
      password: Yup.string()
        .required("Mật khẩu đang trống")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Mật khẩu phải ít nhất 8 ký tự và có chứa 1 chữ số"
        ),
      retype_password: Yup.string()
        .required("Nhập lại mật khẩu")
        .oneOf(
          [Yup.ref("password"), null],
          "Mật khẩu phải trùng khớp với mật khẩu đã nhập"
        ),
      //oneOf hỗ trợ so sánh với password
      name: Yup.string().required("Tên của bạn đang trống"),
      phone: Yup.string()
        .required("SĐT đang trống")
        .matches(
          /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/,
          "Số điện thoại không đúng định dạng"
        ),
    }),

    onSubmit: (values: any) => {
      dispacth(signupApi(values));
    },
  });

  return (
    <>
      <HeaderPage />
      <form
        className="container responsive-container-signup-768px"
        onSubmit={frm.handleSubmit}
      >
        <div className="sign_up d-flex">
          <div className="sign_up_left"></div>
          <div className="sign_up_right">
            <div className="bg_cover">
              <h2>SIGN UP NOW!</h2>
              <div className="container-form">
                <div className="input-group w-75 m-auto">
                  <span className="input-group-text" id="basic-addon1">
                    Email
                  </span>
                  <input
                    type="text"
                    id="email"
                    placeholder="Email đăng nhập"
                    className="form-control"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                </div>
                <p className="text-danger mb-3 text-center">
                  {frm.errors.email}
                </p>

                <div className="input-group w-75 m-auto">
                  <span className="input-group-text" id="basic-addon1">
                    Name
                  </span>
                  <input
                    type="text"
                    id="name"
                    placeholder="Tên tài khoản"
                    className="form-control"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                </div>
                <p className="text-danger mb-3 text-center">
                  {frm.errors.name}
                </p>

                <div className="input-group w-75 m-auto">
                  <span className="input-group-text" id="basic-addon1">
                    Phone
                  </span>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Số điện thoại"
                    className="form-control"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                </div>
                <p className="text-danger mb-3 text-center">
                  {frm.errors.phone}
                </p>

                <div className="input-group w-75 m-auto">
                  <span className="input-group-text" id="basic-addon1">
                    Password
                  </span>
                  <input
                    type={typePW}
                    id="password"
                    placeholder="Mật khẩu đăng nhập"
                    className="form-control"
                    maxLength={35}
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  <i
                    className="bi bi-eye input-group-text cursor-pointer"
                    onMouseDown={handle_Password_Icon}
                    onMouseUp={handle_Password_Icon}
                  ></i>
                </div>
                <p className="text-danger mb-3 text-center">
                  {frm.errors.password}
                </p>

                <div className="input-group w-75 m-auto">
                  <span className="input-group-text" id="basic-addon1">
                    Confirm
                  </span>
                  <input
                    type={type_REPW}
                    id="retype_password"
                    placeholder="Nhập lại mật khẩu"
                    className="form-control"
                    maxLength={35}
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  <i
                    className="bi bi-eye input-group-text cursor-pointer"
                    onMouseDown={handle_Retype_Password_Icon}
                    onMouseUp={handle_Retype_Password_Icon}
                  ></i>
                </div>
                <p className="text-danger mb-3 text-center">
                  {frm.errors.retype_password}
                </p>

                <div className="input-group mb-3 w-75 m-auto">
                  <span className="input-group-text" id="basic-addon1">
                    Birthday
                  </span>
                  <DatePicker
                    bordered={false}
                    placeholder="Sinh nhật"
                    format="DD/MM/YYYY"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="action_btn d-flex flex-column align-items-center">
                <button className="signin_btn" type="submit">
                  Đăng ký
                  <i className="fa-solid fa-user-plus"></i>
                </button>
                <span>
                  Đã có tài khoản?
                  <NavLink className="login_navigate" to={"/signin"}>
                    Đăng nhập tại đây
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
      <FooterPage />
    </>
  );
}
