import React from 'react'

type Props = {
    title?:string
}

export default function HeaderPage({title}: Props) {
  return (
    <div className='container'>
      <div className="header d-flex justify-content-between align-items-center " style={{background: "#fff"}}>
        <div className="header_logo py-2">
          <div className="header_logo-notext bg- d-flex justify-content-center align-items-center" style={{height:"80px"}} >
            <img className='d-none' style={{height:"40px"}} src="/img/home/logo.png" alt="..." />
            <img className='d-block' style={{height:"40px"}} src="/img/home/logo-text.png" alt="..." />
          </div>
        </div>
        <div className="order-bar borde-1 border-light border-2 rounded-pill shadow-sm">
          <div className="location d-flex justify-content-between align-items-center p-2 ">
            <div style={{width:1, height:0}}></div>
            <button className='btn text-dark'>Địa điểm bất kì</button>
            <div style={{width:1, height:24, background:"#cccccc"}}></div>
            <button className='btn text-dark'>Tuần bất kì</button>
            <div style={{width:1, height:24, background:"#cccccc"}}></div>
            <button className='btn text-dark'>Thêm khách</button>
            <button className='btn '>
              <i className="fa-solid fa-magnifying-glass text-dark"></i>
            </button>
            <div></div>
          </div>
        </div>
        <div className="singin-singout">
          <div className="location d-flex justify-content-between align-items-center p-2">
            <div style={{width:1, height:0}}></div>
            <button className='btn text-dark'>Trở thành chủ nhà</button>
            <button className='btn text-dark'><i className="fa-solid fa-globe"></i></button>
            <button className='btn border border-light border-2 rounded-pill d-flex justify-content-between align-items-center'>
              <i className="fa-solid fa-bars pe-3 text-dark"></i>
              <i className="fa-solid fa-circle-user text-dark" style={{width:30, height:30,lineHeight:"30px", fontSize:30}} ></i>
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}