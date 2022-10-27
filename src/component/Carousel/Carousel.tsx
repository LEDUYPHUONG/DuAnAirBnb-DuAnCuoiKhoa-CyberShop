import React, { Component } from "react";
import Slider from "react-slick";
import { arrIconCarousel } from "../../data/api/dataDemo";


export interface ArrIconCarousel  {
  srcId:string,
  title:string
}
  
const arrIconCarousell:ArrIconCarousel[] = arrIconCarousel
const renderItemCarousel = () => {
  return arrIconCarousell.map((item,index) => {
    return <div key={index}>
              <div className="d-flex flex-column justify-content-center align-items-center me-5" style={{ height:"80px", opacity:0.6, cursor:"pointer"}}>
                <img width={24} height={24} src={"./img/home/iconcarousel/iconA" + `${item.srcId}` + ".jpg"} alt="..." />
                <span className="d-block" style={{fontSize:"12px", fontWeight:"normal"}}>{item.title}</span>
              </div>
            </div>
  })
}

function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",boxShadow: "0 2px 4px rgba(0,0,0,0.18)", backgroundImage: `url("./img/home/nextIcon.png")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width:"40px", height:"40px", lineHeight:"60px", right: "0", border:"none", borderRadius:"50%", textAlign:"center", zIndex:10,opacity:0.1}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style, display: "block",boxShadow: "0 2px 4px rgba(0,0,0,0.18)",backgroundImage: `url("./img/home/prevIcon.png")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width:"40px", height:"40px", lineHeight:"60px", left: 0, border:"none", borderRadius:"50%", textAlign:"center",zIndex:10,opacity:0.1}}
      onClick={onClick}
    />
  );
}

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      // slidesToShow: 8,
      slidesToScroll: 4,
      infinite:false,
      centerPadding: "50px",
      variableWidth: true,
      adaptiveHeight:true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
          <Slider {...settings}>
            {renderItemCarousel()}
          </Slider>
      </div>
    );
  }
}