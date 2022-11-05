import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DatePicker } from "antd";
import { useAppDispatch } from "../../../redux/example/hooks";
import { getAdminUserInfoApi } from "../../../redux/reducer/manageAdminUserReducer";

function ModalAddAdmin() {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
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
      birthday: "",
      avatar: null,
      gender: true,
      role: "ADMIN"
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
      name: Yup.string().required("Tên của bạn đang trống"),
      phone: Yup.string()
        .required("SĐT đang trống")
        .matches(
          /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/,
          "Số điện thoại không đúng định dạng"
        ),
      birthday: Yup.string().required("Sinh nhật của bạn đang trống"),
    }),
    onSubmit: (values) => {
      dispatch(getAdminUserInfoApi(values))
    },
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow} className="my-5">
        Add admin
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <form className="container my-5" onSubmit={frm.handleSubmit}>
            <div className="sign_up" style={{borderRadius:"20px"}}>
              <div className="sign_up_right w-100 overflow-hidden" style={{borderRadius:"20px"}}>
                <div className="bg_cover d-flex flex-column align-items-center justify-content-center" style={{borderRadius:"20px"}}>
                  <h2>THÊM QUẢN TRỊ VIÊN</h2>
                  <div className="signup_input d-flex flex-column  align-items-start">
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

                    <input
                      type="text"
                      id="birthday"
                      placeholder="Sinh nhật"
                      className="signup_email_inp"
                      onChange={frm.handleChange}
                      onBlur={frm.handleBlur}
                    />
                    <span className="text-danger">{frm.errors.birthday}</span>
                  </div>
                  <div className="footer-modal">
                    <Button variant="primary mx-1" type="submit">Thêm</Button>
                    
                    <Button variant="secondary mx-1" onClick={handleClose} >
                      Hủy
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalAddAdmin;
