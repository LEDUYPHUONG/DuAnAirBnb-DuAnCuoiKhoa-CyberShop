import React, { ChangeEvent, MouseEvent, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/example/hooks";
import ModalAddLocation from "../../component/Modal/ModalAdmin/ModalAddLocation";
import {
  deleteLocationAdminApi,
  getLocationAdminApi,
  LocationModel,
  setArrLocationAdminApi,
  setNumberPageAdmin,
} from "../../redux/reducer/adminLocationReducer";
import { useSearchParams } from "react-router-dom";
import { http } from "../../util/setting";
import ModalEditLocation from "../../component/Modal/ModalAdmin/ModalEditLocation";
import ModalUpdateImageLocationAdmin from "../../component/Modal/ModalAdmin/ModalUpdateImageLocationAdmin";
import ModalInfoLocationAdmin from "../../component/Modal/ModalAdmin/ModalInfoLocationAdmin";

export default function LocationInfoManage() {
  const { arrLocationAdmin, numberPageAdmin } = useAppSelector(
    (state) => state.adminLocationReducer
  );
  const dispatch = useAppDispatch();

  let keywordRef = useRef("");
  let [searchParams, setSearchParams] = useSearchParams();
  let timeoutRef = useRef({});

  useEffect(() => {
    dispatch(getLocationAdminApi(numberPageAdmin));
    getLocationByKeyword();
    // eslint-disable-next-line
  }, [numberPageAdmin, keywordRef.current]);

  const getLocationByKeyword = async () => {
    if (searchParams) {
      let keyword: string | null = searchParams.get("keyword");
      try {
        if (keyword && keyword.trim() !== "") {
          let response = await http.get(`/vi-tri/${keyword}`);
          console.log(response.data.content);
          const arrNull: LocationModel[] = [];
          const resultSearch = [...arrNull, response.data.content];
          dispatch(setArrLocationAdminApi(resultSearch));
          // clearTimeout(timeoutRef.current);
        } else {
          dispatch(setNumberPageAdmin(numberPageAdmin)); //set number page = 1, call 5 account firstly
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

  const handelClickBtnPrevSetArrLocationAdmin = () => {
    if (numberPageAdmin === 1) {
      return null;
    } else {
      dispatch(setNumberPageAdmin(numberPageAdmin - 1));
    }
  };

  const handelClickBtnNextSetArrLocationAdmin = () => {
    if (arrLocationAdmin.length === 0) {
      return null;
    } else {
      dispatch(setNumberPageAdmin(numberPageAdmin + 1));
    }
  };

  const renderLocation = () => {
    return arrLocationAdmin.map((item, index) => {
      return (
        <tr key={index}>
          <td> {item.id} </td>
          <td>{item.tenViTri}</td>
          <td>
            <img
              className="shadow-sm hidden-under-576px"
              style={{ width: "50px", height: "50px" }}
              src={
                item.hinhAnh.trim() === ""
                  ? "/img/image-null.png"
                  : item.hinhAnh
              }
              alt="..."
            />
            <ModalUpdateImageLocationAdmin id={item.id} />
          </td>
          <td>
            <ModalInfoLocationAdmin item={item} />
            <ModalEditLocation item={item} />
            <button
              className="btn btn-danger"
              onClick={(event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                let text = "Press a button!\nEither OK or Cancel.";
                if (window.confirm(text) === true) {
                  text = "You pressed OK!";
                  dispatch(deleteLocationAdminApi(item.id));
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
      <ModalAddLocation />
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
          placeholder="Enter ID Location"
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
              <th style={{minWidth: "150px"}}>Tên Vị trí</th>
              <th style={{minWidth: "50px"}}>Hình ảnh</th>
              <th style={{minWidth: "250px"}}></th>
            </tr>
          </thead>
          <tbody>{renderLocation()}</tbody>
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
              handelClickBtnPrevSetArrLocationAdmin();
            }}
          >
            <i className="fa-solid fa-arrow-left me-2 bg-transparent"></i>
            <span className="d-none-under-991px">prev</span>
          </button>
          <button className="btn btn-primary mx-2"> {numberPageAdmin} </button>
          <button
            className="btn btn-primary mx-2"
            onClick={() => {
              handelClickBtnNextSetArrLocationAdmin();
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
