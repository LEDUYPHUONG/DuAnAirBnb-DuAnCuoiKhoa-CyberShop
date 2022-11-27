import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAppDispatch } from "../../../redux/example/hooks";
import { Radio } from 'antd';
import { postNewRoomAdminApi } from "../../../redux/reducer/adminRoomInfoManageReducer";

function ModalAddRoom() {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
        id:       0,
        tenPhong: '',
        khach:    0,
        phongNgu: 0,
        giuong:   0,
        phongTam: 0,
        moTa:     '',
        giaTien:  0,
        maViTri:  0,
        hinhAnh:  '',
        mayGiat:  false.toString(),
        banLa:    false.toString(),
        tivi:     false.toString(),
        dieuHoa:  false.toString(),
        wifi:     false.toString(),
        bep:      false.toString(),
        doXe:     false.toString(),
        hoBoi:    false.toString(),
        banUi:    false.toString(),

    },
    validationSchema: Yup.object().shape({
        id: Yup.number()
            .min(1,'ID đang trống')
            .required("ID đang trống"),
        tenPhong: Yup.string()
            .required("Tên phòng đang trống"),
        khach: Yup.number()
            .min(1,'Khách đang trống')
            .required("khách đang trống"),
        phongNgu: Yup.number()
            .min(1,'Phòng ngủ đang trống')
            .required("Phòng ngủ đang trống"),
        giuong: Yup.number()
            .min(1,'Giường đang trống')
            .required("Giường đang trống"),
        phongTam: Yup.number()
            .min(1,'Phòng tắm đang trống')
            .required("Phòng tắm đang trống"),
        moTa: Yup.string()
            .required("Mô tả đang trống"),
        giaTien: Yup.number()
            .min(1,'Giá tiền đang trống')
            .required("Giá tiền đang trống"),
        maViTri: Yup.number()
            .min(1,'Mã vị trí đang trống')
            .required("Mã vị trí đang trống"),
        hinhAnh: Yup.string()
            .required("Hình ảnh đang trống"),
    }),
    onSubmit: (values) => {
      dispatch(postNewRoomAdminApi(values))
    },
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow} className="my-5">
        Add Room
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        
      >
        <Modal.Body className='bg-dark'>
          <form onSubmit={formik.handleSubmit}>
            <div className="sign_up" style={{borderRadius:"20px"}}>
              <div className="sign_up_right w-100 overflow-hidden bg-dark" style={{borderRadius:"20px"}}>
                <div className="m-3 p-3 bg-white rounded-3">
                  <h2 className="text-center">ADD ROOM</h2>
                  <div className="">
                    <input
                      type="number"
                      id="id"
                      placeholder="Id phòng"
                      className="w-100 mt-3 form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger" style={{fontSize:12}}>{formik.errors.id}</span>
                    
                    <input
                      type="text"
                      id="tenPhong"
                      placeholder="Tên phòng"
                      className="w-100 mt-3 form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger" style={{fontSize:12}}>{formik.errors.tenPhong}</span>

                    <input
                      type="number"
                      id="khach"
                      placeholder="Khách"
                      className="w-100 mt-3 form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger" style={{fontSize:12}}>{formik.errors.khach}</span>

                    <input
                      type="number"
                      id="phongNgu"
                      placeholder="Phòng ngủ"
                      className="w-100 mt-3 form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger" style={{fontSize:12}}>{formik.errors.phongNgu}</span>

                    <input
                      type="number"
                      id="giuong"
                      placeholder="Giường"
                      className="w-100 mt-3 form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger" style={{fontSize:12}}>{formik.errors.giuong}</span>

                    <input
                      type="number"
                      id="phongTam"
                      placeholder="Phòng tắm"
                      className="w-100 mt-3 form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger" style={{fontSize:12}}>{formik.errors.phongTam}</span>
                    
                    <input
                      type="text"
                      id="moTa"
                      placeholder="Mô tả"
                      className="w-100 mt-3 form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger" style={{fontSize:12}}>{formik.errors.moTa}</span>

                    <input
                      type="number"
                      id="giaTien"
                      placeholder="Giá tiền"
                      className="w-100 mt-3 form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger" style={{fontSize:12}}>{formik.errors.giaTien}</span>

                    <input
                      type="number"
                      id="maViTri"
                      placeholder="Mã vị trí"
                      className="w-100 mt-3 form-control "
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger" style={{fontSize:12}}>{formik.errors.maViTri}</span>

                    <input
                      type="text"
                      id="hinhAnh"
                      placeholder="Hình ảnh"
                      className="w-100 mt-3 form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger" style={{fontSize:12}}>{formik.errors.hinhAnh}</span>
                    
                    <p className="text-center w-100 mb-0 mt-3">Các tiện ích đi kèm</p>

                    <p className="w-100 mb-0 mt-3">Máy giặt</p>
                    <div className="input-group mb-3 d-flex justify-content-around align-items-center">
                        <Radio.Group
                        id="mayGiat"
                        name="mayGiat"
                        onChange={formik.handleChange}
                        value={formik.values.mayGiat}
                        >
                        <Radio value="true">Có</Radio>
                        <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>

                    <p className="w-100 mb-0 mt-3">Bàn là</p>
                    <div className="input-group mb-3 d-flex justify-content-around align-items-center">
                        <Radio.Group
                        name="banLa"
                        onChange={formik.handleChange}
                        value={formik.values.banLa}
                        >
                        <Radio value="true">Có</Radio>
                        <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>

                    <p className="w-100 mb-0 mt-3">Tivi</p>
                    <div className="input-group mb-3 d-flex justify-content-around align-items-center">
                        <Radio.Group
                        name="tivi"
                        onChange={formik.handleChange}
                        value={formik.values.tivi}
                        >
                        <Radio value="true">Có</Radio>
                        <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>

                    <p className="w-100 mb-0 mt-3">Điều hòa</p>
                    <div className="input-group mb-3 d-flex justify-content-around align-items-center">
                        <Radio.Group
                        name="dieuHoa"
                        onChange={formik.handleChange}
                        value={formik.values.dieuHoa}
                        >
                        <Radio value="true">Có</Radio>
                        <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    
                    <p className="w-100 mb-0 mt-3">Wifi</p>
                    <div className="input-group mb-3 d-flex justify-content-around align-items-center">
                        <Radio.Group
                        name="wifi"
                        onChange={formik.handleChange}
                        value={formik.values.wifi}
                        >
                        <Radio value="true">Có</Radio>
                        <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    
                    <p className="w-100 mb-0 mt-3">Bếp</p>
                    <div className="input-group mb-3 d-flex justify-content-around align-items-center">
                        <Radio.Group
                        name="bep"
                        onChange={formik.handleChange}
                        value={formik.values.bep}
                        >
                        <Radio value="true">Có</Radio>
                        <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>

                    <p className="w-100 mb-0 mt-3">Chổ đỗ xe</p>
                    <div className="input-group mb-3 d-flex justify-content-around align-items-center">
                        <Radio.Group
                        name="doXe"
                        onChange={formik.handleChange}
                        value={formik.values.doXe}
                        >
                        <Radio value="true">Có</Radio>
                        <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>

                    <p className="w-100 mb-0 mt-3">Hồ bơi</p>
                    <div className="input-group mb-3 d-flex justify-content-around align-items-center">
                        <Radio.Group
                        name="hoBoi"
                        onChange={formik.handleChange}
                        value={formik.values.hoBoi}
                        >
                        <Radio value="true">Có</Radio>
                        <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>

                    <p className="w-100 mb-0 mt-3">Bàn ủi</p>
                    <div className="input-group mb-3 d-flex justify-content-around align-items-center">
                        <Radio.Group
                        name="banUi"
                        onChange={formik.handleChange}
                        value={formik.values.banUi}
                        >
                        <Radio value="true">Có</Radio>
                        <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>

                  </div>
                  <div className="footer-modal text-center pt-3">
                    <Button variant="primary mx-1" type="submit">Add</Button>
                    
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
export default ModalAddRoom;
