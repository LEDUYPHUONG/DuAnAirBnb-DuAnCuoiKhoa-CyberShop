import React from "react";
import { RoomlistModel } from "../../redux/reducer/roomlistReducer";

type Props = {
  product:RoomlistModel;
}

export default function RoomListItem ({product}: Props) {

  
  return (
    <div
      className="roomlist-item"
      style={{ margin: "0px 10px", position: "relative" }}
    >
      <div className="image-out" style={{position:"relative", width:"345px",height:"270px" ,border:"none", borderRadius:"10px", overflow:"hidden", objectFit:"cover", marginBottom:"5px",cursor:"pointer"}}>
        <img
          style={{width:"100%",height:"100%"}}
          src={product.hinhAnh}
          alt="..."
        />
      </div>

      <div className="roomlist-address">
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span style={{fontSize:15}} >Hang động tại Noyers-sur-Cher</span>

          <div className="roomlist-like">
            <div className="d-flex">
              <img
                src="/img/Star.png"
                style={{ width: 20, height: 20, marginBottom: 4 }}
                alt="..."
              />
              <span>4,79 (234)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="roomlist-item_des">
        <p style={{ color: "#746b6b", margin: "0px 0px" }}>{product.tenPhong}</p>
        <p style={{ color: "#746b6b", margin: "0px 0px" }}>{product.giuong}</p>
        <p style={{ color: "#746b6b", margin: "0px 0px" }}>
          Ngày 30 tháng 10 - Ngày 04 tháng 11
        </p>
      </div>
      <div
        className="roomlist-item_price d-flex"
        style={{ fontSize: "15px", marginTop: 5 }}
      >

        <span style={{fontSize:15, fontWeight:"bold"}}>${product.giaTien}</span>
        <span style={{marginLeft:3,fontWeight:400}}>đêm</span>
      </div>
      <div
        className="roomlist-icon_left"
        style={{
          position: "absolute",
          top: "15px",
          left: "15px",
          borderRadius: "5px",
          backgroundColor: "#fafafa",
          padding: "5px",
        }}
      >
        Chủ nhà siêu cấp
      </div>
      <div
        className="roomlist-icon_right"
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          width: "20px",
          height: "20px",
          opacity: 0.8,
        }}
      >
        <img width={21} height={18} src="./img/home/heart.png" alt="..." />
      </div>
    </div>
  );
};
