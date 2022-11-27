import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAppDispatch } from "../../../redux/example/hooks";
import { getAdminUserInfoApi } from "../../../redux/reducer/manageAdminUserReducer";
import { DatePicker } from "antd";
import moment from "moment";

function ModalAddAdmin() {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch()
  const [typePW, setTypePW] = useState("password");
  const handle_Password_Icon = () => {
    typePW === "password" ? setTypePW("text") : setTypePW("password");
  };

  const formik = useFormik({
    initialValues: {
      id: 0,
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: moment().format('DD/MM/YYYY'),
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
        keyboard={false}
      >
        <Modal.Body>
          <form className="p-3" onSubmit={formik.handleSubmit}>
            <div className="p-3 bg-dark shadow">
              <h2 className="text-center text-light pb-2">ADD ADMIN</h2>
              <div className="signup_input d-flex flex-column align-items-start">
                
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">Name</span>
                  <input 
                    className="form-control"
                    type="text"
                    id="name"
                    placeholder="Tên tài khoản"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <span className="text-danger mb-3">{formik.errors.name}</span>
                
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">Email</span>
                  <input 
                    className="form-control"
                    type="text"
                    id="email"
                    placeholder="Email đăng nhập"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <span className="text-danger mb-3">{formik.errors.email}</span>

                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">Phone</span>
                  <input 
                    className="form-control"
                    type="text"
                    id="phone"
                    placeholder="Số điện thoại"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <span className="text-danger mb-3">{formik.errors.phone}</span>
                
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">Password</span>
                  <input 
                    className="form-control"
                    type={typePW}
                    id="password"
                    placeholder="Mật khẩu đăng nhập"
                    maxLength={35}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <i
                    className="bi bi-eye input-group-text"
                    onMouseDown={handle_Password_Icon}
                    onMouseUp={handle_Password_Icon}
                  ></i>
                </div>
                <span className="text-danger mb-3">{formik.errors.password}</span>

                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">Birthday</span>
                  <DatePicker
                  bordered={false}
                  className="form-control"
                  placeholder="Sinh nhật"
                  format="DD/MM/YYYY"
                  onChange={(value) => {
                    const newValue =
                      moment(value).format('DD/MM/YYYY');
                      formik.values.birthday = newValue;
                  }}
                  defaultValue={moment(
                    formik.values.birthday,
                    'DD/MM/YYYY',
                  )}
                />
                </div>

                <span className="text-danger">{formik.errors.birthday}</span>
              </div>
              <div className="footer-modal mt-3 text-center">
                <Button variant="primary mx-1" type="submit">Add</Button>
                
                <Button variant="secondary mx-1" onClick={handleClose} >
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalAddAdmin;
