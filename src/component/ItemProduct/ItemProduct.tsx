import React from 'react'
import { arrItem } from '../../data/api/dataDemoItem'
// import CarouselItem from '../Carousel/CarouselItem'

export interface ArrItem  {
    img: string,
    title:string,
    position:string,
    time:string,
    rate:string,
    price:string
}

// export interface ArrSrcImg{
//     Img:string
// }

export default function ItemProduct() {
    
    const arrItemrender:ArrItem[] = arrItem

    const renderItemCarouselItem = () => {
    return arrItemrender.map((item,index) => {
      return <div className="item" key={index} style={{margin:"5px 10px", cursor: "pointer", marginBottom: "20px"}}>
      <div className='img-out' style={{position:"relative", width:"257px",height:"270px" ,border:"none", borderRadius:"10px", overflow:"hidden", objectFit:"cover", marginBottom:"5px"}}>
            {/* <CarouselItem /> */}
        <img src={`./img/home/wiew/${item.img}`} alt="..." />
        <div className="like" style={{position:"absolute", top:"20px", right: "20px",  width:"20px", height:"20px",opacity:0.8}}>
          <img width={20} height={20} src="./img/home/heart.png" alt="..." />
        </div>
      </div>
      <div className="title-rate d-flex justify-content-between align-items-center" style={{position:"relative", width:"257px",paddingTop:"5px"}} >
        <span>{item.title}</span>
        <span style={{fontSize: "15px", verticalAlign: "middle"}}><i className="fa-solid fa-star"></i><span style={{fontFamily:"Roboto-Regular",verticalAlign: "middle"}}> {item.rate}</span></span>
      </div>
      <span className='d-block' style={{fontFamily:"Roboto-Regular", opacity:0.8}}>{item.position}</span>
      <span className='d-block' style={{fontFamily:"Roboto-Regular", opacity:0.8}}>{item.time}</span>
      <span className='d-block'>${item.price}<span style={{fontFamily:"Roboto-Regular"}}> đêm</span></span>
  
    </div>
    })
  }
  return (
    <div className='d-flex flex-wrap justify-content-between' style={{margin:"5px -10px"}}>
        {renderItemCarouselItem()}
    </div>
  )
}