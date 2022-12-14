import React, { ChangeEvent, MouseEvent, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/example/hooks";
import { http } from "../../util/setting";
import {
  deleteRoomBookedAdminApi,
  getRoomBookedAdminApi,
  RoomBookedModel,
  setArrRoomBookedAdminApi,
} from "../../redux/reducer/adminReservatiionManageReducer";
import ModalBookRoom from "../../component/Modal/ModalAdmin/ModalBookRoom";
import ModalEditBookedRoom from "../../component/Modal/ModalAdmin/ModalEditBookedRoom";
import ModalInfoBookedRoom from "../../component/Modal/ModalAdmin/ModalInfoBookedRoom";

export default function ReservationManage() {
  const { arrRoomBookedAdmin } = useAppSelector(
    (state) => state.adminReservationManageReducer
  );
  const dispatch = useAppDispatch();
  let keywordRef = useRef("");
  let [searchParams, setSearchParams] = useSearchParams();
  let timeoutRef = useRef({});

  useEffect(() => {
    dispatch(getRoomBookedAdminApi());
    getRoomByKeyword();
    // eslint-disable-next-line
  }, [keywordRef.current]);

  const getRoomByKeyword = async () => {
    if (searchParams) {
      let keyword: string | null = searchParams.get("keyword");
      try {
        if (keyword && keyword.trim() !== "") {
          let response = await http.get(`/dat-phong/${keyword}`);
          console.log(response.data.content);
          const arrNull: RoomBookedModel[] = [];
          const resultSearch = [...arrNull, response.data.content];
          dispatch(setArrRoomBookedAdminApi(resultSearch));
          // clearTimeout(timeoutRef.current);
        } else {
          dispatch(getRoomBookedAdminApi());
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    keywordRef.current = event.target.value;
    timeoutRef.current = setTimeout(() => {
      setSearchParams({ keyword: keywordRef.current });
    }, 1000);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // ????a d??? li???u keyword ng?????i d??ng nh???p l??n url
    setSearchParams({ keyword: keywordRef.current });
  };

  const renderRoomBooked = () => {
    return arrRoomBookedAdmin.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.maPhong}</td>
          <td className="hidden-under-576px">{item.maNguoiDung}</td>
          <td>
            <ModalInfoBookedRoom item={item} />
            <ModalEditBookedRoom item={item} />
            <button
              className="btn btn-danger"
              onClick={(event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                let text = "Press a button!\nEither OK or Cancel.";
                if (window.confirm(text) === true) {
                  text = "You pressed OK!";
                  dispatch(deleteRoomBookedAdminApi(item.id));
                } else {
                  text = "You canceled!";
                }
              }}
            >
              x
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div
      className="border-start px-5 paddingX1rem-under-576px widthfull-under-991px"
      style={{ height: "calc(100vh - 50px)", width: "calc(100% - 250px)" }}
    >
      <ModalBookRoom />
      <form
        className="pb-3"
        style={{ width: "100%" }}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          className="border-bottom"
          style={{ border: "none", outline: "none", width: "200px" }}
          type="text"
          placeholder="Enter ID room"
          id="keywordRef"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(event);
          }}
        />
        <button type="submit" className="btn btn-primary me-5 ms-2">
          {" "}
          Find
        </button>
      </form>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>M?? ph??ng</th>
            <th className="hidden-under-576px">M?? ng?????i d??ng</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="w-100">{renderRoomBooked()}</tbody>
      </table>
    </div>
  );
}
