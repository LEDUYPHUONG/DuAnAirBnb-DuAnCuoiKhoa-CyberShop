import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAppDispatch } from "../../../redux/example/hooks";
import { getAdminUserInfoApi } from "../../../redux/reducer/manageAdminUserReducer";
import { DatePicker } from "antd";
import moment from "moment";

function ModalAddLocation() {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch()
  const [typePW, setTypePW] = useState("password");
  const handle_Password_Icon = () => {
    typePW === "password" ? setTypePW("text") : setTypePW("password");
  };

  const formik = useFormik({
    initialValues: {
      id: 0,
      tenViTri: "",
      tinhThanh: "",
      quocGia: "",
      hinhAnh: "",
    },
    validationSchema: Yup.object().shape({
      id: Yup.string()
        .required("ID đang trống"),
      tenViTri: Yup.string()
        .required("tenViTri đang trống"),
      tinhThanh: Yup.string()
        .required("tinhThanh đang trống"),
      quocGia: Yup.string()
        .required("quocGia đang trống"),
      hinhAnh: Yup.string()
        .required("hinhAnh đang trống"),
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
        Add Location
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Body>
          <form className="container my-5" onSubmit={formik.handleSubmit}>
            <div className="sign_up" style={{borderRadius:"20px"}}>
              <div className="sign_up_right w-100 overflow-hidden" style={{borderRadius:"20px"}}>
                <div className="bg_cover d-flex flex-column align-items-center justify-content-center" style={{borderRadius:"20px"}}>
                  <h2>THÊM VỊ TRÍ</h2>
                  <div className="signup_input d-flex flex-column  align-items-start">
                    <input
                      type="text"
                      id="id"
                      placeholder="Id vị trí"
                      className="signup_email_inp"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger">{formik.errors.id}</span>
                    <input
                      type="text"
                      id="tenViTri"
                      placeholder="Tên vị trí"
                      className="signup_email_inp"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger">{formik.errors.tenViTri}</span>
                    <input
                      type="text"
                      id="tinhThanh"
                      placeholder="Tỉnh thành"
                      className="signup_email_inp"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger">{formik.errors.tinhThanh}</span>
                    <input
                      type="text"
                      id="quocGia"
                      placeholder="Quốc gia"
                      className="signup_email_inp"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger">{formik.errors.quocGia}</span>
                    <input
                      type="text"
                      id="id"
                      placeholder="Hình ảnh"
                      className="signup_email_inp"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger">{formik.errors.hinhAnh}</span>
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
export default ModalAddLocation;
