import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../redux/example/hooks";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  putEditRoomBookedAdminApi,
  RoomBookedModel,
  setArrNgayOLaiAdmin,
} from "../../../redux/reducer/adminReservatiionManageReducer";
import { DatePicker } from "antd";
import moment from "moment";
type Props = {
  item: RoomBookedModel;
};
function ModalInfoBookedRoom({ item }: Props) {
  const { arrNgayOLaiAdmin } = useAppSelector(
    (state) => state.adminReservationManageReducer
  );
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const { RangePicker } = DatePicker;
  const onChangeDate = (date: any, dateString: any) => {
    console.log("datestring", dateString);
    dispatch(setArrNgayOLaiAdmin(dateString));
  };
  const setNgayOLai = () => {
    dispatch(
      setArrNgayOLaiAdmin({
        0: moment(item.ngayDen).format("YYYY-MM-DD"),
        1: moment(item.ngayDi).format("YYYY-MM-DD"),
      })
    );
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: item.id,
      maPhong: item.maPhong,
      soLuongKhach: item.soLuongKhach,
      maNguoiDung: item.maNguoiDung,
      ngayDen: arrNgayOLaiAdmin[0],
      ngayDi: arrNgayOLaiAdmin[1],
    },
    validationSchema: Yup.object().shape({
      maPhong: Yup.number()
        .min(1, "Mã phòng đang trống")
        .required("Mã phòng đang trống"),
      soLuongKhach: Yup.number()
        .min(1, "Số lượng khách đang trống")
        .required("Số lượng khách đang trống"),
      ngayDen: Yup.string().required("Ngày đến đang trống"),
      ngayDi: Yup.string().required("Ngày đi đang trống"),
    }),
    onSubmit: (values) => {
      let text = "Press a button!\nEither OK or Cancel.";
      if (window.confirm(text) == true) {
        text = "You pressed OK!";
        dispatch(putEditRoomBookedAdminApi(values.id, values));
      } else {
        text = "You canceled!";
      }
    },
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          handleShow();
          setNgayOLai();
        }}
        className="mx-2"
      >
        Info
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Body>
          <form className="container my-5 h-100" onSubmit={formik.handleSubmit}>
            <div className="sign_up mt-0 p-3" style={{ borderRadius: "20px" }}>
              <div style={{ borderRadius: "20px" }}>
                <div
                  className="bg_cover d-flex flex-column align-items-center justify-content-center"
                  style={{ borderRadius: "20px" }}
                >
                  <h2 style={{ fontSize: "28px" }}>INFO ROOM</h2>
                  <div className="signup_input d-flex flex-column  align-items-start">
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        ID
                      </span>
                      <input
                        type="number"
                        id="ID"
                        placeholder="ID"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.id}
                        disabled
                      />
                    </div>

                    <span
                      className="text-danger mb-3"
                      style={{ fontSize: "14px" }}
                    >
                      {formik.errors.id}
                    </span>

                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        ID user
                      </span>
                      <input
                        type="number"
                        id="maNguoiDung"
                        placeholder="Mã người dùng"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.maNguoiDung}
                        disabled
                      />
                    </div>

                    <span
                      className="text-danger mb-3"
                      style={{ fontSize: "14px" }}
                    >
                      {formik.errors.maNguoiDung}
                    </span>

                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        ID room
                      </span>
                      <input
                        type="number"
                        id="maPhong"
                        placeholder="Mã phòng"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.maPhong}
                        disabled
                      />
                    </div>
                    <span
                      className="text-danger mb-3"
                      style={{ fontSize: "14px" }}
                    >
                      {formik.errors.maPhong}
                    </span>

                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        Guest
                      </span>
                      <input
                        type="number"
                        id="soLuongKhach"
                        placeholder="Số lượng khách"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.soLuongKhach}
                        disabled
                      />
                    </div>
                    <span
                      className="text-danger mb-3"
                      style={{ fontSize: "14px" }}
                    >
                      {formik.errors.soLuongKhach}
                    </span>

                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        Check in
                      </span>
                      <input
                        type="text"
                        id="ngayDen"
                        placeholder="Ngày đến"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ngayDen}
                        disabled
                      />
                    </div>
                    <span
                      className="text-danger mb-3"
                      style={{ fontSize: "14px" }}
                    >
                      {formik.errors.ngayDen}
                    </span>

                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        Check out
                      </span>
                      <input
                        type="text"
                        id="ngayDi"
                        placeholder="Ngày đi"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ngayDi}
                        disabled
                      />
                    </div>
                    <span
                      className="text-danger mb-3"
                      style={{ fontSize: "14px" }}
                    >
                      {formik.errors.ngayDi}
                    </span>
                  </div>
                  <div className="footer-modal">
                    <Button variant="secondary mx-1" onClick={handleClose}>
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
export default ModalInfoBookedRoom;
