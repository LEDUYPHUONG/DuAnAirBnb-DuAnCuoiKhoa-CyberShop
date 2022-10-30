import React from "react";
import RoomListItem from "../../component/RoomListItem/RoomListItem";
import "./RoomListPage.css";
import HeaderPage from "../../component/Header/HeaderPage";
import FooterPage from "../../component/Footer/FooterPage";
import { relative } from "path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RoomListPage = () => {
  const arr = Array(10).fill(1);

  return (
    <>
      <HeaderPage />
      <div
        className="roomlist-container"
        style={{ display: "flex", width: "100%", marginTop: "80px" }}
      >
        <div
          className="roomlist-item_"
          style={{ width: "40%", padding: "0px 15px" }}
        >
          <div
            className="roomlist-item_title"
            style={{
              margin: "24px 0px 8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                marginLeft: "10px",
                marginBottom: "0",
                padding: 0,
                fontSize: "15px",
              }}
            >
              Hơn 1.000 nhà ở
            </p>
            <div className="d-flex p-2 border rounded">
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"18px",height:"14px"}}>
                <path d="M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM384 256c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm-32-80c32.8 0 61 19.7 73.3 48l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-54.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l246.7 0c12.3-28.3 40.5-48 73.3-48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm73.3 0L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-214.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 128C14.3 128 0 113.7 0 96S14.3 64 32 64l86.7 0C131 35.7 159.2 16 192 16s61 19.7 73.3 48z"/>
              </svg>
              </div>
              <div
                style={{
                  textAlign:"center",
                  marginLeft: "5px",
                  padding: 0,
                  fontSize: "15px",
                  marginRight: "5px",
                  marginTop:3
                }}
              >
                Bộ lọc
              </div>
            </div>
          </div>
          <div
            className="roomlist-item_content"
            style={{ display: "flex", width: "100%", flexWrap: "wrap" }}
          >
            {arr.map((item, index) => (
              <div key={index} style={{ width: "50%", marginTop: 20 }}>
                <RoomListItem />
              </div>
            ))}
          </div>
        </div>
        <div className="roomlist-map" style={{ width: "60%" }}>
          <iframe
            style={{ width: "100%", height: "100%", border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.455492242454!2d106.66801531433677!3d10.776383562142328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fef16459c77%3A0xf9ba55fa4f33e17d!2zMTZBIEzDqiBI4buTbmcgUGhvbmcsIFBoxrDhu51uZyAxMiwgUXXhuq1uIDEwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1665331609460!5m2!1svi!2s"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <FooterPage />
    </>
  );
};

export default RoomListPage;
