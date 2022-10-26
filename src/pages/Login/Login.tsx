import React from "react";

type Props = {};

export default function Login({}: Props) {
  return (
    <div className="container">
      <div className="sign_in d-flex">
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
              />
              <input
                type="password"
                id="password"
                placeholder="Mật khẩu"
                className="password_inp"
              />
            </div>
            <div className="action_btn d-flex flex-column align-items-center">
              <button className="login_btn">Đăng nhập
              <i className="fa-solid fa-door-open"></i></button>
              <button className="signin_btn">Đăng ký
              <i className="fa-solid fa-user-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
