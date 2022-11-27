import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DropdownHeader from "../../Dropdown/DropdownHeader";
import React, { useEffect, useState, ChangeEvent } from "react";
import DatePickerAntd from "../../datePickerAntd/DatePickerAntd";
import { RootState } from "../../../redux/configStore";
import { setKeySearch } from "../../../redux/reducer/keySearchReducer";
import { useAppDispatch } from "../../../redux/example/hooks";
import { useSelector } from "react-redux";
import { arrLocationSearch } from "../../../data/api/dataDemoSearch";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import {
  ProductModel,
  setProductSearch,
} from "../../../redux/reducer/productReducer";
import { http } from "../../../util/setting";
import "bootstrap/dist/js/bootstrap.js";
import useDebounce from "../../Debounce/Debounce";

function ModalHeader() {
  const [show, setShow] = useState(false);
  const [showModalLocationList, setShowModalLocationList] = useState(true);
  const { productSearch } = useSelector(
    (state: RootState) => state.productReducer
  );
  const arrSearchLocation: ProductModel[] = arrLocationSearch;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [arrSearch, setArrSearch] = useState([]);
  const [valueInputSearch, setValueInputSearch] = useState(
    (searchParams && searchParams.get("keyword")) || ""
  );
  const debouncedValue = useDebounce<string>(valueInputSearch, 500);

  const getLocationByKeyword = async () => {
    try {
      const response = await http.get(
        "/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=5&keyword=" +
          valueInputSearch
      );
      setArrSearch(response.data.content.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getLocationByKeyword();
    // eslint-disable-next-line
  }, [debouncedValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInputSearch(event.target.value);
    setSearchParams({ keyword: event.target.value });
    setShowModalLocationList(true);
  };

  const handelClickMoveToRoomListPage = () => {
    navigate("/roomlist");
    console.log("productSearch in productReducer", productSearch);
  };

  const handleClickSetKeySearchLocation = (item: ProductModel) => {
    console.log(`${item.tenViTri}, ${item.tinhThanh}, ${item.quocGia}`);
    const keywork = `${item.tenViTri}, ${item.tinhThanh}, ${item.quocGia}`;
    setValueInputSearch(keywork);
    setSearchParams({ keyword: keywork });
    dispatch(setProductSearch(item));
  };

  const renderLocationByKeyword = () => {
    return arrSearch.map((location: ProductModel, index) => {
      return (
        <div className="location-search" key={index}>
          <button
            id="hover-bg-white"
            className="paddingX1rem-under-576px btn btn-outline-light py-1 px-5 my-1 text-start d-flex flex-nowrap justify-content-start align-items-center w-100"
            onClick={() => {
              handleClickSetKeySearchLocation(location);
              setShowModalLocationList(false);
            }}
          >
            <div
              id="hover-color-white"
              className="out-icon-location rounded-4 text-center text-dark"
              style={{
                fontSize: "25px",
                background: "#ebebeb",
                width: "60px",
                height: "60px",
                lineHeight: "60px",
              }}
            >
              <i id="hover-bg-gray" className="fa-solid fa-location-dot"></i>
            </div>
            <div
              className="text-location text-dark ps-4 fst-normal text-wrap"
              style={{ fontFamily: "Roboto-Regular", fontSize: "18px" }}
            >
              {location.tenViTri}, {location.tinhThanh}, {location.quocGia}
            </div>
          </button>
        </div>
      );
    });
  };

  const handleClickSetKeySearch = (item: ProductModel) => {
    if (item.tenViTri === "Tìm kiếm linh hoạt") {
      dispatch(setKeySearch(""));
    } else {
      dispatch(setKeySearch(`${item.tenViTri}`));
    }
  };

  const renderItemSearch = (arrLocation: ProductModel[]) => {
    return arrLocation.map((item, index) => {
      return (
        <div key={index} className="col-4 pt-5">
          <div
            className="img-out mx-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleClickSetKeySearch(item);
            }}
          >
            <div className="img-in border border-dark rounded-5 overflow-hidden">
              <img
                width={"100%"}
                height={"100%"}
                src={item.hinhAnh}
                alt="..."
              />
            </div>
            <div className="title ps-2 pt-3 ">
              <p
                className="mb-0"
                style={{ fontFamily: "Roboto-Regular", fontSize: "14px" }}
              >
                {item.tenViTri}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  // style for background of 1 button (button search modal)
  const bgImgBtnSearch =
    "radial-gradient(circle at center right, rgb(189, 30, 89) 0%, rgb(189, 30, 89) 27.5%, rgb(215, 4, 102) 40%, rgb(227, 28, 95) 57.5%, rgb(230, 30, 77) 75%, rgb(255, 56, 92) 100%)";

  return (
    <>
      <Button
        id="hover-color-white"
        variant="outline-light"
        onClick={() => setShow(true)}
        className="order-bar rounded-pill"
        style={{
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          border: "1px solid rgba(204, 204, 204, 0.5)",
        }}
      >
        <div className="location d-flex justify-content-between align-items-center rounded-pill">
          <div
            className="btn text-dark"
            style={{ fontSize: "14px", outline: "none" }}
          >
            Địa điểm bất kì
          </div>
          <div
            className="hidden-under-768px"
            style={{ width: 1, height: 24, background: "#cccccc" }}
          ></div>
          <div
            className="hidden-under-768px btn text-dark"
            style={{ fontSize: "14px", outline: "none" }}
          >
            Tuần bất kì
          </div>
          <div
            className="hidden-under-768px"
            style={{ width: 1, height: 24, background: "#cccccc" }}
          ></div>
          <div
            className="hidden-under-768px btn text-dark"
            style={{
              opacity: 0.5,
              fontFamily: "Roboto-Regular",
              fontSize: "14px",
              outline: "none",
            }}
          >
            Thêm khách
          </div>
          <div
            style={{
              background: "red",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              lineHeight: "35px",
              textAlign: "center",
            }}
          >
            <i className="fa-solid fa-magnifying-glass p-2"></i>
          </div>
        </div>
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="vw-100 m-0 rounded-0"
        contentClassName="vw-100 m-0 rounded-0"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body className="p-0">
          <div
            className="header-top m-auto"
            style={{ height: "80px", padding: "0 48px" }}
          >
            <div className="header d-flex justify-content-between align-items-center">
              <NavLink to="/">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "80px" }}
                >
                  <div className="show-under-768px d-none">
                    <img
                      style={{ height: "33px", cursor: "pointer" }}
                      src="/img/home/logo.png"
                      alt="..."
                    />
                  </div>
                  <div className="hidden-under-768px">
                    <img
                      style={{ height: "33px", cursor: "pointer" }}
                      src="/img/home/logo-text.png"
                      alt="..."
                    />
                  </div>
                </div>
              </NavLink>
              <div className="order-bar-modal">
                <div
                  className="location d-flex justify-content-between align-items-center"
                  style={{ padding: "5px 7px" }}
                >
                  <button className="btn text-dark" type="button">
                    <span
                      className="hidden-under-768px"
                      style={{
                        fontFamily: "Roboto-Regular",
                        fontSize: "16px",
                        outline: "none",
                        borderRadius: "0px",
                      }}
                    >
                      Chổ ở
                    </span>
                  </button>
                  <button className="btn text-dark">
                    <span
                      style={{
                        fontFamily: "Roboto-Regular",
                        fontSize: "16px",
                        outline: "none",
                        borderRadius: "0px",
                      }}
                    >
                      Trải nghiệm
                    </span>
                  </button>
                  <button className="hidden-under-768px btn text-dark">
                    <span
                      style={{
                        fontFamily: "Roboto-Regular",
                        fontSize: "16px",
                        outline: "none",
                        borderRadius: "0px",
                      }}
                    >
                      Trải nghiệm trực tuyến
                    </span>
                  </button>
                </div>
              </div>
              <div className="singin-singout">
                <div className="singin-singout">
                  <div className="location d-flex justify-content-between align-items-center">
                    <div style={{ width: 1, height: 0 }}></div>
                    <button
                      className="hidden-under-768px btn-BAhost-globe btn rounded-pill text-red"
                      style={{
                        fontSize: "14px",
                        outline: "none",
                        height: "44px",
                        padding: "0 15px",
                      }}
                    >
                      Trở thành chủ nhà
                    </button>
                    <button
                      className="hidden-under-768px btn-BAhost-globe btn rounded-pill text-dark"
                      style={{ outline: "none", height: "44px", width: "44px" }}
                    >
                      <i className="fa-solid fa-globe"></i>
                    </button>
                    <DropdownHeader />
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-main m-auto">
            <div className="header d-flex justify-content-center align-items-center pb-4">
              <form>
                <div className="order-bar-modal rounded-pill">
                  <div
                    className="location d-flex justify-content-between align-items-center rounded-pill"
                    style={{ background: "#EBEBEB" }}
                  >
                    <button
                      className="width200-btn-under-768px btn text-dark d-flex flex-column rounded-pill buttonUserActive buttonUserHover"
                      style={{
                        fontSize: "14px",
                        outline: "none",
                        padding: "10px 25px",
                        width: "300px",
                      }}
                      type="button"
                    >
                      <span id="hover-bg-dddddd">Địa điểm</span>
                      <input
                        type="text"
                        value={valueInputSearch}
                        placeholder="Tìm kiếm điểm đến"
                        style={{
                          opacity: 0.5,
                          fontFamily: "Roboto-Regular",
                          fontSize: "14px",
                          outline: "none",
                          borderRadius: "0px",
                          width: "100%",
                        }}
                        id="keywordRef hover-bg-dddddd"
                        onChange={handleChange}
                      />
                    </button>
                    <div
                      style={{
                        width: 1,
                        height: 24,
                        background: "#cccccc",
                      }}
                    ></div>
                    <button
                      className="d-none btn text-dark d-flex flex-column rounded-pill buttonUserHover"
                      style={{
                        fontSize: "14px",
                        outline: "none",
                        padding: "10px 25px",
                        width: "300px",
                      }}
                      onClick={(event) => {
                        event.preventDefault();
                      }}
                    >
                      <span>Ngày</span>
                      <input
                        className="book-day"
                        type="text"
                        disabled
                        placeholder="Thêm ngày"
                        style={{
                          opacity: 0.5,
                          fontFamily: "Roboto-Regular",
                          fontSize: "14px",
                          outline: "none",
                          borderRadius: "0px",
                        }}
                      />
                    </button>
                    <div
                      style={{
                        width: 1,
                        height: 24,
                        background: "#cccccc",
                      }}
                    ></div>

                    <button
                      type="button"
                      className="width200-btn-under-768px width150-btn-under-576px btn text-dark d-flex flex-row justify-content-end align-items-center rounded-pill buttonUserHover "
                      style={{
                        width: "300px",
                        padding: "7px 7px 7px 25px",
                      }}
                      onClick={() => {
                        handelClickMoveToRoomListPage();
                        setShow(false);
                        setValueInputSearch("");
                      }}
                    >
                      <span
                        className="d-none text-dark d-flex flex-column align-items-start "
                        style={{
                          fontFamily: "Roboto-Regular",
                          fontSize: "14px",
                        }}
                      >
                        <span>Khách</span>
                        <input
                          className="book-people"
                          type="text"
                          disabled
                          placeholder="Thêm khách"
                          style={{
                            opacity: 0.5,
                            fontFamily: "Roboto-Regular",
                            fontSize: "14px",
                            outline: "none",
                            borderRadius: "0px",
                            width: "100px",
                          }}
                        />
                      </span>
                      <span
                        className="animal-hover-move-left-5px btn d-flex justify-content-center align-items-center"
                        style={{
                          backgroundImage: bgImgBtnSearch,
                          backgroundSize: "200% 200%",
                          border: "none",
                          color: "white",
                          borderRadius: "50px",
                          width: "130px",
                          height: "48px",
                          lineHeight: "14px",
                          textAlign: "center",
                          outline: "none",
                        }}
                      >
                        <i
                          className="fa-solid fa-magnifying-glass"
                          style={{
                            fontSize: "14px",
                            lineHeight: "14px",
                            width: "14px",
                            height: "14px",
                            marginRight: "5px",
                          }}
                        ></i>
                        <span>Tìm kiếm</span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            className={
              showModalLocationList
                ? "width350-modal-under-576px modal-content modal-lg rounded-5 overflow-hidden"
                : "width350-modal-under-576px modal-content modal-lg rounded-5 overflow-hidden d-none"
            }
            style={{
              width: "600px",
              zIndex: 10,
              position: "fixed",
              top: 171,
              left: "50%",
              background: "#ffffff",
              transform: "translateX(-50%)",
            }}
          >
            <div
              className="location-inner py-5 ps-4 pe-3 overflow-auto"
              style={{ height: "500px" }}
            >
              {renderLocationByKeyword()}
            </div>
          </div>
          <div
            className="d-none modal-content modal-lg  rounded-5 overflow-hidden"
            style={{
              width: "600px",
              zIndex: 10,
              position: "fixed",
              top: 161,
              left: "50%",
              background: "#ffffff",
              transform: "translateX(-86%)",
            }}
          >
            <div>
              <div className="location-container">
                <div className="location-out">
                  <div className="location-inner" style={{ padding: "50px" }}>
                    <p className="ps-2 mb-0">Tìm kiếm theo khu vực</p>
                    <div className="location-map d-flex flex-wrap">
                      {renderItemSearch(arrSearchLocation)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none modal-content">
            <div
              className="date-picker border-0 rounded-5"
              style={{
                width: "900px",
                height: "500px",
                textAlign: "center",
                zIndex: 10,
                position: "fixed",
                top: 163,
                left: "50%",
                background: "#ffffff",
                transform: "translateX(-58%)",
              }}
            >
              <DatePickerAntd />
            </div>
          </div>
          <div className="d-none modal-content">
            <div
              className="book-amount border-0 rounded-5 p-5"
              style={{
                width: "400px",
                height: "350px",
                textAlign: "center",
                zIndex: 10,
                position: "fixed",
                top: 163,
                left: "50%",
                background: "#ffffff",
              }}
            >
              <div className="item-bookamount d-flex justify-content-between align-items-center border-bottom border-1">
                <div className="category text-start">
                  <p>Người lớn</p>
                  <p>Từ 13 tuổi trở lên</p>
                </div>
                <div>
                  <button className="btn btn-primary">-</button>
                  <span> 1 </span>
                  <button className="btn btn-primary">+</button>
                </div>
              </div>
              <div className="item-bookamount d-flex justify-content-between align-items-center border-bottom border-1">
                <div className="category text-start">
                  <p>Trẻ em</p>
                  <p>Từ 2 đến 12 tuổi</p>
                </div>
                <div>
                  <button className="btn btn-primary">-</button>
                  <span> 1 </span>
                  <button className="btn btn-primary">+</button>
                </div>
              </div>
              <div className="item-bookamount d-flex justify-content-between align-items-center border-bottom border-1">
                <div className="category text-start">
                  <p>Em bé</p>
                  <p>Dưới 2 tuổi</p>
                </div>
                <div>
                  <button className="btn btn-primary">-</button>
                  <span> 1 </span>
                  <button className="btn btn-primary">+</button>
                </div>
              </div>
              <div className="item-bookamount d-flex justify-content-between align-items-center border-bottom border-1">
                <div className="category text-start">
                  <p>Thú cưng</p>
                  <p style={{ width: "200px" }}>
                    Bạn sẽ mang theo động vật phục vụ?
                  </p>
                </div>
                <div>
                  <button className="btn btn-primary">-</button>
                  <span> 1 </span>
                  <button className="btn btn-primary">+</button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalHeader;
