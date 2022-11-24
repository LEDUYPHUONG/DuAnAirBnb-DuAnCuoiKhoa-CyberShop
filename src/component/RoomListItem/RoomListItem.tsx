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
          <span className="text-truncate fw-bold" style={{ width:'200px',fontSize:15, color: "#000000", margin: "0px 0px" }}>{product.tenPhong}</span>
          <div className="roomlist-like">
            <div className="d-flex">
              <img
                src="/img/Star.png"
                style={{ width: 20, height: 20, marginBottom: 4 }}
                alt="..."
              />
              <span style={{ color: "#000000"}}>4,79 (234)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="roomlist-item_des mt-3">
        <p style={{ color: "#746b6b", margin: "0px 0px" }}>Sức chứa: {product.khach} Khách</p>
        <p style={{ color: "#746b6b", margin: "0px 0px" }}>Số phòng ngủ: {product.phongNgu}</p>
        <p style={{ color: "#746b6b", margin: "0px 0px" }}>Số giường: {product.giuong}</p>
        <p className="text-truncate" style={{ color: "#746b6b", margin: "0px 0px" }}>Mô tả: {product.moTa}</p>
        <p style={{ color: "#746b6b", margin: "0px 0px" }}>
          Ngày 30 tháng 10 - Ngày 04 tháng 11
        </p>
      </div>
      <div
        className="roomlist-item_price d-flex"
        style={{ fontSize: "15px", marginTop: 5 }}
      >

        <span style={{fontSize:15,color: "#000000", fontWeight:"bold"}}>${product.giaTien}</span>
        <span style={{marginLeft:3,fontWeight:400,color: "#000000"}}>đêm</span>
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
          color: "#000000"
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
