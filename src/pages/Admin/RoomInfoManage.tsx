import React, { ChangeEvent, MouseEvent, useEffect, useRef } from "react";
import ModalAddRoom from "../../component/Modal/ModalAdmin/ModalAddRoom";
import ModalEditRoom from "../../component/Modal/ModalAdmin/ModalEditRoom";
import ModalInfoRoom from "../../component/Modal/ModalAdmin/ModalInfoRoom";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/example/hooks";
import {
  deleteRoomAdminApi,
  getRoomInfoAdminApi,
  RoomInfoModel,
  setArrRoomInfoAdminApi,
  setNumberPageRoomInfoAdmin,
} from "../../redux/reducer/adminRoomInfoManageReducer";
import { http } from "../../util/setting";
import ModalUpdateImageRoomAdmin from "../../component/Modal/ModalAdmin/ModalUpdateImageRoomAdmin";

export default function RoomInfoManage() {
  const { arrRoomInfoAdmin, numberPageRoomInfoAdmin } = useAppSelector(
    (state) => state.adminRoomInfoManageReducer
  );
  const dispatch = useAppDispatch();
  let keywordRef = useRef("");
  let [searchParams, setSearchParams] = useSearchParams();
  let timeoutRef = useRef({});

  useEffect(() => {
    dispatch(getRoomInfoAdminApi(numberPageRoomInfoAdmin));
    getRoomByKeyword();
    // eslint-disable-next-line
  }, [numberPageRoomInfoAdmin, keywordRef.current]);

  const getRoomByKeyword = async () => {
    if (searchParams) {
      let keyword: string | null = searchParams.get("keyword");
      try {
        if (keyword && keyword.trim() !== "") {
          let response = await http.get(`/phong-thue/${keyword}`);
          console.log(response.data.content);
          const arrNull: RoomInfoModel[] = [];
          const resultSearch = [...arrNull, response.data.content];
          dispatch(setArrRoomInfoAdminApi(resultSearch));
          // clearTimeout(timeoutRef.current);
        } else {
          dispatch(setNumberPageRoomInfoAdmin(numberPageRoomInfoAdmin)); //set number page = 1, call 5 account firstly
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
    // đưa dữ liệu keyword người dùng nhập lên url
    setSearchParams({ keyword: keywordRef.current });
  };

  const handelClickBtnPrevSetArrRoomInfoAdmin = () => {
    if (numberPageRoomInfoAdmin === 1) {
      return null;
    } else {
      dispatch(setNumberPageRoomInfoAdmin(numberPageRoomInfoAdmin - 1));
    }
  };

  const handelClickBtnNextSetArrRoomInfoAdmin = () => {
    if (arrRoomInfoAdmin.length === 0) {
      return null;
    } else {
      dispatch(setNumberPageRoomInfoAdmin(numberPageRoomInfoAdmin + 1));
    }
  };

  const renderRoomInfo = () => {
    return arrRoomInfoAdmin.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id} </td>
          <td>{item.maViTri}</td>
          <td>
            <img
              className="shadow-sm text-nowrap"
              style={{ width: "50px", height: "50px" }}
              src={
                item.hinhAnh.trim() === ""
                  ? "/img/image-null.png"
                  : item.hinhAnh
              }
              alt="..."
            />
            <ModalUpdateImageRoomAdmin id={item.id} />
          </td>

          <td>
            <ModalInfoRoom item={item} />
            <ModalEditRoom item={item} />
            <button
              className="btn btn-danger"
              onClick={(event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                let text = "Press a button!\nEither OK or Cancel.";
                if (window.confirm(text) === true) {
                  text = "You pressed OK!";
                  dispatch(deleteRoomAdminApi(item.id));
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
      className="px-5 paddingX1rem-under-576px widthfull-under-991px"
    >
      <ModalAddRoom />
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
        <button type="submit" className="btn btn-primary me-5 ms-2 my-2">
          Find
        </button>
      </form>
      <div className="container table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th style={{minWidth: "50px"}}>ID</th>
            <th style={{minWidth: "100px"}}>Mã vị trí</th>
            <th style={{minWidth: "200px"}}>Hình ảnh</th>
            <th style={{minWidth: "200px"}}></th>
          </tr>
        </thead>
        <tbody>{renderRoomInfo()}</tbody>
      </table>
      </div>
      <div>
        <div
          className=""
          style={{ position: "fixed", zIndex: 10, bottom: 50, left: "50%", transform: 'translateX(-50%)' }}
        >
          <button
            className="btn btn-primary mx-2"
            onClick={() => {
              handelClickBtnPrevSetArrRoomInfoAdmin();
            }}
          >
            <i className="fa-solid fa-arrow-left me-2 bg-transparent"></i>
            <span className="d-none-under-991px">prev</span>
          </button>
          <button className="btn btn-primary mx-2">
            {" "}
            {numberPageRoomInfoAdmin}{" "}
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={() => {
              handelClickBtnNextSetArrRoomInfoAdmin();
            }}
          >
            <span className="d-none-under-991px">next</span>
            <i className="fa-solid fa-arrow-right ms-2 bg-transparent"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
