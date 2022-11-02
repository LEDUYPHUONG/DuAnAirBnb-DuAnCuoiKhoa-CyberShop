import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
    title?:string
}

export default function HeaderPage({title}: Props) {
  return (
    <div className='header-container' style={{position: 'fixed', top:0, left:0, width:"100%", background: "#ffffff", borderBottom:"1px solid #cccccc", zIndex:10}}>
      <div className="header-top m-auto" style={{  height:"80px", padding: "0 48px"}}>
        <div className="header d-flex justify-content-between align-items-center" >
          <NavLink to='/'>
            <div className="header_logo d-flex justify-content-center align-items-center" style={{height:"80px"}}>
              <div className="header_logo d-none">
                <img style={{height:"33px", cursor: "pointer"}} src="/img/home/logo.png" alt="..." />
              </div>
              <div className="header_logo-text d-block">
                <img style={{height:"33px", cursor: "pointer"}} src="/img/home/logo-text.png" alt="..." />
              </div>
            </div>
          </NavLink>
          <div className="order-bar rounded-pill" style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.1)", border: "1px solid rgba(204, 204, 204, 0.5)" }}>
            <div className="location d-flex justify-content-between align-items-center" style={{padding: "5px 7px"}}>
              <div style={{width:1, height:0}}></div>
              <button className='btn text-dark' style={{fontSize: "14px", outline:"none"}} data-toggle="modal" data-target="#myModal" type='button'>Địa điểm bất kì</button>
              <div style={{width:1, height:24, background:"#cccccc"}}></div>
              <button className='btn text-dark' style={{fontSize: "14px", outline:"none"}} data-toggle="modal" data-target="#myModal">Tuần bất kì</button>
              <div style={{width:1, height:24, background:"#cccccc"}}></div>
              <button className='btn text-dark' style={{opacity: 0.5, fontFamily: "Roboto-Regular",fontSize: "14px", outline:"none"}} data-toggle="modal" data-target="#myModal">Thêm khách</button>
              <button className='btn' style={{border: "none", background: "red", color: "white", borderRadius: "50%", width: "35px", height: "35px", lineHeight: "14px", textAlign: "center", outline:"none"}} data-toggle="modal" data-target="#myModal">
                <i className="fa-solid fa-magnifying-glass" style={{fontSize: "14px", lineHeight: "14px", width: "14px", height: "14px"}}></i>
              </button>
            </div>
          </div>
          <div className="singin-singout">
            <div className="location d-flex justify-content-between align-items-center">
              <div style={{width:1, height:0}}></div>
              <button className='btn-BAhost-globe btn rounded-pill text-dark' style={{fontSize: "14px", outline:"none", height:'44px', padding:'0 15px'}}>Trở thành chủ nhà</button>
              <button className='btn-BAhost-globe btn rounded-pill text-dark' style={{outline:"none",  height:'44px', width:'44px'}}><i className="fa-solid fa-globe" ></i></button>
              
              <div className="dropdown d-flex justify-content-between align-items-center">
                <button
                  className="btn-singin-singout btn dropdown-toggle rounded-pill d-flex justify-content-between align-items-center ms-2"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{border: "1px solid rgba(204, 204, 204, 0.5)", outline:"none"}}
                >
                    <span className="d-flex justify-content-between align-items-center">
                      <i className="fa-solid fa-bars pe-3 text-dark"></i>
                      <i className="fa-solid fa-circle-user text-dark" style={{width:30, height:30,lineHeight:"30px", fontSize:30}} ></i>
                    </span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <NavLink className="dropdown-item" to="/signin">
                      Sign In
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/signup">
                      Join
                    </NavLink>
                  </li>
                </ul>
              </div>
            <div>
          </div>
        </div>
      </div>
    </div>
  </div>
      
</div>

  )
}