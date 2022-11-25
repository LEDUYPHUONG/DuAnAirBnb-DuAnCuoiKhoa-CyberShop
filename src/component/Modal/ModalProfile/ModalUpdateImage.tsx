import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalUpdateImage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={() => {
        handleShow();
    }}
        className='my-5'>
        Cập nhật ảnh
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Body>
          <form className="container my-5 h-100" 
            onSubmit={(event) => {
              event.preventDefault()
                console.log('event: ',event);
                // dispatch(postAvatarImageApi(form));
          }}
         >
            <div className="sign_up mt-0 p-3" style={{borderRadius:"20px"}}>
              <div style={{borderRadius:"20px"}}>
                <div className="bg_cover d-flex flex-column align-items-center justify-content-center" style={{borderRadius:"20px"}}>
                  <h2 style={{ fontSize:'28px'}}>UPDATE AVATAR</h2>
                  <div className="signup_input d-flex flex-column  align-items-start">
                    <input
                    type="file"
                    id="formFile"
                    name="formFile"
                    className="form-control"
                    />
                  </div>
                  <div className="footer-modal my-3">
                    <Button variant="primary mx-1" type="submit">Xác Nhận</Button>
                    
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
export default ModalUpdateImage;
