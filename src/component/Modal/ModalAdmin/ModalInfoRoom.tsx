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
      Info
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
                  <h2 className="pt-3">INFO ROOM</h2>
                  <div className="signup_input w-100 px-3">
                    <p className="text-dark input-group-text text-wrap text-start">ID: {item.id}</p>
                    <p className="text-dark input-group-text text-wrap text-start">Name room: {item.tenPhong}</p>
                    <p className="text-dark input-group-text text-wrap text-start ">Guest: {item.khach}</p>
                    <p className="text-dark input-group-text text-wrap text-start">Bedroom: {item.phongNgu}</p>
                    <p className="text-dark input-group-text text-wrap text-start">Bed: {item.giuong}</p>
                    <p className="text-dark input-group-text text-wrap text-start">Bathroom: {item.phongTam}</p>
                    <p className="text-dark input-group-text text-start text-wrap">Describe: {item.moTa}</p>
                    <p className="text-dark input-group-text text-wrap text-start">Price: {item.giaTien}</p>
                    <p className="text-dark input-group-text text-wrap text-start">ID location: {item.maViTri}</p>
                    <p className="text-dark text-center fw-bold">Add-ons</p>

                    <div className="text-dark input-group-text text-wrap text-start px-5 mb-2 d-flex justify-content-between align-items-center">
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
                    <div className="text-dark input-group-text text-wrap text-start px-5 mb-2 d-flex justify-content-between align-items-center">
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
                    <div className="text-dark input-group-text text-wrap text-start px-5 mb-2 d-flex justify-content-between align-items-center">
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
                    <div className="text-dark input-group-text text-wrap text-start px-5 mb-2 d-flex justify-content-between align-items-center">
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
                    <div className="text-dark input-group-text text-wrap text-start px-5 mb-2 d-flex justify-content-between align-items-center">
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
                    <div className="text-dark input-group-text text-wrap text-start px-5 mb-2 d-flex justify-content-between align-items-center">
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
                    <div className="text-dark input-group-text text-wrap text-start px-5 mb-2 d-flex justify-content-between align-items-center">
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
                    <div className="text-dark input-group-text text-wrap text-start px-5 mb-2 d-flex justify-content-between align-items-center">
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
                    <div className="text-dark input-group-text text-wrap text-start px-5 mb-2 d-flex justify-content-between align-items-center">
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
                    <p className="text-dark text-center fw-bold">Image room</p>

                    <p className="text-center"><img width={300} height={300} style={{objectFit:'cover'}} src={item.hinhAnh} alt="Hình ảnh" /></p>
                  </div>
                  <div className="footer-modal my-3">                    
                    <Button variant="secondary mx-1" onClick={handleClose} >
                      Cancel
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
