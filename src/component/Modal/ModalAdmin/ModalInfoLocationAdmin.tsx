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
function ModalInfoLocationAdmin({item} : Props) {
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
      <Button variant="primary" onClick={handleShow} className='mx-2'>
        Info
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Body>
          <form className="container my-5" onSubmit={formik.handleSubmit}>
            <div>
              <div>
                <div className="shadow p-3">
                  <h2 className="text-center">INFO LOCATION</h2>
                  <div className="signup_input d-flex flex-column  align-items-start">
                    <button
                        className="mb-2 btn btn-light w-100 text-start"
                        type="button"
                        id="id"
                    >
                        ID: {formik.values.id}
                    </button>
                    <button
                        className="mb-2 btn btn-light w-100 text-start"
                        type="button"
                        id="id"
                        >
                        Location: {formik.values.tenViTri}
                    </button>
                    <button
                        className="mb-2 btn btn-light w-100 text-start"
                        type="button"
                        id="id"
                        >
                        Province: {formik.values.tinhThanh}
                    </button>
                    <button
                        className="mb-2 btn btn-light w-100 text-start"
                        type="button"
                        id="id"
                        >
                        Country: {formik.values.quocGia}
                    </button>
                    <div className="mb-3 w-100 text-center " >
                        <img className="rounded-4" style={{width: '350px'}} src={formik.values.hinhAnh} alt="..." />
                    </div>
                  </div>
                  <div className="footer-modal text-center">
                    <Button variant="secondary mx-1" onClick={handleClose} >
                      Cancel
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
export default ModalInfoLocationAdmin;
