import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate';
import { Provider } from "react-redux";
import { store } from './redux/configStore';
import HomeMobile from './pages/Home/HomeMobile';
import HomeTemplateMobile from './templates/HomeTemplateMobile';
import Login from './pages/Login/Login';
import Demo from './pages/Demo/Demo';
import Home from './pages/Home/Home';
import Roomlist from './pages/Roomlist/RoomListPage';
import ResponsiveItem from './HOC/ResponsiveItem/ResponsiveItem';
import MapHome from './component/MapHome/MapHome';
import Admin from './pages/Admin/Admin';
import Manage from './pages/Admin/Manage';
import RoomDetail from './pages/RoomDetail/RoomDetail';
import SignUp from './pages/SignUp/SignUp';
import Infor from './pages/Information/Infor';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/style.scss"
import { ACCESS_TOKEN, getStoreJson } from './util/setting';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export const isVerification = (): boolean => {
  const token: string | null = isUserLogIn();
  return token != null;
};

export const isUserLogIn = () => {
  const result = getStoreJson(ACCESS_TOKEN);
  return result;
};
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<ResponsiveItem Component={HomeTemplate} ComponentMobile={HomeTemplateMobile}/>}>
          <Route index element={<ResponsiveItem Component={Home} ComponentMobile={HomeMobile} />}></Route>
          <Route path='home' element={<ResponsiveItem Component={Home} ComponentMobile={HomeMobile} />}></Route>
          <Route path='map' element={<MapHome/>}></Route>
          <Route path='detailroom'>
            <Route path=':id' element = {<RoomDetail/>}></Route>
          </Route>
          <Route path='roomList' element = {<Roomlist/>}></Route>
          <Route path='signin' element={
            isVerification() ? (<Infor/>) : (<Login/>)}></Route>
          <Route path='signup' element={
            isVerification() ? (<Infor/>) : (<SignUp/>)}></Route>
          <Route  path='profile' element={
            isVerification() ? (<Infor/>) : (<Login/>)}></Route>
          <Route path='admin' element={
            isVerification() ? (<Admin/>) : (<Login/>)}></Route>
          <Route path='manage' element={
            isVerification() ? (<Manage/>) : (<Login/>)}></Route>
          <Route path='*' element={<Navigate to='' />}></Route>

          <Route path='demo' element={<Demo/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

export const ACCOUNT_ROUTES = {
  LOGIN: "/login"
};

export const DASHBOARD_ROUTES = {
  DASHBOARD: "/",
  HOME: "/home",
  USERS: "/users"
};