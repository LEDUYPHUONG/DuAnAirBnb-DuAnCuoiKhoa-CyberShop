import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DatePicker } from "antd";
import FooterPage from "../../component/Footer/FooterPage";
import HeaderPage from "../../component/Header/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import { signupApi } from "../../redux/reducer/userReducer";
import { SignUpModel } from "../../Model/SignUpModel";
import * as Icon from 'react-bootstrap-icons';

type Props = {};

export default function Login({}: Props) {
  const navigate = useNavigate();
  const dispacth: AppDispatch = useDispatch();
  const [typePW, setTypePW] = useState("password");
  const [type_REPW, setType_REPW] = useState("password");
  const handle_Password_Icon = () => {
    {
      typePW === "password" ? setTypePW("text") : setTypePW("password");
    }
  };
  const handle_Retype_Password_Icon = () => {
    {
      type_REPW === "password"
        ? setType_REPW("text")
        : setType_REPW("password");
    }
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


    onSubmit: (values:any) => {
      dispacth(signupApi(values));

    },
  });

  return (
    <>
      <HeaderPage />
      <form className="container" onSubmit={frm.handleSubmit}>
        <div className="sign_up d-flex">
          <div className="sign_up_left"></div>
          <div className="sign_up_right">
            <div className="bg_cover d-flex flex-column align-items-center justify-content-center">
              <h2>SIGN UP NOW!</h2>
              <div className="signup_input d-flex flex-column  align-items-center">
                <input
                  type="text"
                  id="email"
                  placeholder="Email đăng nhập"
                  className="signup_email_inp"
                  onChange={frm.handleChange}
                  onBlur={frm.handleBlur}
                />
                <span className="text-danger">{frm.errors.email}</span>
                <div className="d-flex">
                  <input
                    type={typePW}
                    id="password"
                    placeholder="Mật khẩu đăng nhập"
                    className="signup_password_inp"
                    maxLength={35}
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  <i
                    className="bi bi-eye"
                    onMouseDown={handle_Password_Icon}
                    onMouseUp={handle_Password_Icon}
                  ></i>
                </div>
                <span className="text-danger">{frm.errors.password}</span>

                <div className="d-flex">
                  <input
                    type={type_REPW}
                    id="retype_password"
                    placeholder="Nhập lại mật khẩu"
                    className="signup_password_inp"
                    maxLength={35}
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  <i
                    className="bi bi-eye"
                    onMouseDown={handle_Retype_Password_Icon}
                    onMouseUp={handle_Retype_Password_Icon}
                  ></i>
                </div>
                <span className="text-danger">
                  {frm.errors.retype_password}
                </span>
                <input
                  type="text"
                  id="name"
                  placeholder="Tên tài khoản"
                  className="signup_email_inp"
                  onChange={frm.handleChange}
                  onBlur={frm.handleBlur}
                />
                <span className="text-danger">{frm.errors.name}</span>
                <input
                  type="text"
                  id="phone"
                  placeholder="Số điện thoại"
                  className="signup_email_inp"
                  onChange={frm.handleChange}
                  onBlur={frm.handleBlur}
                />
                <span className="text-danger">{frm.errors.phone}</span>

                <DatePicker
                  bordered={false}
                  placeholder="Sinh nhật"
                  format="DD/MM/YYYY"
                />
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
