import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
    title?:string
}

export default function FooterPage({title}: Props) {
  return (
    <div className='d-flex justify-content-between align-items-center' style={{position:"absolute", bottom: 0, left:0, height:"47px", background:'#ffffff', border:"1px solid #cccccc", width:"100%", padding:"16px 80px", fontSize:"16px", lineHeight:"16px"}}>
      <div className='footer-left d-flex'>
        © 2022 Airbnb, Inc.
        <NavLink to=""><span className='text-dark'>Quyền riêng tư</span></NavLink>
        <div className='px-1'><i style={{fontSize:"2px", lineHeight:"23px"}}  className="fa-solid fa-circle"></i></div>
        <NavLink to=""><span className='text-dark'>Điều khoản</span></NavLink>
        <div className='px-1'><i style={{fontSize:"2px", lineHeight:"23px"}}  className="fa-solid fa-circle"></i></div>
        <NavLink to=""><span className='text-dark'>Sơ đồ trang web</span></NavLink>
      </div>
      <div className='footer-right d-flex'>
        <i className="fa-solid fa-globe"></i>
        <NavLink to=""><span className='text-dark'>Tiếng Việt (VN)</span></NavLink>
        <NavLink to=""><span className='text-dark'>$ USD</span></NavLink>
        <NavLink to=""><span className='text-dark'>Hỗ trợ và tài nguyên</span></NavLink>
        <i className="fa-solid fa-chevron-up"></i>
      </div>

    </div>
  )
}