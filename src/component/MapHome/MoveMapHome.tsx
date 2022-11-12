import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MoveMapHome() {
  return (
    <>
        <div className='show-map d-flex justify-content-between' style={{position:"absolute", left:"0px", bottom:"80px", width:"100%",height:"50px"}}>
        <div style={{width:"1px", height:"0px"}}></div>
        <NavLink to='/map' style={{textDecoration:'none'}}>
          <div className='bg-dark text-white text-center' style={{cursor: "pointer",width:"150px",height:"50px",lineHeight:"50px", border:"none", borderRadius:"50px"}}>Hiện bản đồ  <i className="fa-solid fa-map ps-1"></i></div>
        </NavLink>
        <div style={{width:"1px", height:"0px"}}></div>
      </div>
    </>
  )
}