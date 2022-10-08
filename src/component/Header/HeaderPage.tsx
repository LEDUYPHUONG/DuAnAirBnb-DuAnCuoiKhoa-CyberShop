import React from 'react'

type Props = {
    title?:string
}

export default function HeaderPage({title}: Props) {
  return (
    <div className='header-container' style={{position: 'absolute', top:0, left:0, width:"100%", background: "#ffffff"}}>
      <div className="header-top m-auto px-5" style={{  height:"80px"}}>
        <div className="header d-flex justify-content-between align-items-center" >
          <div className="header_logo d-flex justify-content-center align-items-center" style={{height:"80px"}}>
            <div className="header_logo d-none">
              <img style={{height:"40px", cursor: "pointer"}} src="/img/home/logo.png" alt="..." />
            </div>
            <div className="header_logo-text d-block">
              <img style={{height:"40px", cursor: "pointer"}} src="/img/home/logo-text.png" alt="..." />
            </div>
          </div>
          <div className="order-bar border border-1 border-light rounded-pill shadow-sm">
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
              <button className='btn text-dark p-0'>Trở thành chủ nhà</button>
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
    </div>

  )
}