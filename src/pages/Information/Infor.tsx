import React from "react";
import UserInforItem from '../../component/UserInfor/UserInforItem'

type Props = {
  title?: string;
};

export default function Infor({ title }: Props) {
  return (
    <div>
      <div
        className="header-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          background: "#ffffff",
          borderBottom: "1px solid #cccccc",
          zIndex: 10,
        }}
      >
        <div className="header-top m-auto px-5" style={{ height: "80px" }}>
          <div
            className="header d-flex justify-content-around align-items-center"
            style={{ paddingRight: "80px", paddingLeft: "80px" }}
          >
            <div
              className="header_logo d-flex justify-content-center align-items-center"
              style={{ height: "80px" }}
            >
              <div className="header_logo d-none">
                <img
                  style={{ height: "33px", cursor: "pointer" }}
                  src="/img/home/logo.png"
                  alt="..."
                />
              </div>
              <div className="header_logo-text d-block">
                <img
                  style={{ height: "33px", cursor: "pointer" }}
                  src="/img/home/logo-text.png"
                  alt="..."
                />
              </div>
            </div>
            <div className="order-bar rounded-pill">
              {/* <div className="location d-flex justify-content-between align-items-center" style={{padding: "7px"}}>
              <div style={{width:1, height:0}}></div>
              <button className='btn text-dark' style={{fontSize: "14px"}}>Địa điểm bất kì</button>
              <div style={{width:1, height:24, background:"#cccccc"}}></div>
              <button className='btn text-dark' style={{fontSize: "14px"}}>Tuần bất kì</button>
              <div style={{width:1, height:24, background:"#cccccc"}}></div>
              <button className='btn text-dark' style={{opacity: 0.5, fontFamily: "Roboto-Regular",fontSize: "14px"}}>Thêm khách</button>
              <button className='btn' style={{border: "none", background: "red", color: "white", borderRadius: "50%", width: "40px", height: "40px", lineHeight: "14px", textAlign: "center"}}>
                <i className="fa-solid fa-magnifying-glass" style={{fontSize: "14px", lineHeight: "14px", width: "14px", height: "14px"}}></i>
              </button>
              <div></div>
            </div> */}
            </div>
            <div className="singin-singout">
              <div className="location d-flex justify-content-between align-items-center p-2">
                <div style={{ width: 1, height: 0 }}></div>
                <button
                  className="btn text-dark p-0"
                  style={{ fontSize: "14px" }}
                >
                  Trở thành chủ nhà
                </button>
                <button className="btn text-dark">
                  <i className="fa-solid fa-globe"></i>
                </button>
                <button
                  className="btn rounded-pill d-flex justify-content-between align-items-center"
                  style={{ border: "1px solid rgba(204, 204, 204, 0.5)" }}
                >
                  <i className="fa-solid fa-bars pe-3 text-dark"></i>
                  <i
                    className="fa-solid fa-circle-user text-dark"
                    style={{
                      width: 30,
                      height: 30,
                      lineHeight: "30px",
                      fontSize: 30,
                    }}
                  ></i>
                </button>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserInforItem></UserInforItem>
    </div>
  );
}
