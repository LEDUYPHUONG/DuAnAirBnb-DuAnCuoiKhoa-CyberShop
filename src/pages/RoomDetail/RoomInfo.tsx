import React from "react";
import { useEffect } from "react";
import { Image } from "antd";
import Date from "./Date";
import SelectNumberPassenger from "./SelectNumberPassenger";
import WriteComment from "./WriteComment";
import Comment from "./Comment";
import { NavLink, useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getBookedRoomApi,
  getRoomDetailApi,
} from "../../redux/reducer/roomDetailReducer";
import { values } from "lodash";

type Props = {
  title?: string;
};

export default function RoomInfo({ title }: Props) {
  const dispatch: AppDispatch = useDispatch();
  const { objectRoomDetail } = useSelector(
    (state: RootState) => state.roomDetailReducer
  );
  const { arrBookedRoom } = useSelector(
    (state: RootState) => state.roomDetailReducer
  );
  // console.log(arrBookedRoom);
  const param = useParams();
  const roomId = param.id;
  console.log("param nè", roomId);

 
  useEffect(() => {
    dispatch(getRoomDetailApi(roomId));
    dispatch(getBookedRoomApi())

  }, [roomId]);

  return (
    <div className="container">
      <h4 className="roomName">{objectRoomDetail.tenPhong}</h4>
      <div className="review d-flex justify-content-between">
        <div className="d-flex ">
          <div className="textReview">
            <i className="fa fa-star" style={{ color: "#ec6e6e" }}></i>
            <span className="tinyText">
              4.8 (<a href="#">10 đánh giá</a>)
            </span>
          </div>
          <div className="textReview">
            <i className="fa fa-heart" style={{ color: "#ec6e6e" }}></i>
            <span className="tinyText">Chủ nhà siêu cấp</span>
          </div>
          <div className="textReview">
            <i className="fa fa-map-marker" style={{ color: "#ec6e6e" }}></i>
            <span className="tinyText">
              <a href="#">Thành phố Vũng Tàu, Bà Rịa-Vũng Tàu, VN</a>
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
          <Image.PreviewGroup>
            <div className="item1">
              <Image
                height={387}
                src={objectRoomDetail.hinhAnh}
                alt="roomPhoto"
              />
            </div>
            <div className="item">
              <Image
                height={191}
                width={320}
                src="https://www.cleanipedia.com/images/5iwkm8ckyw6v/2BFigZgUEMCk0v55yfycxa/e9ae78c9f4ce46f417aa1c1b03f98333/bm9pLXRoYXQtcGhvbmcta2hhY2gtZ29tLW5odW5nLWdpLmpwZWc/990w-660h/n%E1%BB%99i-th%E1%BA%A5t-ph%C3%B2ng-kh%C3%A1ch-g%E1%BB%93m-nh%E1%BB%AFng-g%C3%AC-v%C3%A0-c%C3%A1ch-l%E1%BB%B1a-ch%E1%BB%8Dn-ph%C3%B9-h%E1%BB%A3p.jpg"
                alt="roomPhoto"
              />
            </div>
            <div className="item item3">
              <Image
                height={191}
                width={320}
                src="https://ancu.me/images/201810/man-nhan-55-mau-thiet-ke-san-vuon-vuon-hoa-nho-dep-cuc-moi-la/man-nhan-55-mau-thiet-ke-san-vuon-vuon-hoa-nho-dep-cuc-moi-la.jpg"
                alt="roomPhoto"
              />
            </div>
            {/* <div className="item">
              <Image
                className="img"
                height={191}
                width={320}
                src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/05/the-myst2.png"
                alt="roomPhoto"
              />
            </div>
            <div className="item item5">
              <Image
                height={191}
                width={320}
                src="https://xaydungvincon.com/Content/Images/FileUpload/2020/9/mau-phong-tam-nho-dep0.jpg"
                alt="roomPhoto"
              />
            </div> */}
          </Image.PreviewGroup>
        </div>
      </div>
      <div className="roomDes d-flex">
        <div className="desLeft">
          <div className="infoRoom">
            <div className="infoRoomName d-flex justify-content-between">
              <div>
                <h4>Toàn bộ căn hộ condotel. Chủ nhà Phong</h4>
                <span>
                  {objectRoomDetail.khach} khách - {objectRoomDetail.phongNgu}{" "}
                  phòng ngủ - {objectRoomDetail.giuong} giường -{" "}
                  {objectRoomDetail.phongTam} phòng tắm
                </span>
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
                  {objectRoomDetail.moTa}
                  <br />
                  <br />
                  <a href="#">Hiển thị thêm</a>
                </div>
              </div>
            </div>
            <div className="convenience">
              <ul className="d-flex flex-wrap">
                <div className="col-6">
                  <li
                    className={
                      "d-flex align-items-center " +
                      `${objectRoomDetail.bep ? "" : "d-none"}`
                    }
                  >
                    <div className="convi_icon">
                      <i className="fa-solid fa-kitchen-set"></i>
                    </div>
                    <div className="convi_text">
                      <div className="textTop">
                        <span>Bếp</span>
                      </div>
                    </div>
                  </li>
                  <li
                    className={
                      "d-flex align-items-center " +
                      `${objectRoomDetail.tivi ? "" : "d-none"}`
                    }
                  >
                    <div className="convi_icon">
                      <i className="fa-solid fa-tv"></i>
                    </div>
                    <div className="convi_text">
                      <div className="textTop">
                        <span>TV và truyền hình cáp tiêu chuẩn</span>
                      </div>
                    </div>
                  </li>
                  <li
                    className={
                      "d-flex align-items-center " +
                      `${objectRoomDetail.dieuHoa ? "" : "d-none"}`
                    }
                  >
                    <div className="convi_icon">
                      <i className="fa-regular fa-snowflake"></i>
                    </div>
                    <div className="convi_text">
                      <div className="textTop">
                        <span>Điều hòa nhiệt độ</span>
                      </div>
                    </div>
                  </li>
                  <li
                    className={
                      "d-flex align-items-center " +
                      `${objectRoomDetail.banLa ? "" : "d-none"}`
                    }
                  >
                    <div className="convi_icon">
                      <i className="fa-solid fa-temperature-arrow-up"></i>
                    </div>
                    <div className="convi_text">
                      <div className="textTop">
                        <span>Bàn là</span>
                      </div>
                    </div>
                  </li>
                  <li
                    className={
                      "d-flex align-items-center " +
                      `${objectRoomDetail.doXe ? "" : "d-none"}`
                    }
                  >
                    <div className="convi_icon">
                      <i className="fa-solid fa-square-parking"></i>
                    </div>
                    <div className="convi_text">
                      <div className="textTop">
                        <span>Bãi để xe</span>
                      </div>
                    </div>
                  </li>
                </div>

                <div className="col-6">
                  <li
                    className={
                      "d-flex align-items-center " +
                      `${objectRoomDetail.wifi ? "" : "d-none"}`
                    }
                  >
                    <div className="convi_icon">
                      <i className="fa-solid fa-wifi"></i>
                    </div>
                    <div className="convi_text">
                      <div className="textTop">
                        <span>Wifi</span>
                      </div>
                    </div>
                  </li>
                  <li
                    className={
                      "d-flex align-items-center " +
                      `${objectRoomDetail.mayGiat ? "" : "d-none"}`
                    }
                  >
                    <div className="convi_icon">
                      <i className="fa-solid fa-socks"></i>
                    </div>
                    <div className="convi_text">
                      <div className="textTop">
                        <span>Máy giặt</span>
                      </div>
                    </div>
                  </li>
                  <li
                    className={
                      "d-flex align-items-center " +
                      `${objectRoomDetail.hoBoi ? "" : "d-none"}`
                    }
                  >
                    <div className="convi_icon">
                      <i className="fa-solid fa-person-swimming"></i>
                    </div>
                    <div className="convi_text">
                      <div className="textTop">
                        <span>Hồ bơi</span>
                      </div>
                    </div>
                  </li>
                  <li
                    className={
                      "d-flex align-items-center " +
                      `${objectRoomDetail.banUi ? "" : "d-none"}`
                    }
                  >
                    <div className="convi_icon">
                      <i className="fa-solid fa-icicles"></i>
                    </div>
                    <div className="convi_text">
                      <div className="textTop">
                        <span>Tủ lạnh</span>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="convi_icon">
                      <i className="fa-regular fa-calendar-days"></i>
                    </div>
                    <div className="convi_text">
                      <div className="textTop">
                        <span>Cho phép ở dài hạn</span>
                      </div>
                    </div>
                  </li>
                </div>
              </ul>
              <button className="col-5 translate_btn d-flex justify-content-center align-items-center">
                <span>Hiển thị tất cả 24 tiện nghi </span>
              </button>
            </div>
          </div>
        </div>
        <div className="desRight">
          <div className="booking_area">
            <div className="price_and_rating1 d-flex justify-content-between align-items-center">
              <div className="price">
                <span className="price_text">${objectRoomDetail.giaTien}</span>
                <span>/đêm</span>
              </div>
              <div className="textReview">
                <i className="fa fa-star" style={{ color: "#ec6e6e" }}></i>
                <span className="tinyText">
                  4.8 <a href="#">(10 đánh giá)</a>
                </span>
              </div>
            </div>
            <div className="pick_options d-flex flex-column">
              <Date />
              <SelectNumberPassenger />
              <button className="datphong_btn">Đặt phòng</button>
              <span className="text-center mt-2">Bạn vẫn chưa bị trừ tiền</span>
            </div>
            <div className="cashier">
              <div className="tien_phong d-flex justify-content-between">
                <div className="tinh_tien">
                  <a href="#">$44 x 5 đêm</a>
                </div>
                <div className="thanh_tien">$221</div>
              </div>
              <div className="tien_dich_vu d-flex justify-content-between">
                <div className="tinh_tien">
                  <a href="#"> Phí dịch vụ</a>
                </div>
                <div className="thanh_tien">$31</div>
              </div>
              <div className="tong_tien d-flex justify-content-between">
                <div className="mt-2">
                  <span>Tổng:</span>
                </div>
                <div className="mt-2">$252</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="commentary">
        <h4 className="roomName">Đánh giá</h4>
        <Comment />
        <WriteComment />
      </div>
    </div>
  );
}
