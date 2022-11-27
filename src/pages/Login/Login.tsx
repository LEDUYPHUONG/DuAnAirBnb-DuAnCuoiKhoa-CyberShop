import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import FooterPage from "../../component/Footer/FooterPage";
import HeaderPage from "../../component/Header/HeaderPage";
import { loginApi } from "../../redux/reducer/userReducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/configStore";

export default function Login() {
  const dispatch: AppDispatch = useDispatch();
  const [type, setType] = useState("password");
  const handleActionPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email đang trống")
        .email("Email không đúng định dạng"),
      password: Yup.string().required("Mật khẩu đang trống"),
    }),
    onSubmit: (values) => {
      dispatch(loginApi(values));
      // console.log(values);
    },
  });

  return (
    <>
      <HeaderPage />
      <form className="container" onSubmit={frm.handleSubmit}>
        <div className="responsive-signin-right sign_in d-flex">
          <div className="sign_in_left"></div>
          <div className="sign_in_right">
            <div className="bg_cover d-flex flex-column align-items-center justify-content-center">
              <h2>HELLO, WE'RE LOGIN</h2>
              <div className="responsive-input-signin-991px login_input d-flex flex-column  align-items-center">
                <input
                  type="text"
                  id="email"
                  placeholder="Email đăng nhập"
                  className="email_inp w-100"
                  onChange={frm.handleChange}
                  onBlur={frm.handleBlur}
                />
                <span className="text-danger">{frm.errors.email}</span>
                <div className="d-flex w-100">
                  <input
                    type={type}
                    id="password"
                    placeholder="Mật khẩu"
                    className="password_inp w-100"
                    maxLength={35}
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  <i
                    className="bi bi-eye"
                    onMouseDown={handleActionPassword}
                    onMouseUp={handleActionPassword}
                  ></i>
                </div>
                <span className="text-danger">{frm.errors.password}</span>
              </div>
              <div className="action_btn d-flex flex-column align-items-center">
                <div className="d-flex">
                  <button className="login_btn" type="submit" id="login_btn">
                    Đăng nhập
                    <i className="fa-solid fa-door-open"></i>
                  </button>
                  <div
                    className="spinner-border text-primary"
                    role="status"
                    id="spinner"
                    style={{ width: 25, height: 25, display: "none" }}
                  ></div>
                </div>
              </div>
              <span className="navigate_to_signup">
                Bạn chưa có tài khoản?
                <NavLink className="signin_navigate" to={"/signup"}>
                  Đăng ký ngay
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </form>
      <FooterPage />
    </>
  );
}
