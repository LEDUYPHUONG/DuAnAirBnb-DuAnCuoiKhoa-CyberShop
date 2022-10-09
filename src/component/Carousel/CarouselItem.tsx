// import React, { Component } from "react";
// import Slider from "react-slick";
// import { arrItem } from "../../data/api/dataDemoItem";
// import { ArrItem, ArrSrcImg } from "../ItemProduct/ItemProduct";

// // import "/~slick-carousel/slick/slick.css"; 
// // import "/~slick-carousel/slick/slick-theme.css";


//   const arrIconCarousell:ArrItem[] = arrItem
//   const arrImgItem:ArrSrcImg = arrItem.
//   const renderItemCarousel = () => {
//     return arrIconCarousell.map((item,index) => {
//       return <img src={"./img/home/wiew/" + `${item.arrImg[0]}`} alt="..." />
//     })
//   }
  
// function SampleNextArrow(props:any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block",boxShadow: "0 2px 4px rgba(0,0,0,0.18)", background: "rgba(0,0,0,0.1)", width:"40px", height:"40px", lineHeight:"60px", right: "15px", border:"none", borderRadius:"50%", textAlign:"center", zIndex:10}}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props:any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{...style, display: "block",boxShadow: "0 2px 4px rgba(0,0,0,0.18)", background: "rgba(0,0,0,0.1)", width:"40px", height:"40px", lineHeight:"60px", left: 0, border:"none", borderRadius:"50%", textAlign:"center",zIndex:10}}
//       onClick={onClick}
//     />
//   );
// }

// export default class CarouselItem extends Component {
//   render() {
//     const settings = {
//       className: "slider variable-width",
//       // slidesToShow: 8,
//       slidesToScroll: 8,
//       infinite:false,
//       centerPadding: "50px",
//       variableWidth: true,
//       adaptiveHeight:true,
//       nextArrow: <SampleNextArrow />,
//       prevArrow: <SamplePrevArrow />
//     };
//     return (
//       <div>
//            <Slider {...settings}>
              
//             </Slider>
//       </div>
//     );
//   }
// }
import React from 'react'



export default function CarouselItem() {
  return (
    <div>CarouselItem</div>
  )
}