import React from 'react'
import { arrItem } from '../../data/api/dataDemoItem'
import { useAppSelector } from '../../redux/example/hooks'

export default function ItemProduct() {
  const { arrProduct } = useAppSelector((state) => state.productReducer)

    const renderItemCarouselItem = () => {
    return arrProduct.map((item,index) => {
      return <div className="item" key={index} style={{margin:"5px 10px", cursor: "pointer", marginBottom: "20px"}}>
      <div className='img-out' style={{position:"relative", width:"257px",height:"270px" ,border:"none", borderRadius:"10px", overflow:"hidden", objectFit:"cover", marginBottom:"5px"}}>
        <img className='w-100 h-100' src={item.hinhAnh !== '' ? item.hinhAnh : 'img/hinhMinhHoa.jpg' } alt="..." />
        <div className="like" style={{position:"absolute", top:"20px", right: "20px",  width:"20px", height:"20px",opacity:0.8}}>
          <img width={20} height={20} src="./img/home/heart.png" alt="..." />
        </div>
      </div>
      <div className="title-rate d-flex justify-content-between align-items-center" style={{position:"relative", width:"257px",paddingTop:"5px"}} >
        <span> Địa điểm du lịch</span>
        <span style={{fontSize: "15px", verticalAlign: "middle"}}><i className="fa-solid fa-star"></i><span style={{fontFamily:"Roboto-Regular",verticalAlign: "middle"}}> 5</span></span>
      </div>
      <span className='d-block' style={{fontFamily:"Roboto-Regular", opacity:0.8}}>{item.tenViTri}, {item.tinhThanh}, {item.quocGia}</span>
      <span className='d-block' style={{fontFamily:"Roboto-Regular", opacity:0.8}}>5.11.2022</span>
      <span className='d-block'>$1000/<span style={{fontFamily:"Roboto-Regular"}}>đêm</span></span>
    </div>
    })
  }
  return (
    <div className='d-flex flex-wrap justify-content-between' style={{margin:"5px -10px"}}>
        {renderItemCarouselItem()}
    </div>
  )
}