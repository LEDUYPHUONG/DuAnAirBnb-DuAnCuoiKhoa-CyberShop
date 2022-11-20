import React, { MouseEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/example/hooks";
import { getProfileRoomApi, getProfileUserApi, postProfileUserApi, ProfileRoomModel } from "../../redux/reducer/profileReducer";
import { getStoreJson, USER_ID } from "../../util/setting";
import CarouselInfor from "../UserInfor/CarouselInfor";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserSignUpModel } from "../../redux/reducer/userReducer";
import DatePicker from "antd/es/date-picker";
import * as dayjs from 'dayjs'

export default function UserInforItem () {
  const { arrProfileRoom , arrProfileUser } = useAppSelector((state) => state.profileReducer);
  const { userSignup } = useAppSelector((state) => state.userReducer);
  const [open, setOpen] = useState(false);
  const [eyeInputPassword, setEyeInputPassword] = useState(false)
  const dispatch = useAppDispatch();

  const formInfoUser = useFormik({
    initialValues: {
      id: 0,
      email: '',
      role: '',
      name: '',
      birthday: '',
      password: '',
      phone: '',
      gender: true,
      avatar:''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Identifier required!"),
      phone: Yup.string().required("Identifier required!"),
      birthdate: Yup.date()
      .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
      .required("Required"),
    }),
    onSubmit: (values: UserSignUpModel) => {
      console.log(123);
      
      dispatch(postProfileUserApi(values.id,values));
      // resetForm();
    }
});


  useEffect(() => {
    const idUser: string = getStoreJson(USER_ID)
    console.log(idUser);
    console.log('arrProfileRoom', arrProfileRoom);
    
    dispatch(getProfileRoomApi(idUser));
    dispatch(getProfileUserApi(idUser));
    // eslint-disable-next-line
  }, []);

  const renderRoomListRented = () => {
    if (arrProfileRoom.length === 0) {
      return (<p className="text-danger text-center">Danh sách phòng từng đặt rỗng, xin vui lòng đặt phòng!</p>)
    } else {
      return arrProfileRoom.map((prod: ProfileRoomModel, index: number) => {
        return (<div key={index}>
                  {CarouselInfor({ product: prod })}
                </div>
        )
      })
    }
  }

  return (
    <div
      className="infor-container"
      style={{ width: "100%", marginTop: "80px" }}
    >
      <div
        className="justify-content-center mb-3"
        style={{ margin: "120px 300px 32px 300px", padding: "0 16px" }}
      >
        <div className="justify-content-center mb-3">
          <div
            className="d-flex justify-content-center mb-3"
            style={{ width: "100%", position: "relative" }}
          >
            <div
              className="p-2"
              style={{
                width: "33.33%",
                paddingLeft: "8px",
                paddingRight: "8px",
              }}
            >
              <div
                className="square border border-1"
                style={{
                  maxWidth: "308px",
                  padding: "24px",
                  borderRadius: "12px",
                }}
              >
                <div
                  className="infor-updateimage"
                  style={{ width: "128px", margin: "auto auto 32px auto" }}
                >
                  <div
                    className="infor-img"
                    style={{
                      width: "128px",
                      height: "128px",
                      position: "relative",
                      borderRadius: "100%",
                    }}
                  >
                    <img
                      src={arrProfileUser.avatar? arrProfileUser.avatar : 'https://i.pravatar.cc/'}
                      alt="..."
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                  <div
                    className="infor-editimg"
                    style={{ textAlign: "center" }}
                  >
                    <button
                      className="btn btn-primary edit"
                      style={{marginTop:8}}
                      onClick={(event : MouseEvent<HTMLButtonElement>) => {
                        event.preventDefault();setOpen(true)
                      }}
                    >
                      Cập nhật ảnh
                    </button>
                  </div>
                </div>
                <div
                  className="infor-iconservice"
                  style={{ marginBottom: "16px", textAlign:'center' }}
                >
                  <img
                    src="/img/security.png"
                    alt="..."
                    style={{
                      height: "40px",
                      widows: "40px",
                      fill: "currentcolor"
                    }}
                  />
                </div>
                <div
                  className="infor-check1"
                  style={{ marginBottom: "8px", fontSize: "18px" }}
                >
                  Xác minh danh tính
                </div>
                <div
                  className="infor-check2"
                  style={{
                    lineHeight: "20px",
                    marginBottom: "16px",
                    fontSize: "16px",
                  }}
                >
                  Xác thực danh tính của bạn với huy hiệu xác minh danh tính.
                </div>
                <div
                  className="infor-challange square border border-dark"
                  style={{
                    padding: "13px 23px",
                    width: "fit-content",
                    textAlign: "center",
                    borderRadius: "8px",
                    border: "1px solid rgba(0,255,0,0.3)",
                  }}
                >
                  Nhận huy hiệu
                </div>
                <div
                  className="infor-line"
                  style={{ marginTop: "32px", marginBottom: "32px" }}
                >
                  <div
                    className="infor-borderline"
                    style={{
                      borderBottom: "1px solid rgb(235,235,235",
                      width: "100%",
                    }}
                  ></div>
                </div>
                <div className="infro-checkemail">
                  <div>
                    <div
                      className="infor-comform"
                      style={{ marginBottom: "24px" }}
                    >
                      <h1
                        style={{
                          fontSize: "22px",
                          lineHeight: "26px",
                          margin: "0",
                        }}
                      >
                        {arrProfileUser.name} đã xác nhận
                      </h1>
                    </div>
                    <div
                      className="infor-email"
                      style={{ marginBottom: "16px" }}
                    >
                      <div className="d-flex align-items-center p-2">
                        <img
                          src="/img/check.png"
                          alt=""
                          style={{ width: "16px", height: "16px" }}
                        />

                        <div style={{ paddingLeft: "10px" }}>Địa chỉ email: {arrProfileUser.email} </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={formInfoUser.handleSubmit}>
              <div
                className="p-2"
                style={{
                  width: "66.67%",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                }}
              >
                <div
                  className="infor-right"
                  style={{ margin: "auto", maxWidth: "100%", marginRight: 0 }}
                >
                  <div className="infor-right-welcome">
                    <div
                      className="infor-right-hello"
                      style={{
                        fontSize: "32px",
                        lineHeight: "36px",
                        marginBottom: 8,
                      }}
                    >
                      <h1 style={{ fontSize: "1em", margin: 0 }}>
                        Xin chào {arrProfileUser.name}
                      </h1>
                    </div>
                    <div
                      className="infor-right-status"
                      style={{
                        fontSize: 14,
                        lineHeight: "18px",
                        marginBottom: 8,
                      }}
                    >
                      Bắt đầu tham gia vào 2022
                    </div>
                    <div
                      className="infor-right-editprofile"
                      style={{ marginTop: 16, marginBottom: 8 }}
                    >
                      <button
                        style={{
                          border: 0,
                          backgroundColor: "transparent",
                          textDecoration: "underline",
                        }}
                        onClick={(event : MouseEvent<HTMLButtonElement>) => {
                          event.preventDefault();setOpen(true)
                        }}>
                        Chỉnh sửa hồ sơ
                      </button>
                    </div>

                    {open && (
                      <div className="border-bottom ">
                        <p
                          style={{
                            fontSize: 16,
                            marginTop: 20,
                            marginBottom: 10,
                          }}
                        >
                          ID
                        </p>
                        <div className="input-group mb-3">
                          <input
                            onChange={formInfoUser.handleChange}
                            onBlur={formInfoUser.handleBlur}
                            type="text"
                            className="form-control"
                            id="id"
                            name="id"
                            style={{ borderRadius: 5! }}
                            defaultValue={arrProfileUser.id}
                            disabled
                          />
                          {formInfoUser.errors.id && formInfoUser.touched.id && (<p>{formInfoUser.errors.id}</p>)}
                        </div>
                        
                        <p
                          style={{
                            fontSize: 16,
                            marginTop: 20,
                            marginBottom: 10,
                          }}
                        >
                          Email
                        </p>
                        <div className="input-group mb-3">
                          <input
                            onChange={formInfoUser.handleChange}
                            onBlur={formInfoUser.handleBlur}
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            style={{ borderRadius: 5! }}
                            defaultValue={arrProfileUser.email}
                            disabled
                          />
                          {formInfoUser.errors.email && formInfoUser.touched.email && (<p>{formInfoUser.errors.email}</p>)}
                        </div>

                        <p
                          style={{
                            fontSize: 16,
                            marginTop: 20,
                            marginBottom: 10,
                          }}
                        >
                          Role
                        </p>
                        <div className="input-group mb-3">
                          <input
                            onChange={formInfoUser.handleChange}
                            onBlur={formInfoUser.handleBlur}
                            type="text"
                            className="form-control"
                            id="role"
                            name="role"
                            style={{ borderRadius: 5! }}
                            defaultValue={arrProfileUser.role}
                            disabled
                          />
                          {formInfoUser.errors.role && formInfoUser.touched.role && (<p>{formInfoUser.errors.role}</p>)}
                        </div>

                        <p
                          style={{
                            fontSize: 16,
                            marginTop: 20,
                            marginBottom: 10,
                          }}
                        >
                          Tên cá nhân
                        </p>
                        <div className="input-group mb-3">
                          <input
                            onChange={formInfoUser.handleChange}
                            onBlur={formInfoUser.handleBlur}
                            type="text"
                            id='name'
                            name="name"
                            className="form-control"
                            style={{ borderRadius: 5! }}
                            defaultValue={arrProfileUser.name}
                          />
                          {formInfoUser.errors.name && formInfoUser.touched.name && (<p>{formInfoUser.errors.name}</p>)}
                        </div>

                        <p
                          style={{
                            fontSize: 16,
                            marginTop: 20,
                            marginBottom: 10,
                          }}
                        >
                          Số điện thoại
                        </p>
                        <div className="input-group" style={{ marginBottom: 32 }}>
                          <input
                            onChange={formInfoUser.handleChange}
                            onBlur={formInfoUser.handleBlur}
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            style={{ borderRadius: 5! }}
                            defaultValue={arrProfileUser.phone}
                          />
                          {formInfoUser.errors.phone && formInfoUser.touched.phone && (<p>{formInfoUser.errors.phone}</p>)}
                        </div>         
                        <p
                          className="d-flex justify-content-between align-items-center "
                          style={{
                            fontSize: 16,
                            marginTop: 20,
                            marginBottom: 10
                          }}
                        >
                          <span>Password</span> <span onClick={() => {
                            setEyeInputPassword(!eyeInputPassword)
                          }}><i className={eyeInputPassword? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}></i></span>
                        </p>
                        <div className="input-group mb-3 ">
                          <input
                            onChange={formInfoUser.handleChange}
                            onBlur={formInfoUser.handleBlur}
                            type={eyeInputPassword? "text" : 'password'}
                            className="form-control"
                            name="password"
                            id="password"
                            style={{ borderRadius: 5! }}
                            defaultValue={arrProfileUser.password}
                          />
                          {formInfoUser.errors.password && formInfoUser.touched.password && (<p>{formInfoUser.errors.password}</p>)}
                        </div>

                        <p
                          style={{
                            fontSize: 16,
                            marginTop: 20,
                            marginBottom: 10,
                          }}
                        >
                          Ngày sinh
                        </p>
                        <div className="input-group" style={{ marginBottom: 32 }}>
                        <DatePicker
                          bordered={true}
                          className='w-100'
                          placeholder="Sinh nhật"
                          format="DD/MM/YYYY"
                       
                        />
                        </div>

                        <p
                          style={{
                            fontSize: 16,
                            marginTop: 20,
                            marginBottom: 10,
                          }}
                        >
                          Gender
                        </p>
                        <div className="input-group mb-3 d-flex justify-content-around align-items-center">
                          <div className="radio-men">
                            <input
                              onChange={formInfoUser.handleChange}
                              onBlur={formInfoUser.handleBlur}
                              type="radio"
                              id="gender"
                              name="gender"
                              value='true'
                              style={{ borderRadius: 5! }}
                              checked
                            />
                            <label htmlFor="true" className="ps-1">Men</label>
                          </div>
                          <div className="radio-women">
                            <input
                              onChange={formInfoUser.handleChange}
                              onBlur={formInfoUser.handleBlur}
                              type="radio"
                              id="gender"
                              name="gender"
                              value='false'
                              style={{ borderRadius: 5! }}
                              
                            />
                            <label htmlFor="false" className="ps-1">Women</label>
                          </div>
                        </div>

                        <p
                          style={{
                            fontSize: 16,
                            marginTop: 20,
                            marginBottom: 10,
                          }}
                        >
                          Avata
                        </p>
                        <div className="input-group mb-3">
                          <input
                            onChange={formInfoUser.handleChange}
                            onBlur={formInfoUser.handleBlur}
                            type="text"
                            className="form-control"
                            id="avata"
                            name="avata"
                            style={{ borderRadius: 5! }}
                            defaultValue={arrProfileUser.avatar? arrProfileUser.avatar : 'https://i.pravatar.cc/'}
                          />
                        </div>

                        <div
                          className="d-flex justify-content-between"
                          style={{ marginBottom: 20 }}
                        >
                          <button
                            type="button"
                            onClick={(event : MouseEvent<HTMLButtonElement>) => {
                              event.preventDefault();
                              setOpen(false)
                            }}
                            className="btn btn-secondary text-decoration-underline"
                            style={{ padding: "10px 20px" }}
                          >
                            Hủy
                          </button>
                          <button
                            type="submit"
                            className="btn btn-dark"
                            style={{ fontSize: 20, padding: "10px 20px" }}
                            onClick={(event : MouseEvent<HTMLButtonElement>) => {
                              event.preventDefault();
                            }}
                          >
                            Lưu
                          </button>
                        </div>
                      </div>
                    )}

                    <div
                      className="infor-myroom"
                      style={{
                        fontSize: "32px",
                        lineHeight: "36px",
                        marginBottom: 16,
                        marginTop: 16,
                        fontWeight: 700,
                      }}
                    >
                      <h1 style={{ fontSize: "1em", margin: 0 }}>
                        Phòng đã thuê
                      </h1>
                    </div>
                    {renderRoomListRented()}
                  </div>
                  
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}
