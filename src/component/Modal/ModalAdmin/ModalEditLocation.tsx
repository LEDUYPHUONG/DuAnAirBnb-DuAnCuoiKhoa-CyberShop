import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAppDispatch } from "../../../redux/example/hooks";
import { LocationModel, putLocationAdminApi } from "../../../redux/reducer/adminLocationReducer";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

type Props = {
    item: LocationModel
}
function ModalEditLocation({item} : Props) {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch()

  const formik = useFormik({
    enableReinitialize : true,
    initialValues: {
      id: item.id,
      tenViTri: item.tenViTri,
      tinhThanh: item.tinhThanh,
      quocGia: item.quocGia,
      hinhAnh: item.hinhAnh,
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
        let text = "Press a button!\nEither OK or Cancel.";
        if (window.confirm(text) == true) {
            text = "You pressed OK!";
            dispatch(putLocationAdminApi(values.id,values))
        } else {
            text = "You canceled!";
        }
    },
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow} className='mx-2'>
        Sửa
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
                  <h2>SỬA VỊ TRÍ</h2>
                  <div className="signup_input d-flex flex-column  align-items-start">
                   
                    
                    <Popup 
                        trigger={
                            <button
                            className="btn btn-light w-100 text-start"
                            type="button"
                            id="id"
                            >
                                {formik.values.id}
                            </button>
                        } 
                        position="top center"
                        >
                        <div>This field cannot be changed!</div>
                    </Popup>
                    <span className="text-danger">{formik.errors.id}</span>
                    <input
                      type="text"
                      id="tenViTri"
                      placeholder="Tên vị trí"
                      className="signup_email_inp"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.tenViTri}
                    />
                    <span className="text-danger">{formik.errors.tenViTri}</span>
                    <input
                      type="text"
                      id="tinhThanh"
                      placeholder="Tỉnh thành"
                      className="signup_email_inp"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.tinhThanh}
                    />
                    <span className="text-danger">{formik.errors.tinhThanh}</span>
                    <input
                      type="text"
                      id="quocGia"
                      placeholder="Quốc gia"
                      className="signup_email_inp"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.quocGia}
                    />
                    <span className="text-danger">{formik.errors.quocGia}</span>
                    <input
                      type="text"
                      id="hinhAnh"
                      placeholder="Hình ảnh"
                      className="signup_email_inp"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.hinhAnh}
                    />
                    <span className="text-danger">{formik.errors.hinhAnh}</span>
                  </div>
                  <div className="footer-modal">
                    <Button variant="primary mx-1" type="submit">Sửa</Button>
                    
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
export default ModalEditLocation;
