import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

export default function RoomInfo({}: Props) {
  return (
    <div className="container">
      <h4 className="roomName">Amazing Condotel Relax in Vungtau</h4>
      <div className="review d-flex justify-content-between">
        <div className="d-flex ">
          <div className="textReview">
            <i className="fa fa-star" style={{ color: "#ec6e6e" }}></i>
            <span className="tinyText">4.8 (10 đánh giá)</span>
          </div>
          <div className="textReview">
            <i className="fa fa-heart" style={{ color: "#ec6e6e" }}></i>
            <span className="tinyText">Chủ nhà siêu cấp</span>
          </div>
          <div className="textReview">
            <i className="fa fa-map-marker" style={{ color: "#ec6e6e" }}></i>
            <span className="tinyText">
              Thành phố Vũng Tàu, Bà Rịa-Vũng Tàu, VN
            </span>
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
        <div className="row">
          <div className="">
            <img src="https://picsum.photos/500/400" alt="roomPhoto" />
          </div>
        </div>
      </div>
      <div className="roomDes d-flex col-10">
        <div className="desLeft">
          <div className="desTopLeft">
            <h4>Toàn bộ căn hộ condotel. Chủ nhà Phong</h4>
            <span>6 khách - 2 phòng ngủ - 2 giường - 2 phòng tắm</span>
          </div>
          <div className="desTopRight">
            <img src="https://i.pravatar.cc/50" alt="" />
          </div>
        </div>
        <div className="desRight">Nơi chứa lịch</div>
      </div>

      <div className="description"></div>
      <div className="bookingRoom"></div>
      <div className="convenient"></div>
    </div>
  );
}
