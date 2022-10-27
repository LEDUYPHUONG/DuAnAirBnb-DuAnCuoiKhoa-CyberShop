import React from 'react';
import ReactDOM from 'react-dom/client';
// setup react-router-dom
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate';
import { Provider } from "react-redux";
import { store } from './redux/configStore';
import HomeMobile from './pages/Home/HomeMobile';
import HomeTemplateMobile from './templates/HomeTemplateMobile';
import Login from './pages/Login/Login';
import Demo from './pages/Demo/Demo';
import Home from './pages/Home/Home';
import ResponsiveItem from './HOC/ResponsiveItem/ResponsiveItem';
import RoomDetail from './pages/RoomDetail/RoomDetail';
import "./assets/scss/style.scss";
import 'antd/dist/antd.css'
import Signup from "./pages/Signup/Signup"


// sao cho nay no k nhac lenh khai
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<ResponsiveItem Component={HomeTemplate} ComponentMobile={HomeTemplateMobile}/>}>
          <Route index element={<ResponsiveItem Component={Home} ComponentMobile={HomeMobile} />}></Route>
          <Route path='home' element={<ResponsiveItem Component={Home} ComponentMobile={HomeMobile} />}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='signup' element={<Signup/>}></Route>
          <Route path='demo' element={<Demo/>}></Route>
          {/* <Route path='detail'>
            <Route path=':id'></Route>
          </Route> */}
          <Route path='detailroom' element = {<RoomDetail/>}>
          <Route path=':id'></Route>
          </Route>
          <Route path='*' element={<Navigate to='' />}></Route>
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