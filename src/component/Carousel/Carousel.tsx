import React, { Component } from "react";
import Slider from "react-slick";
// import "/~slick-carousel/slick/slick.css"; 
// import "/~slick-carousel/slick/slick-theme.css";


const arrIconCarousel = [
  {
    srcId: "01",
    title: "Ven hồ"
  },
  {
    srcId: "02",
    title: "Công viên quốc gia"
  },
  {
    srcId: "03",
    title: "Hồ bơi tuyệt vời"
  },
  {
    srcId: "04",
    title: "Nhà thuyền"
  },
  {
    srcId: "05",
    title: "Cối xay gió"
  },
  {
    srcId: "06",
    title: "Thật ấn tượng!"
  },
  {
    srcId: "07",
    title: "Bắc Cực"
  },
  {
    srcId: "08",
    title: "Nhà nhỏ"
  },
  {
    srcId: "09",
    title: "Đảo"
  },
  {
    srcId: "10",
    title: "Lướt sóng"
  },
  {
    srcId: "11",
    title: "Cabin"
  },
  {
    srcId: "12",
    title: "Thiết kế"
  },
  {
    srcId: "13",
    title: "Bãi biển"
  },
  {
    srcId: "14",
    title: "Khung cảnh tuyệt vời"
  },
  {
    srcId: "15",
    title: "Hang động"
  },
  {
    srcId: "16",
    title: "Nhiệt đới"
  },
  {
    srcId: "17",
    title: "Nhà khung chữ A"
  },
  {
    srcId: "18",
    title: "Nhà dưới lòng đất"
  },
  {
    srcId: "19",
    title: "Nhà chung"
  },
  {
    srcId: "20",
    title: "Luxe"
  },
  {
    srcId: "21",
    title: "Chơi golf"
  },{
    srcId: "22",
    title: "Phục vụ bữa sáng"
  },
  {
    srcId: "23",
    title: "Lâu đài"
  },
  {
    srcId: "24",
    title: "Nông trại"
  },
  {
    srcId: "25",
    title: "Nông thôn"
  },
  {
    srcId: "26",
    title: "Biệt thự"
  },{
    srcId: "27",
    title: "Xe cắm trại"
  },
  {
    srcId: "28",
    title: "Nhà mang tính lịch sử"
  },
  {
    srcId: "29",
    title: "Thuyền"
  },
  {
    srcId: "30",
    title: "Trượt tuyết"
  },
  {
    srcId: "31",
    title: "Nhà phong cách Cycladic"
  },
  {
    srcId: "32",
    title: "Các thành phố nổi tiếng"
  },
  {
    srcId: "33",
    title: "Bếp của bếp trưởng"
  },{
    srcId: "34",
    title: "Khu cắm trại"
  },

]

const renderItemCarousel = () => {
  return arrIconCarousel.map((item,index) => {
    return <div key={index}>
              <div className="d-flex flex-column justify-content-center align-items-center pe-5" style={{ height:"80px"}}>
                <img width={30} height={30} src={"./img/home/iconcarousel/icon" + `${item.srcId}` + ".jpg"} alt="..." />
                <span className="d-block">{item.title}</span>
              </div>
            </div>
  })
}

function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",boxShadow: "0 2px 4px rgba(0,0,0,0.18)", background: "rgba(0,0,0,0.1)", width:"40px", height:"40px", lineHeight:"60px", right: "-40px", border:"none", borderRadius:"50%", textAlign:"center"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style, display: "block",boxShadow: "0 2px 4px rgba(0,0,0,0.18)", background: "rgba(0,0,0,0.1)", width:"40px", height:"40px", lineHeight:"60px", left: "-50px", border:"none", borderRadius:"50%", textAlign:"center"}}
      onClick={onClick}
    />
  );
}

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      slidesToShow: 8,
      slidesToScroll: 8,
      infinite:false,
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