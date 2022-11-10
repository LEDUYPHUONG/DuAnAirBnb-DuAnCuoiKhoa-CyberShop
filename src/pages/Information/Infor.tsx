import React from "react";
import UserInforItem from "../../component/UserInfor/UserInforItem";
import { NavLink } from "react-router-dom";
import HeaderPage from "../../component/Header/HeaderPage";
import FooterPage from "../../component/Footer/FooterPage";



export default function Infor() {
  
  return (
    <>
      <div className="infor-main">
        <HeaderPage />
        <UserInforItem />
        <FooterPage />
      </div>
    </>
  );
}
