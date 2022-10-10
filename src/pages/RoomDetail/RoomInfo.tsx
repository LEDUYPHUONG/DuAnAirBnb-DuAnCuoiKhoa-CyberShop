import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

export default function RoomInfo({}: Props) {
  return (
    <div className="container">
      <h4 className="roomName">Amazing Condotel Relax in Vungtau</h4>
      <div className="review d-flex justify-content-between">
        <div className="d-flex ">
          <div className="mx-2">
            <i className="fa fa-star" style={{ color: "#ec6e6e" }}></i>4.8
          </div>
          <div className="mx-2">
            <i className="fa fa-heart" style={{ color: "#ec6e6e" }}></i>Chủ nhà
            siêu cấp
          </div>
          <div className="mx-2">
            <i className="fa fa-map-marker" style={{ color: "#ec6e6e" }}></i>
            Thành phố Bà Rịa Vũng Tàu - Việt Nam
          </div>
        </div>

        <div className="shareButton d-flex">
          <a href="#" className="mx-3">
            <i className="fa fa-share-alt"></i>
            Chia sẻ
          </a>
          <a href="#">
            <i className="fa fa-bookmark"></i>
            Lưu
          </a>
        </div>
      </div>
      <div className="roomPhoto">
        <div className="row" >
        <div className="col-5 bg-dark">
          <img src="https://picsum.photos/500/400" alt="roomPhoto" />
        </div>
        </div>
        
      </div>
      <h4 className="roomDes">Toàn bộ căn hộ condotel. Chủ nhà Phong</h4>
      <div>
        <span>6 khách - 2 phòng ngủ - 2 giường - 2 phòng tắm</span>
      </div>
      <div className="description"></div>
      <div className="bookingRoom"></div>
      <div className="convenient"></div>
    </div>
  );
}
