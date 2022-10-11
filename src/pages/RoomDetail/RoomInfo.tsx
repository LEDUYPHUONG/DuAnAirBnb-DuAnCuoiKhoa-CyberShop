import React from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import { Gallery } from "react-grid-gallery";

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
          <div className="item1">
            <img
              src="http://xuonggooccho.com/wp-content/uploads/2020/10/trang-tri-noi-that-phong-ngu-dep.jpg"
              alt="roomPhoto"
            />
          </div>
          <div className="item">
            <img
              src="https://www.cleanipedia.com/images/5iwkm8ckyw6v/2BFigZgUEMCk0v55yfycxa/e9ae78c9f4ce46f417aa1c1b03f98333/bm9pLXRoYXQtcGhvbmcta2hhY2gtZ29tLW5odW5nLWdpLmpwZWc/990w-660h/n%E1%BB%99i-th%E1%BA%A5t-ph%C3%B2ng-kh%C3%A1ch-g%E1%BB%93m-nh%E1%BB%AFng-g%C3%AC-v%C3%A0-c%C3%A1ch-l%E1%BB%B1a-ch%E1%BB%8Dn-ph%C3%B9-h%E1%BB%A3p.jpg"
              alt="roomPhoto"
            />
          </div>
          <div className="item item3">
            <img
              src="https://ancu.me/images/201810/man-nhan-55-mau-thiet-ke-san-vuon-vuon-hoa-nho-dep-cuc-moi-la/man-nhan-55-mau-thiet-ke-san-vuon-vuon-hoa-nho-dep-cuc-moi-la.jpg"
              alt="roomPhoto"
            />
          </div>
          <div className="item">
            <img
              src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/05/the-myst2.png"
              alt="roomPhoto"
            />
          </div>
          <div className="item item5">
            <img
              src="https://xaydungvincon.com/Content/Images/FileUpload/2020/9/mau-phong-tam-nho-dep0.jpg"
              alt="roomPhoto"
            />
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
                <img src="https://i.pravatar.cc" alt="" />
              </div>
            </div>
            <div className="infoRoomFromOwner">
              <div className="ownerInfoTop">
                <ul>
                  <li className="d-flex">
                    <div className="infoIcon">
                      <i className="fa fa-home"></i>
                    </div>
                    <div className="infoText">
                      <div className="textTop">
                        <span>Toàn bộ nhà</span>
                      </div>
                      <div className="text_bott">
                        <span>
                          Bạn sẽ có toàn bộ chung cư cao cấp cho riêng mình
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="infoIcon">
                      <i className="fa-solid fa-spray-can-sparkles"></i>
                    </div>
                    <div className="infoText">
                      <div className="textTop">
                        <span>Vệ sinh tăng cường</span>
                      </div>
                      <div className="text_bott">
                        <span>
                          Chủ nhà này đã cam kết thực hiện 5 bước vệ sinh tăng
                          cường của Airbnb. <a href="#">Hiển thị thêm</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="infoIcon">
                      <i className="fa-brands fa-gratipay"></i>
                    </div>
                    <div className="infoText">
                      <div className="textTop">
                        <span>Phong là chủ nhà siêu cấp</span>
                      </div>
                      <div className="text_bott">
                        <span>
                          Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được
                          đánh giá cao và là những người cam kết mang lại quãng
                          thời gian ở tuyệt vời cho khách!
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="infoIcon">
                      <i className="fa-regular fa-calendar-minus"></i>
                    </div>
                    <div className="infoText">
                      <div className="textTop">
                        <span>Miễn phí hủy trong 48 giờ</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="owner_Translate">
                <button className="col-12 translate_btn d-flex justify-content-between align-items-center">
                  <span>Dịch sang Tiếng Việt</span>
                  <i className="fa-solid fa-language"></i>
                </button>
                <div className="gioithieu">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
                  laboriosam, provident illum magnam dolore culpa consequuntur
                  minima ducimus inventore deserunt, quasi atque voluptatibus
                  maxime voluptate consectetur odio maiores, porro nihil itaque
                  adipisci neque. Consequatur deleniti, temporibus minus atque
                  recusandae possimus dolorum ullam praesentium excepturi
                  quisquam culpa tenetur...
                  <br />
                  <br />
                  <a href="#">Hiển thị thêm</a>
                </div>
              </div>
            </div>
            <div className="convenience">
              <ul className="d-flex flex-wrap">
                <div className="col-6">
                <li className="d-flex align-items-center">
                  <div className="convi_icon">
                  <i className="fa-solid fa-kitchen-set"></i>
                  </div>
                  <div className="convi_text">
                    <div className="textTop">
                      <span>Bếp</span>
                    </div>
                
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="convi_icon">
                  <i className="fa-solid fa-kitchen-set"></i>
                  </div>
                  <div className="convi_text">
                    <div className="textTop">
                      <span>Bếp</span>
                    </div>
                
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="convi_icon">
                  <i className="fa-solid fa-kitchen-set"></i>
                  </div>
                  <div className="convi_text">
                    <div className="textTop">
                      <span>Bếp</span>
                    </div>
                
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="convi_icon">
                  <i className="fa-solid fa-kitchen-set"></i>
                  </div>
                  <div className="convi_text">
                    <div className="textTop">
                      <span>Bếp</span>
                    </div>
                
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="convi_icon">
                  <i className="fa-solid fa-kitchen-set"></i>
                  </div>
                  <div className="convi_text">
                    <div className="textTop">
                      <span>Bếp</span>
                    </div>
                
                  </div>
                </li>
                </div>

                <div className="col-6">
                <li className="d-flex align-items-center">
                  <div className="convi_icon">
                  <i className="fa-solid fa-kitchen-set"></i>
                  </div>
                  <div className="convi_text">
                    <div className="textTop">
                      <span>Bếp</span>
                    </div>
                
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="convi_icon">
                  <i className="fa-solid fa-kitchen-set"></i>
                  </div>
                  <div className="convi_text">
                    <div className="textTop">
                      <span>Bếp</span>
                    </div>
                
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="convi_icon">
                  <i className="fa-solid fa-kitchen-set"></i>
                  </div>
                  <div className="convi_text">
                    <div className="textTop">
                      <span>Bếp</span>
                    </div>
                
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="convi_icon">
                  <i className="fa-solid fa-kitchen-set"></i>
                  </div>
                  <div className="convi_text">
                    <div className="textTop">
                      <span>Bếp</span>
                    </div>
                
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="convi_icon">
                  <i className="fa-solid fa-kitchen-set"></i>
                  </div>
                  <div className="convi_text">
                    <div className="textTop">
                      <span>Bếp</span>
                    </div>
                
                  </div>
                </li>
                </div>
                
            
              </ul>
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
