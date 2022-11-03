import React from "react";

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
        <p style={{ color: "#746b6b", margin: "0px 0px" }}>Taxi Grove</p>
        <p style={{ color: "#746b6b", margin: "0px 0px" }}>1 giường queen</p>
        <p style={{ color: "#746b6b", margin: "0px 0px" }}>
          Ngày 30 tháng 10 - Ngày 04 tháng 11
        </p>
      </div>
      <p
        className="roomlist-item_price"
        style={{ fontSize: "15px", marginTop: 5 }}
      >

        <span>$79 đêm</span>
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
