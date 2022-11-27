import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAppDispatch } from "../../../redux/example/hooks";
import {
  LocationModel,
  putLocationAdminApi,
} from "../../../redux/reducer/adminLocationReducer";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

type Props = {
  item: LocationModel;
};
function ModalEditLocation({ item }: Props) {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: item.id,
      tenViTri: item.tenViTri,
      tinhThanh: item.tinhThanh,
      quocGia: item.quocGia,
      hinhAnh: item.hinhAnh,
    },
    validationSchema: Yup.object().shape({
      id: Yup.number().min(1, "ID đang trống").required("ID đang trống"),
      tenViTri: Yup.string().required("Tên vị trí đang trống"),
      tinhThanh: Yup.string().required("Tỉnh thành đang trống"),
      quocGia: Yup.string().required("Quốc gia đang trống"),
      hinhAnh: Yup.string().required("Hình ảnh đang trống"),
    }),
    onSubmit: (values) => {
      let text = "Press a button!\nEither OK or Cancel.";
      if (window.confirm(text) === true) {
        text = "You pressed OK!";
        dispatch(putLocationAdminApi(values.id, values));
      } else {
        text = "You canceled!";
      }
    },
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow} className="mx-2">
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Body>
          <form className="p-3" onSubmit={formik.handleSubmit}>
            <div className="p-3 bg-dark shadow">
              <h2 className="text-center text-light pb-2">Edit location</h2>
              <div className="signup_input d-flex flex-column align-items-start">
                <Popup
                  trigger={
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        ID
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        id="id"
                        placeholder="Id vị trí"
                        defaultValue={formik.values.id}
                        disabled
                      />
                    </div>
                  }
                  position="top center"
                >
                  <div>This field cannot be changed!</div>
                </Popup>
                <span className="text-danger mb-3">{formik.errors.id}</span>

                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    Location
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    id="tenViTri"
                    placeholder="Tên vị trí"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tenViTri}
                  />
                </div>
                <span className="text-danger mb-3">
                  {formik.errors.tenViTri}
                </span>

                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    Province
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    id="tinhThanh"
                    placeholder="Tỉnh thành"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tinhThanh}
                  />
                </div>
                <span className="text-danger mb-3">
                  {formik.errors.tinhThanh}
                </span>

                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    Country
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    id="quocGia"
                    placeholder="Quốc gia"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.quocGia}
                  />
                </div>
                <span className="text-danger mb-3">
                  {formik.errors.quocGia}
                </span>

                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    Image
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    id="hinhAnh"
                    placeholder="Hình ảnh"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.hinhAnh}
                  />
                </div>
                <span className="text-danger mb-3">
                  {formik.errors.hinhAnh}
                </span>
              </div>
              <div className="footer-modal mt-3 text-center">
                <Button variant="primary mx-1" type="submit">
                  Edit
                </Button>

                <Button variant="secondary mx-1" onClick={handleClose}>
                  Close
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalEditLocation;
