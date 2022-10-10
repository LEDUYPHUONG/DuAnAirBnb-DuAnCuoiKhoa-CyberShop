import React from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import { Gallery } from "react-grid-gallery"

type Props = {

};


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
          <div className="item1">
            <img src="http://xuonggooccho.com/wp-content/uploads/2020/10/trang-tri-noi-that-phong-ngu-dep.jpg" alt="roomPhoto" />
          </div>
          <div className="item">
            <img src="https://www.cleanipedia.com/images/5iwkm8ckyw6v/2BFigZgUEMCk0v55yfycxa/e9ae78c9f4ce46f417aa1c1b03f98333/bm9pLXRoYXQtcGhvbmcta2hhY2gtZ29tLW5odW5nLWdpLmpwZWc/990w-660h/n%E1%BB%99i-th%E1%BA%A5t-ph%C3%B2ng-kh%C3%A1ch-g%E1%BB%93m-nh%E1%BB%AFng-g%C3%AC-v%C3%A0-c%C3%A1ch-l%E1%BB%B1a-ch%E1%BB%8Dn-ph%C3%B9-h%E1%BB%A3p.jpg" alt="roomPhoto" />
          </div>
          <div className="item item3">
            <img src="https://ancu.me/images/201810/man-nhan-55-mau-thiet-ke-san-vuon-vuon-hoa-nho-dep-cuc-moi-la/man-nhan-55-mau-thiet-ke-san-vuon-vuon-hoa-nho-dep-cuc-moi-la.jpg" alt="roomPhoto" />
          </div>
          <div className="item">
            <img src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/05/the-myst2.png" alt="roomPhoto" />
          </div>
          <div className="item item5">
            <img src="https://xaydungvincon.com/Content/Images/FileUpload/2020/9/mau-phong-tam-nho-dep0.jpg" alt="roomPhoto" />
          </div>
        </div>
 
      </div>
      <div className="roomDes d-flex">
        <div className="desLeft">
          <div className="infoRoom">
            <div className="infoRoomName d-flex justify-content-between">
            <div>
            <h4>Toàn bộ căn hộ condotel. Chủ nhà Phong</h4>
            <span>6 khách - 2 phòng ngủ - 2 giường - 2 phòng tắm</span>
          </div>
          <div>
            <img src="https://i.pravatar.cc/70" alt="" />
          </div>
            </div>
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
