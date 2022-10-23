import React from 'react'
import { NavLink } from 'react-router-dom'
import Carousel from '../Carousel/Carousel'
import HeaderPage from '../Header/HeaderPage'

type Props = {}

export default function MapHome({}: Props) {
  return (
    <div className='vw-100 vh-100'>
      <HeaderPage />
      <div style={{padding:'98px 48px 0' }}>
        <Carousel />
      </div>
      <div>
        <iframe width="100%" height="790px)" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://www.google.com/maps/ms?msid=204293175747830583907.0005022420ef3bca6a816&msa=0&ie=UTF8&t=m&ll=40.79042,-73.945541&spn=0.462677,1.056747&output=embed" />
      </div>
      <div className='show-map d-flex justify-content-between' style={{position:"absolute", left:"0px", bottom:"60px", width:"100%",height:"50px"}}>
        <div style={{width:"1px", height:"0px"}}></div>
        <NavLink to='/' style={{textDecoration:'none'}}>
          <div className='bg-dark text-white text-center' style={{cursor: "pointer",width:"200px",height:"50px",lineHeight:"50px", border:"none", borderRadius:"50px"}}>Hiện thị danh sách  <i className="fa-solid fa-list-ul"></i></div>
        </NavLink>
        <div style={{width:"1px", height:"0px"}}></div>
      </div>
    </div>
  )
}