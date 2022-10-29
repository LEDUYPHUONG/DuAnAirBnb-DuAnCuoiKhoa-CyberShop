import React from "react";
import { DatePicker } from "antd";

const CarouselInfor = () => {
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
              <div className="">
                Romantic APT for Long-term Living@BEST L...
              </div>
              <div className="border-bottom" style={{ width: "10%" }}></div>
              <div className="d-flex flex-row mb-3">
                <div className="p-2"></div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarouselInfor;
