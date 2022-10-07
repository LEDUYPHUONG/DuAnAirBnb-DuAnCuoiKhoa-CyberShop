import React from 'react'

type Props = {
    title?:string
}

export default function HeaderPage({title}: Props) {
  return (
    <div className='container'>
      <div className="header d-flex justify-content-between align-items-center " style={{background: "#000000"}}>
        <div className="header_logo py-2">
          <div className="header_logo-notext bg-dark d-flex">
            <img className='d-none' style={{height:"80px"}} src="/img/home/logo-nonetext.png" alt="..." />
            <img className='d-block' style={{height:"80px"}} src="/img/home/logo-text.png" alt="..." />
          </div>
        </div>
        <div className="oder-bar border border-light border-2 rounded-pill">
          <div className="location d-flex justify-content-between align-items-center p-2 ">
            <div style={{width:1, height:0}}></div>
            <button className='btn  text-light'>Địa điểm bất kì</button>
            <div style={{width:1, height:24, background:"#cccccc"}}></div>
            <button className='btn  text-light'>Tuần bất kì</button>
            <div style={{width:1, height:24, background:"#cccccc"}}></div>
            <button className='btn  text-light'>Thêm khách</button>
            <button className='btn '>
              <i className="fa-solid fa-magnifying-glass text-light"></i>
            </button>
            <div></div>
          </div>
        </div>
        <div className="singin-singout">
          <div className="location d-flex justify-content-between align-items-center p-2">
            <div style={{width:1, height:0}}></div>
            <button className='btn  text-light'>Trở thành chủ nhà</button>
            <div style={{width:1, height:24, background:"#cccccc"}}></div>
            <button className='btn  text-light'><i className="fa-solid fa-globe"></i></button>
            <button className='btn border border-light border-2 rounded-pill d-flex justify-content-between align-items-center'>
              <i className="fa-solid fa-bars pe-3  text-light"></i>
              <i className="fa-solid fa-circle-user  text-light" style={{width:30, height:30,lineHeight:"30px", fontSize:30}} ></i>
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}