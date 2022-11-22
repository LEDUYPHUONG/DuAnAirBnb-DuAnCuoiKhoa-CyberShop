import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DatePicker } from "antd";
import moment from "moment";
import { AdmintUserModel } from "../../../redux/reducer/adminReducer";


type Props = {
    item: AdmintUserModel
}

function ModalInfoAdmin({item} : Props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      Xem thông tin chi tiết
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Body>
          <div className="container my-5">
            <div className="sign_up" style={{borderRadius:"20px"}}>
              <div className="sign_up_right w-100 overflow-hidden" style={{borderRadius:"20px"}}>
                <div className="bg_cover d-flex flex-column align-items-center justify-content-center" style={{borderRadius:"20px"}}>
                  <h2>THÔNG TIN CỦA ACCOUNT</h2>
                  <div className="signup_input w-100 px-3">
                    <p className="text-white">id: {item.id}</p>
                    <p className="text-white">inamed: {item.name}</p>
                    <p className="text-white">email: {item.email}</p>
                    <p className="text-white">phone: {item.phone}</p>
                    <p className="text-white">birthday: {item.birthday}</p>
                    <p className="text-white">gender: {item.gender? 'Nam' : 'Nữ'}</p>
                    <p className="text-white">role: {item.role}</p>
                    <p className="text-white text-truncate">avatar: {item.avatar}</p>
                    <p className="text-white">password: {item.password}</p> 
                  </div>
                  <div className="footer-modal">                    
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
export default ModalInfoAdmin;
