import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../redux/example/hooks";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import {
  postRoomBookedAdminApi,
  setNgayDatPhongAdmin,
} from "../../../redux/reducer/adminReservatiionManageReducer";
import { DatePicker } from "antd";
import moment from "moment";

function ModalBookRoom() {
  const { ngayDatPhongAdmin } = useAppSelector(
    (state) => state.adminReservationManageReducer
  );
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const { RangePicker } = DatePicker;
  const onChangeDate = (date: any, dateString: any) => {
    console.log("datestring", dateString);
    dispatch(setNgayDatPhongAdmin(dateString));
  };

  const formik = useFormik({
    initialValues: {
      id: 0,
      maPhong: 0,
      soLuongKhach: 0,
      maNguoiDung: 0,
      ngayDen: ngayDatPhongAdmin[0],
      ngayDi: ngayDatPhongAdmin[1],
    },
    validationSchema: Yup.object().shape({
      maNguoiDung: Yup.number()
        .min(1, "Mã người dùng đang trống")
        .required("Mã người dùng đang trống"),
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
      console.log(values);
    },
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="success"
        onClick={() => {
          handleShow();
          // setNgayDatPhong();
        }}
        className="my-5"
      >
        Book room
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Body>
          <form
            className="container my-5 h-100"
            onSubmit={(form) => {
              formik.handleSubmit(form);
              const { values } = formik;
              let valuesPost = { ...values };
              valuesPost.ngayDen = ngayDatPhongAdmin[0];
              valuesPost.ngayDi = ngayDatPhongAdmin[1];
              console.log("valuesPost", valuesPost);

              dispatch(postRoomBookedAdminApi(valuesPost));
            }}
          >
            <div className="sign_up mt-0 p-3" style={{ borderRadius: "20px" }}>
              <div style={{ borderRadius: "20px" }}>
                <div
                  className="bg_cover d-flex flex-column align-items-center justify-content-center"
                  style={{ borderRadius: "20px" }}
                >
                  <h2 style={{ fontSize: "28px" }}>BOOKING ROOM</h2>
                  <div className="signup_input d-flex flex-column  align-items-start">
                    <Popup
                      trigger={
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
                      }
                      position="top center"
                    >
                      <div>This field cannot be changed!</div>
                    </Popup>
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
                      />
                    </div>
                    <span
                      className="text-danger mb-3"
                      style={{ fontSize: "14px" }}
                    >
                      {formik.errors.soLuongKhach}
                    </span>

                    <RangePicker
                      placeholder={["Check in", " Check out"]}
                      format={["YYYY-MM-DD"]}
                      onChange={(date, dateString) =>
                        onChangeDate(date, dateString)
                      }
                      className="w-100 mb-3 text-danger"
                    />
                  </div>
                  <div className="footer-modal">
                    <Button variant="primary mx-1" type="submit">
                      Confirm
                    </Button>

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
export default ModalBookRoom;
