import React from "react";
import "./RoomListItem.css";

const RoomListItem = () => {
  return (
    <div
      className="roomlist-item"
      style={{ margin: "0px 10px", position: "relative" }}
    >
      <img
        className="roomlist-item_img"
        style={{ width: "100%", borderRadius: "10px", cursor: "pointer" }}
        src="https://kientruccb.vn/wp-content/uploads/2020/02/mau-thiet-ke-nha-dep-truyen-cam-hung8.jpg"
        alt="..."
      />
      <div
        className="roomlist-item_name"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <h3 style={{ fontSize: "15px", marginBottom: 0 }}>
          Nhà tại Výloboky, ukraina
        </h3>

        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{margin:0, alignItems:"center"}}>
            <img style={{width:"18px", paddingBottom:"6px"}} src="./img/home/star.png" alt="..." />
          </span>
          <span style={{ fontSize: "15px", margin: 0 }}>5,0 (51)</span>
        </div>
      </div>
      <div className="roomlist-item_des">
        <p style={{ color: "#746b6b", margin: "0px 0px", fontSize: "15px" }}>
          Taxi Grove
        </p>
        <p style={{ color: "#746b6b", margin: "0px 0px", fontSize: "15px" }}>
          1 giường queen
        </p>
        <p style={{ color: "#746b6b", margin: "0px 0px", fontSize: "15px" }}>
          Ngày 30 tháng 10 - Ngày 04 tháng 11
        </p>
      </div>
      <p className="roomlist-item_price" style={{ fontSize: "15px" }}>
        $79 <span>đêm</span>
      </p>
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

export default RoomListItem;
