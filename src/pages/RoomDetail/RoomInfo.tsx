import { useState } from "react";
import { useEffect } from "react";
import { Image } from "antd";
// import Date from "./Date";
// import SelectNumberPassenger from "./SelectNumberPassenger";
import WriteComment from "./WriteComment";
// import Comment from "./Comment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getBookedRoomApi,
  getCommentApi,
  getRoomDetailApi,
  bookRoomApi,
} from "../../redux/reducer/roomDetailReducer";
//---------------import cho phần Date--------------
import { DatePicker, Space } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import moment from "moment";
import HeaderPage from "../../component/Header/HeaderPage";
import FooterPage from "../../component/Footer/FooterPage";
//---------------------import phần comment------------

import { BookingModel } from "../../Model/BookingModel";
import {
  getStore,
  getStoreJson,
  USER_ID,
  USER_LOGIN,
} from "../../util/setting";

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
  const { roomId } = useSelector((state: RootState) => state.roomlistReducer);
  const param = useParams();
  const idPhong: any = param.id;
  useEffect(() => {
    dispatch(getRoomDetailApi(idPhong));
    dispatch(getBookedRoomApi());
    dispatch(getCommentApi(idPhong));
  }, [idPhong]);

  //-----------------chức năng cho phần chọn ngày ở và tính giá tiền--------------
  const { bookingRoom } = useSelector(
    (state: RootState) => state.roomDetailReducer
  );

  //function không cho chọn những ngày trước hôm nay (vì đã qua lịch booking)
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  };
  //lấy dữ liệu ngày đã chọn từ redux
  const { numberStayDates } = useSelector(
    (state: RootState) => state.roomDetailReducer
  );
  const renderPrice = () => {
    let price = objectRoomDetail.giaTien * numberStayDates;
    return price;
  };
  //-----------------------------CHỨC NĂNG BOOK PHÒNG--------------------------------
  const arrNguoiDung: any = getStore(USER_LOGIN);
  // console.log(arrNguoiDung);

  // const nguoiDangSuDung = arrNguoiDung.filter(nguoidung => nguoidung.id )

  const idNguoiDung = getStoreJson(USER_ID);
  console.log("ID NGUOI DUNG",idNguoiDung);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let setBooking = new BookingModel();
    setBooking.id = 0;
    setBooking.maPhong = idPhong;
    setBooking.ngayDen = den.value;
    setBooking.ngayDi = roi.value;
    setBooking.soLuongKhach = numberPassenger;
    setBooking.maNguoiDung = idNguoiDung
    //set +numberPassenger vì kiểu dữ liệu là số nên add + để từ chuỗi thành số
    if (den.value == "" || roi.value == "") {
      alert("Vui lòng điền đầy đủ các trường thông tin đặt phòng");
      return null;
    } else {
      dispatch(bookRoomApi(setBooking));
    }
  };
  const den = document.getElementById("calendar_den") as HTMLInputElement;
  const roi = document.getElementById("calendar_roi") as HTMLInputElement;

  //----------------------CHỌN GIÁ TRỊ CHO INPUT CHỌN SỐ KHÁCH----------------
  const [numberPassenger, setNumberPassenger] = useState(1);

  //------------------------CHỨC NĂNG PHẦN COMMENT (RENDER VÀ ADD CMT)-----------------------------
  const { arrComment } = useSelector(
    (state: RootState) => state.roomDetailReducer
  );
  const renderComment = () => {
    if (arrComment === null) {
      return <h2>Hiện tại chưa có bình luận nào</h2>;
    }
    return arrComment.map((cmt, index) => {
      return (
        <div className="usercomment d-flex" key={index}>
          <img src={cmt.avatar} alt={cmt.tenNguoiBinhLuan} />
          <div className="commentInfo  d-flex flex-column">
            <span className="tenNguoiDung">{cmt.tenNguoiBinhLuan}</span>
            <span className="ngayDang">{cmt.ngayBinhLuan}</span>
            <div className="content">{cmt.noiDung}</div>
          </div>
        </div>
      );
    });
  };
  //--------------------------------------------------------------------------------
  return (
    <>
      <HeaderPage />
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
            <a href="#" className="me-3">
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
                            Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm,
                            được đánh giá cao và là những người cam kết mang lại
                            quãng thời gian ở tuyệt vời cho khách!
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
                <button className="col-5 translate_btn d-flex justify-content-center align-items-center tiennghi_btn">
                  <span>Hiển thị tất cả 24 tiện nghi </span>
                </button>
              </div>
            </div>
          </div>
          <div className="desRight">
            <div className="booking_area">
              <div className="price_and_rating1 d-flex justify-content-between align-items-center">
                <div className="price">
                  <span className="price_text">
                    ${objectRoomDetail.giaTien}
                  </span>
                  <span>/đêm</span>
                </div>
                <div className="textReview">
                  <i className="fa fa-star" style={{ color: "#ec6e6e" }}></i>
                  <span className="tinyText">
                    4.8 <a href="#">(10 đánh giá)</a>
                  </span>
                </div>
              </div>
              <form className="pick_options d-flex flex-column">
                <span>Ngày nhận phòng</span>
                <input type="date" name="" id="calendar_den" />
                <span>Ngày trả phòng</span>
                <input type="date" name="" id="calendar_roi" />
                <span>Số khách</span>
                <select
                  className="form-control"
                  onChange={(e) => {
                    const SelectedPassenger = e.target.value;
                    setNumberPassenger(+SelectedPassenger);
                  }}
                >
                  <option value="1" selected>
                    1 người lớn
                  </option>
                  <option value="2">2 người lớn</option>
                  <option value="3">2 người lớn 1 trẻ em (dưới 12 tuổi)</option>
                  <option value="4">
                    2 người lớn và 2 em bé (dưới 2 tuổi)
                  </option>
                </select>

                <button
                  className="datphong_btn"
                  id="submit_booking"
                  onClick={handleSubmit}
                >
                  Đặt phòng
                </button>
                <span className="text-center mt-2">
                  Bạn vẫn chưa bị trừ tiền
                </span>
              </form>
              {/* <div className="cashier">
                <div className="tien_phong d-flex justify-content-between">
                  <div className="tinh_tien">
                    <a href="#">
                      ${objectRoomDetail.giaTien} x {numberStayDates} đêm
                    </a>
                  </div>
                  <div className="thanh_tien">${renderPrice()}</div>
                </div>
                <div className="tien_dich_vu d-flex justify-content-between">
                  <div className="tinh_tien">
                    <a href="#"> Phí dịch vụ</a>
                  </div>
                  <div className="thanh_tien">$8</div>
                </div>
                <div className="tong_tien d-flex justify-content-between">
                  <div className="mt-2">
                    <span>Tổng:</span>
                  </div>
                  <div className="mt-2">${renderPrice() + 8}</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="commentary">
          <h4 className="roomName">Đánh giá</h4>
          <div className="comment">{renderComment()}</div>

          <WriteComment />
        </div>
      </div>
      <FooterPage />
    </>
  );
}
