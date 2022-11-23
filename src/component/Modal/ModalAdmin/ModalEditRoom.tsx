import { Radio } from "antd";
import { useFormik } from "formik";
import React, {  useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { putEditRoomAdminApi, RoomInfoModel } from "../../../redux/reducer/adminRoomInfoManageReducer";
import * as Yup from 'yup';
import { useAppDispatch } from "../../../redux/example/hooks";

type Props = {
    item: RoomInfoModel
}

function ModalEditRoom({item} : Props) {
    const [show, setShow] = useState(false);
    const dispatch = useAppDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const formik = useFormik({
        enableReinitialize : true, //help update the item when useEffect is active 
        initialValues: {
            id:       item.id,
            tenPhong: item.tenPhong,
            khach:    item.khach,
            phongNgu: item.phongNgu,
            giuong:   item.giuong,
            phongTam: item.phongTam,
            moTa:     item.moTa,
            giaTien:  item.giaTien,
            mayGiat:  item.mayGiat.toString(),
            banLa:    item.banLa.toString(),
            tivi:     item.tivi.toString(),
            dieuHoa:  item.dieuHoa.toString(),
            wifi:     item.wifi.toString(),
            bep:      item.bep.toString(),
            doXe:     item.doXe.toString(),
            hoBoi:    item.hoBoi.toString(),
            banUi:    item.banUi.toString(),
            maViTri:  item.maViTri,
            hinhAnh:  item.hinhAnh,
        },
        validationSchema: Yup.object().shape({
            id: Yup.number()
                .min(1,'ID đang trống')
                .required('ID đang trống'),
            tenPhong: Yup.string()
                .required("Tên phòng đang trống"),
            khach: Yup.number()
                .min(1,'Khách đang trống')
                .required('Khách đang trống'),
            phongNgu: Yup.number()
                .min(1,'Phòng ngủ đang trống')
                .required('Phòng ngủ đang trống'),
            giuong: Yup.number()
                .min(1,'Giường đang trống')
                .required('Giường đang trống'),
            phongTam: Yup.number()
                .min(1,'Phòng tắm đang trống')
                .required('Phòng tắm đang trống'),
            moTa: Yup.string()
                .required("Mô tả đang trống"),
            giaTien: Yup.number()
                .min(1,'Giá tiền đang trống')
                .required('Giá tiền đang trống'),
            maViTri: Yup.number()
                .min(1,'Mã vị trí đang trống')
                .required('Mã vị trí đang trống'),
            hinhAnh: Yup.string()
                .required("Hình ảnh đang trống"),
        }),
        onSubmit: (values) => {
          console.log(values);
        },
    });

  return (
    <>
      <Button variant="warning mx-2" onClick={handleShow}>
      Sửa
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Body className="bg-dark rounded-2">
          <div className="bg-white rounded-3">
            <div className="shadow-lg p-3bg-body rounded" style={{borderRadius:"20px"}}>
              <div className="w-100 overflow-hidden" style={{borderRadius:"20px"}}>
                <form 
                className="bg_cover d-flex flex-column align-items-center justify-content-center" 
                style={{borderRadius:"20px"}}
                onSubmit={(form) => {
                    formik.handleSubmit(form);
                    const { values } = formik;
                    dispatch(putEditRoomAdminApi(values.id, values));
                  }}
                >
                  <h2 className="pt-3 fw-semiBold text-danger" style={{fontSize:'25px'}}>THÔNG TIN CỦA PHÒNG CẦN SỬA</h2>
                  <div className="signup_input w-100 px-3">
                    <div className="input-group mt-3">
                        <span className="input-group-text">id</span>
                        <input 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control"
                            type="number"
                            id="id"
                            name="id"
                            value={formik.values.id}
                            disabled
                        />
                        
                    </div>
                    {formik.errors.id &&
                            formik.touched.id && (
                              <p className='text-danger' style={{fontSize:'12px'}}>{formik.errors.id}</p>
                            )}
                    <div className="input-group mt-3">
                        <span className="input-group-text">Tên phòng</span>
                        <input 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control"
                            type="text"
                            id="tenPhong"
                            name="tenPhong"
                            value={formik.values.tenPhong}
                        />
                        
                    </div>
                    {formik.errors.tenPhong &&
                            formik.touched.tenPhong && (
                              <p className='text-danger' style={{fontSize:'12px'}}>{formik.errors.tenPhong}</p>
                            )}
                    <div className="input-group mt-3">
                        <span className="input-group-text">Khách</span>
                        <input 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control"
                            type="number"
                            id="khach"
                            name="khach"
                            value={formik.values.khach}
                        />
                        
                    </div>
                    {formik.errors.khach &&
                            formik.touched.khach && (
                              <p className='text-danger' style={{fontSize:'12px'}}>{formik.errors.khach}</p>
                            )}
                    <div className="input-group mt-3">
                        <span className="input-group-text">Phòng ngủ</span>
                        <input 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control"
                            type="number"
                            id="phongNgu"
                            name="phongNgu"
                            value={formik.values.phongNgu}
                        />
                        
                    </div>
                    {formik.errors.phongNgu &&
                            formik.touched.phongNgu && (
                              <p className='text-danger' style={{fontSize:'12px'}}>{formik.errors.phongNgu}</p>
                            )}
                    <div className="input-group mt-3">
                        <span className="input-group-text">Giường</span>
                        <input 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control"
                            type="number"
                            id="giuong"
                            name="giuong"
                            value={formik.values.giuong}
                        />
                        
                    </div>
                    {formik.errors.giuong &&
                            formik.touched.giuong && (
                              <p className='text-danger' style={{fontSize:'12px'}}>{formik.errors.giuong}</p>
                            )}
                    <div className="input-group mt-3">
                        <span className="input-group-text">Phòng tắm</span>
                        <input 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control"
                            type="number"
                            id="phongTam"
                            name="phongTam"
                            value={formik.values.phongTam}
                        />
                        
                    </div>
                    {formik.errors.phongTam &&
                            formik.touched.phongTam && (
                              <p className='text-danger' style={{fontSize:'12px'}}>{formik.errors.phongTam}</p>
                            )}
                    <div className="input-group mt-3">
                        <span className="input-group-text">Mô tả</span>
                        <input 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control"
                            type="text"
                            id="moTa"
                            name="moTa"
                            value={formik.values.moTa}
                        />
                        
                    </div>
                    {formik.errors.moTa &&
                            formik.touched.moTa && (
                              <p className='text-danger' style={{fontSize:'12px'}}>{formik.errors.moTa}</p>
                            )}
                    <div className="input-group mt-3">
                        <span className="input-group-text">Giá tiền</span>
                        <input 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control"
                            type="number"
                            id="giaTien"
                            name="giaTien"
                            value={formik.values.giaTien}
                        />
                        
                    </div>
                    {formik.errors.giaTien &&
                            formik.touched.giaTien && (
                              <p className='text-danger' style={{fontSize:'12px'}}>{formik.errors.giaTien}</p>
                            )}
                    <div className="input-group mt-3">
                        <span className="input-group-text">Mã Vị trí</span>
                        <input 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control"
                            type="number"
                            id="maViTri"
                            name="maViTri"
                            value={formik.values.maViTri}
                        />
                        
                    </div>
                    {formik.errors.maViTri &&
                            formik.touched.maViTri && (
                              <p className='text-danger' style={{fontSize:'12px'}}>{formik.errors.maViTri}</p>
                            )}

                    <p className="text-center fw-bold">Tiện ích đi kèm</p>

                    <div className="text-dark input-group-text text-wrap text-start px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Máy giặt:</span>
                        <Radio.Group
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="pe-5"
                            id="mayGiat"
                            name="mayGiat"
                            value={formik.values.mayGiat}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark input-group-text text-wrap text-start px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Bàn là:</span>
                        <Radio.Group
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="pe-5"
                            id="banLa"
                            name="banLa"
                            value={formik.values.banLa}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark input-group-text text-wrap text-start px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Ti vi:</span>
                        <Radio.Group
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="pe-5"
                            id="tivi"
                            name="tivi"
                            value={formik.values.tivi}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark input-group-text text-wrap text-start px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Điều hòa:</span>
                        <Radio.Group
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="pe-5"
                            id="dieuHoa"
                            name="dieuHoa"
                            value={formik.values.dieuHoa}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark input-group-text text-wrap text-start px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Wifi:</span>
                        <Radio.Group
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="pe-5"
                            id="wifi"
                            name="wifi"
                            value={formik.values.wifi}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark input-group-text text-wrap text-start px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Bếp:</span>
                        <Radio.Group
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="pe-5"
                            id="bep"
                            name="bep"
                            value={formik.values.bep}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark input-group-text text-wrap text-start px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Chổ đỗ xe:</span>
                        <Radio.Group
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="pe-5"
                            id="doXe"
                            name="doXe"
                            value={formik.values.doXe}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark input-group-text text-wrap text-start px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Hồ bơi:</span>
                        <Radio.Group
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="pe-5"
                            id="hoBoi"
                            name="hoBoi"
                            value={formik.values.hoBoi}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark input-group-text text-wrap text-start px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Bàn ủi:</span>
                        <Radio.Group
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="pe-5"
                            id="banUi"
                            name="banUi"
                            value={formik.values.banUi}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <p className="text-dark text-center fw-bold">Hình ảnh</p>
                    <div className="input-group mt-3">
                        <span className="input-group-text">Hình ảnh</span>
                        <input 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control"
                            type="text"
                            id="hinhAnh"
                            name="hinhAnh"
                            value={formik.values.hinhAnh}
                        />
                    </div>
                    {formik.errors.hinhAnh &&
                            formik.touched.hinhAnh && (
                              <p className='text-danger' style={{fontSize:'12px'}}>{formik.errors.hinhAnh}</p>
                            )}
                  </div>
                  <div className="footer-modal my-3">
                    <Button variant="primary mx-1" type="submit" >
                      Xác nhận
                    </Button>                    
                    <Button variant="secondary mx-1" onClick={handleClose} >
                      Thoát
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalEditRoom;
