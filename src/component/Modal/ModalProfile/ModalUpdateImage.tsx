import { useFormik } from "formik";
import React, { useState, ChangeEvent } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { useAppDispatch } from "../../../redux/example/hooks";
import { postAvatarImageApi } from "../../../redux/reducer/profileReducer";

function ModalUpdateImage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      formFile: new File(["foo"], "foo.txt", {
        type: "text/plain",
      }),
    },
    validationSchema: Yup.object().shape({
      formFile: Yup.mixed()
        .test("fileSize", "The file is too large", (value) => {
          if (!value.length) return true;
          return value[0].size <= 2000000;
        })
        .required("File is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          handleShow();
        }}
        className="my-5"
      >
        Update avatar
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Body>
          <form
            className="container my-5 h-100"
            onSubmit={(event) => {
              event.preventDefault();
              formik.handleSubmit(event);
              const { values } = formik;
              console.log("valuesformik", values);
              let formData = new FormData();
              formData.append("formFile", values.formFile);
              dispatch(postAvatarImageApi(formData));
            }}
          >
            <div className="sign_up mt-0 p-3" style={{ borderRadius: "20px" }}>
              <div style={{ borderRadius: "20px" }}>
                <div
                  className="bg_cover d-flex flex-column align-items-center justify-content-center"
                  style={{ borderRadius: "20px" }}
                >
                  <h2 style={{ fontSize: "28px" }}>UPDATE AVATAR</h2>
                  <div className="signup_input d-flex flex-column align-items-start">
                    <input
                      type="file"
                      id="myFile"
                      name="myFile"
                      className="form-control"
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const fileSelected = event.target.files?.item(0);
                        console.log("fileSelected", fileSelected);
                        console.log(formik.initialValues.formFile);
                        if (fileSelected) {
                          formik.initialValues.formFile = fileSelected;
                        } else {
                          alert("No file selected");
                        }
                      }}
                    />
                  </div>
                  {formik.errors.formFile && formik.touched.formFile && (
                    <p className="pb-3">Chưa chọn File kìa bạn</p>
                  )}
                  <div className="footer-modal my-3">
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
export default ModalUpdateImage;
