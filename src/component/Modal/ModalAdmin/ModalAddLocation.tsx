import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAppDispatch } from "../../../redux/example/hooks";
import { postLocationAdminApi } from "../../../redux/reducer/adminLocationReducer";

function ModalAddLocation() {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      id: 0,
      tenViTri: "",
      tinhThanh: "",
      quocGia: "",
      hinhAnh: "",
    },
    validationSchema: Yup.object().shape({
      id: Yup.number()
        .min(1,'ID đang trống')
        .required("ID đang trống"),
      tenViTri: Yup.string()
        .required("Tên vị trí đang trống"),
      tinhThanh: Yup.string()
        .required("Tỉnh thành đang trống"),
      quocGia: Yup.string()
        .required("Quốc gia đang trống"),
      hinhAnh: Yup.string()
        .required("Hình ảnh đang trống"),
    }),
    onSubmit: (values) => {
      dispatch(postLocationAdminApi(values))
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
          <form className="p-3" onSubmit={formik.handleSubmit}>
            <div className="p-3 bg-dark shadow">
              <h2 className="text-center text-light pb-2">Add location</h2>
              <div className="signup_input d-flex flex-column align-items-start">
                
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">ID</span>
                  <input 
                    className="form-control"
                    type="text"
                    id="id"
                    placeholder="Id vị trí"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <span className="text-danger mb-3">{formik.errors.id}</span>

                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">Location</span>
                  <input 
                    className="form-control"
                    type="text"
                    id="tenViTri"
                    placeholder="Tên vị trí"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <span className="text-danger mb-3">{formik.errors.tenViTri}</span>

                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">Province</span>
                  <input 
                    className="form-control"
                    type="text"
                    id="tinhThanh"
                    placeholder="Tỉnh thành"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <span className="text-danger mb-3">{formik.errors.tinhThanh}</span>

                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">Country</span>
                  <input 
                    className="form-control"
                    type="text"
                    id="quocGia"
                    placeholder="Quốc gia"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <span className="text-danger mb-3">{formik.errors.quocGia}</span>

                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">Image</span>
                  <input 
                    className="form-control"
                    type="text"
                    id="hinhAnh"
                    placeholder="Hình ảnh (để dấu cách nếu chưa có link)"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <span className="text-danger mb-3">{formik.errors.hinhAnh}</span>

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
export default ModalAddLocation;
