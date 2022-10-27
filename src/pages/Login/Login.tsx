import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

type Props = {};

export default function Login({}: Props) {
  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      //check validation
      email: Yup.string()
        .required("Bạn chưa nhập email này!")
        .email("Email không đúng định dạng"),
      password: Yup.string().required("Bạn vẫn chưa nhập mật khẩu này!"),
    }),
    //values là tên mặc định do formik và yup đặt
    onSubmit: (values) => {},
  });

  return (
    <div className="container">
      <form className="sign_in d-flex" onSubmit={frm.handleSubmit}>
        <div className="sign_in_left"></div>
        <div className="sign_in_right">
          <div className="bg_cover d-flex flex-column align-items-center justify-content-center">
            <h2>HELLO, WE'RE LOGIN</h2>
            <div className="login_input d-flex flex-column  align-items-center">
              <input
                type="text"
                id="email"
                placeholder="Tài khoản"
                className="email_inp"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
                <span className="text-danger">{frm.errors.email}</span>
              <input
                type="password"
                id="password"
                placeholder="Mật khẩu"
                className="password_inp"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
              <span className="text-danger">{frm.errors.password}</span>
            </div>
            <div className="action_btn d-flex flex-column align-items-center">
              <button className="login_btn">
                Đăng nhập
                <i className="fa-solid fa-door-open"></i>
              </button>
              <button className="signin_btn">
                Đăng ký
                <i className="fa-solid fa-user-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
