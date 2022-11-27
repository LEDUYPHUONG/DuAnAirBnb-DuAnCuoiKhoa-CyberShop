import React, { useEffect } from "react";
import RoomListItem from "../../component/RoomListItem/RoomListItem";
import HeaderPage from "../../component/Header/HeaderPage";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import {
  getRoomidAction,
  getRoomlistApi,
  RoomlistModel,
} from "../../redux/reducer/roomlistReducer";
import { useAppDispatch } from "../../redux/example/hooks";
import FooterPage from "../../component/Footer/FooterPage";

type Props = {
  title?: string;
};

export default function RoomListPage({ title }: Props) {
  const { arrRoomlist } = useSelector(
    (state: RootState) => state.roomlistReducer
  );
  const { productSearch } = useSelector(
    (state: RootState) => state.productReducer
  );
  console.log(productSearch);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRoomlistApi(productSearch.id));
    // eslint-disable-next-line
  }, [productSearch]);

  return (
    <>
      <HeaderPage />
      <div
        className="roomlist-container"
        style={{ display: "flex", width: "100%", marginTop: "80px", paddingBottom: '47px'}}
      >
        <div
          className="roomlist-item_"
          style={{ width: "50%", padding: "0px 15px" }}
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
                marginLeft: "12px",
                marginBottom: "0",
                padding: 0,
                fontSize: "15px",
              }}
            >
              Ở vị trí này có {arrRoomlist.length} nhà ở
            </p>

            <div>
              <div style={{ padding: "7px 0", marginRight: 10 }}>
                <span
                  className="d-flex border rounded-4"
                  style={{
                    padding: "2px 10px",
                    width: 120,
                    height: 50,
                    paddingRight: 3,
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: 5,
                    }}
                  >
                    <img
                      src="./img/setting-lines.png"
                      alt=""
                      style={{ width: 12, height: 12, marginLeft: 20 }}
                    />
                  </span>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    Bộ lọc
                  </span>
                </span>
              </div>
            </div>
          </div>
          
          <div className="d-block-under-991px roomlist-item_content d-flex flex-wrap">
            {arrRoomlist.map((prod:RoomlistModel,index:number ) =>
            <NavLink to={`/detailroom/${prod.id}`} style={{width:"50%", textDecorationLine:'none'}} key={index}>
              <div key={index} style={{ marginTop: 20 }} onClick={() => {
                dispatch(getRoomidAction(prod))
              }}>
                {RoomListItem({product:prod})}
              </div>
            </NavLink>
              
            )}
          </div>
        </div>
        <div className="roomlist-map" style={{position: 'fixed', top: 80, right: 0, width: "50%", height: 'calc(100vh - 127px)' }}>
          <iframe
            style={{ width: "100%", height: "100%", border: 0 }}
            title = 'Map demo'
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1125985.4022361215!2d106.75118808994623!3d10.894440694941805!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1667536336616!5m2!1svi!2s"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <FooterPage />
    </>
  );
}
