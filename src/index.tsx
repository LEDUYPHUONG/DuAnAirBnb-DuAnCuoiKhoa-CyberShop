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
import Roomlist from './pages/Roomlist/RoomListPage';
import ResponsiveItem from './HOC/ResponsiveItem/ResponsiveItem';
import '../src/assets/scss/style.scss';
import Infor  from './pages/Information/Infor';
import RoomListPage from './pages/Roomlist/RoomListPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<ResponsiveItem Component={HomeTemplate} ComponentMobile={HomeTemplateMobile}/>}>
          <Route index element={<ResponsiveItem Component={RoomListPage} ComponentMobile={RoomListPage} />}></Route>
          <Route path='home' element={<ResponsiveItem Component={Roomlist} ComponentMobile={Roomlist} />}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='demo' element={<Demo/>}></Route>
          <Route path='detail'>
            <Route path=':id'></Route>
          </Route>
          <Route path='Roomlist' element = {<Infor/>}></Route>
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