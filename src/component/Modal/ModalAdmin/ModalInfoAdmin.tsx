import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AdmintUserModel } from "../../../redux/reducer/adminReducer";
import ModalUpdateAvatarAdmin from "./ModalUpdateAvatarAdmin";

type Props = {
  item: AdmintUserModel;
};

function ModalInfoAdmin({ item }: Props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Info
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Body>
          <div className="shadow p-3 m-3 bg-body rounded">
            <h2 className="text-center">INFO ACCOUNT</h2>
            <div>
              <div className="w-100 d-flex justify-content-center align-items-center mb-3">
                <div
                  className="shadow rounded-circle overflow-hidden"
                  style={{ width: "150px", height: "150px" }}
                >
                  <img
                    className="w-100"
                    src={
                      item.avatar === ""
                        ? "/img/avatar/existing-user-default-avatar.png"
                        : item.avatar
                    }
                    alt="avatar"
                  />
                </div>
              </div>
              <ModalUpdateAvatarAdmin />
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  ID
                </span>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={item.id}
                  disabled
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  Name
                </span>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={item.name}
                  disabled
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  Email
                </span>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={item.email}
                  disabled
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  Phone
                </span>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={item.phone}
                  disabled
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  Birthday
                </span>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={item.birthday}
                  disabled
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  Gender
                </span>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={item.gender ? "Nam" : "Nữ"}
                  disabled
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  Role
                </span>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={item.role}
                  disabled
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  Password
                </span>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={item.password}
                  disabled
                />
              </div>
            </div>
            <div className="footer-modal d-flex justify-content-center">
              <Button variant="secondary mx-1" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalInfoAdmin;
