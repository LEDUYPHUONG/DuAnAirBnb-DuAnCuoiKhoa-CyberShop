import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import FooterPage from "../../component/Footer/FooterPage";
import HeaderPage from "../../component/Header/HeaderPage";
import { bookRoomApi } from "../../redux/reducer/roomDetailReducer";
import { loginApi } from "../../redux/reducer/userReducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/configStore";
import * as Icon from 'react-bootstrap-icons';

type Props = {};

export default function Login({}: Props) {
  const navigate = useNavigate();
  const dispatch:AppDispatch = useDispatch()
  const [type, setType] = useState("password");
  const handleActionPassword = () => {
    {
      type === "password" ? setType("text") : setType("password");
    }
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
      console.log(values);
    },
  });

  return (
    <>
      <HeaderPage />
      <form className="container" onSubmit={frm.handleSubmit}>
        <div className="sign_in d-flex">
          <div className="sign_in_left"></div>
          <div className="sign_in_right">
            <div className="bg_cover d-flex flex-column align-items-center justify-content-center">
              <h2>HELLO, WE'RE LOGIN</h2>
              <div className="login_input d-flex flex-column  align-items-center">
                <input
                  type="text"
                  id="email"
                  placeholder="Email đăng nhập"
                  className="email_inp"
                  onChange={frm.handleChange}
                  onBlur={frm.handleBlur}
                />
                <span className="text-danger">{frm.errors.email}</span>
                <div className="d-flex">
                  <input
                    type={type}
                    id="password"
                    placeholder="Mật khẩu"
                    className="password_inp"
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
                <button className="login_btn" type="submit">
                  Đăng nhập
                  <i className="fa-solid fa-door-open"></i>
                </button>
                <span>
                  Bạn chưa có tài khoản?
                  <NavLink className="signin_navigate" to={"/signup"}>
                    Đăng ký ngay
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
