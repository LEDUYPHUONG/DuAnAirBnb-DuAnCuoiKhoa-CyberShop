import { Radio } from "antd";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RoomInfoModel } from "../../../redux/reducer/adminRoomInfoManageReducer";


type Props = {
    item: RoomInfoModel
}

function ModalInfoRoom({item} : Props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      Xem thông tin chi tiết phòng
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
                <div className="bg_cover d-flex flex-column align-items-center justify-content-center" style={{borderRadius:"20px"}}>
                  <h2 className="pt-3">THÔNG TIN CỦA PHÒNG</h2>
                  <div className="signup_input w-100 px-3">
                    <p className="text-dark input-group-text text-wrap text-start">id: {item.id}</p>
                    <p className="text-dark input-group-text text-wrap text-start">Tên phòng: {item.tenPhong}</p>
                    <p className="text-dark input-group-text text-wrap text-start ">Khách: {item.khach}</p>
                    <p className="text-dark input-group-text text-wrap text-start">Phòng ngủ: {item.phongNgu}</p>
                    <p className="text-dark input-group-text text-wrap text-start">Giường: {item.giuong}</p>
                    <p className="text-dark input-group-text text-start text-wrap">Mô tả: {item.moTa}</p>
                    <p className="text-dark input-group-text text-wrap text-start">Giá tiền: {item.giaTien}</p>
                    <p className="text-dark input-group-text text-wrap text-start">Mã vị trí: {item.maViTri}</p>
                    <p className="text-dark input-group-text text-wrap text-start text-center fw-bold">Tiện ích đi kèm</p>

                    <div className="text-dark input-group-text text-wrap text-start px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Máy giặt:</span>
                        <Radio.Group
                            className="pe-5"
                            name="mayGiat"
                            value={Boolean(item.mayGiat).toString()}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Bàn là:</span>
                        <Radio.Group
                            className="pe-5"
                            name="mayGiat"
                            value={Boolean(item.banLa).toString()}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Ti vi:</span>
                        <Radio.Group
                            className="pe-5"
                            name="mayGiat"
                            value={Boolean(item.tivi).toString()}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Điều hòa:</span>
                        <Radio.Group
                            className="pe-5"
                            name="mayGiat"
                            value={Boolean(item.dieuHoa).toString()}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Wifi:</span>
                        <Radio.Group
                            className="pe-5"
                            name="mayGiat"
                            value={Boolean(item.wifi).toString()}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Bếp:</span>
                        <Radio.Group
                            className="pe-5"
                            name="mayGiat"
                            value={Boolean(item.bep).toString()}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Chổ đỗ xe:</span>
                        <Radio.Group
                            className="pe-5"
                            name="mayGiat"
                            value={Boolean(item.doXe).toString()}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Hồ bơi:</span>
                        <Radio.Group
                            className="pe-5"
                            name="mayGiat"
                            value={Boolean(item.hoBoi).toString()}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <div className="text-dark px-5 d-flex justify-content-between align-items-center">
                        <span className="ps-3">Bàn ủi:</span>
                        <Radio.Group
                            className="pe-5"
                            name="mayGiat"
                            value={Boolean(item.banUi).toString()}
                            >
                            <Radio value="true">Có</Radio>
                            <Radio value="false">Không</Radio>
                        </Radio.Group>
                    </div>
                    <p className="text-dark text-center fw-bold">Hình ảnh</p>

                    <p className="text-center"><img width={150} height={150} style={{objectFit:'cover'}} src={item.hinhAnh} alt="Hình ảnh" /></p>
                  </div>
                  <div className="footer-modal my-3">                    
                    <Button variant="secondary mx-1" onClick={handleClose} >
                      Thoát
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalInfoRoom;
