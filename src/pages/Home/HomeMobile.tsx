import React, { useState } from "react";
import Carousel from "../../component/Carousel/Carousel";
import FooterPage from "../../component/Footer/FooterPage";
import HeaderPage from "../../component/Header/HeaderPage";
import ItemProduct from "../../component/ItemProduct/ItemProduct";
import MoveMapHome from "../../component/MapHome/MoveMapHome";
import { NavLink } from "react-router-dom";

export default function HomeMobile() {
  const [heightCarousel, setHeightCarousel] = useState("100px");
  const [heightHeader, setHeightHeader] = useState("180px");

  const scrollDownSetHeightCarousel = () => {
    if (window.scrollY > 0) {
      setHeightCarousel("80px");
    } else {
      setHeightCarousel("100px");
    }
  };

  const scrollDownSetHeightHeader = () => {
    if (window.scrollY > 0) {
      setHeightHeader("160px");
    } else {
      setHeightHeader("180px");
    }
  };

  window.onscroll = () => {
    scrollDownSetHeightCarousel();
    scrollDownSetHeightHeader();
  };
  return (
    <div>
      <div>
        <HeaderPage />
        <div
          className="home-container mx-auto"
          style={{
            position: "fixed",
            background: "#ffffff",
            width: "100%",
            height: `${heightHeader}`,
            margin: "0 48px",
            padding: `${heightCarousel} 48px 0`,
            zIndex: 9,
          }}
        >
          <div>
            <Carousel />
          </div>
        </div>
        <div
          className="home-body-container"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            padding: "180px 48px 50px",
          }}
        >
          <div className="home-body-row d-flex justify-content-between">
            <ItemProduct />
          </div>
        </div>
        <MoveMapHome />
        <FooterPage />
      </div>
      <div style={{ height: 50 }}></div>
      <footer className="bg-dark text-white d-flex justify-content-center w-100 position-fixed bottom-0">
        <div className="mx-5">
          <NavLink to={"/"}>
            <i className="fa fa-home" /> Home
          </NavLink>
        </div>
        <div className="mx-5">
          <NavLink to={"/detail"}>
            <i className="fa fa-home" /> Detail
          </NavLink>
        </div>
        <div className="mx-5">
          <NavLink to={"/login"}>
            <i className="fa fa-home" /> Login
          </NavLink>
        </div>
      </footer>
    </div>
  );
}
