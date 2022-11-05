import React from "react";
import { DatePicker } from "antd";
import { ProfileRoomModel } from "../../redux/reducer/profileReducer";

type Props = {
  product:ProfileRoomModel;
}

export default function CarouselInfor ({product}: Props){
  return (
    <div className="d-flex flex-column mb-3">
      <div className="col-md-6" style={{ width: "100%" }}>
        <div className="row g-0 border-bottom overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
          <div
            className="col d-flex flex-column position-static"
            style={{ paddingBottom: 20 }}
          >
            <div className="col-auto d-none d-lg-block">
              <img
                className="roomlist-item_img rounded"
                style={{ width: "100%", height: "100%" }}
                src="https://kientruccb.vn/wp-content/uploads/2020/02/mau-thiet-ke-nha-dep-truyen-cam-hung8.jpg"
                alt="..."
              />
            </div>
          </div>
          <div className="col d-flex flex-column position-static">
            <div
              className="col d-flex flex-column position-static"
              style={{ paddingLeft: 20 }}
            >
              <div className="d-inline-block " style={{ fontSize: 14 }}>
                {" "}
                Toàn bộ căn hộ dịch vụ tại Bình Thạnh
              </div>
              <div className="pb-2">
                Romantic APT for Long-term Living@BEST L...
              </div>
              <div className="border-bottom" style={{ width: "10%"}}></div>
              <ul className="infor-listgrouproom list-group list-group-horizontal pt-2">
                <li className="infor-usernumber"  style={{listStyle:"none", fontSize:14}}>{product.soLuongKhach} Khách</li>
                <li className="infor-roomtype" style={{marginLeft:20,fontSize:14}}>Phòng Studio</li>
                <li className="infor-bednumber" style={{marginLeft:20,fontSize:14}}>1 giường</li>
                <li className="infor-bathnumber" style={{marginLeft:20,fontSize:14}}>1 phòng tắm</li>
              </ul>
              <ul className="infor-machine list-group list-group-horizontal pt-2">
                <li className="infor-wifi"  style={{listStyle:"none", fontSize:14}}>Wifi</li>
                <li className="infor-kitchen" style={{marginLeft:20,fontSize:14}}>Bếp</li>
                <li className="infor-air" style={{marginLeft:20,fontSize:14}}>Điều hòa nhiệt độ</li>
                <li className="infor-machine" style={{marginLeft:20,fontSize:14}}>Máy giặt</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
