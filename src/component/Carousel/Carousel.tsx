import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { ArrIconCarousel, arrIconCarousel } from "../../data/api/dataDemo";
import { RootState } from "../../redux/configStore";
import { useAppDispatch } from "../../redux/example/hooks";
import { setKeyword} from "../../redux/reducer/keywordReducer";
import { getProductApi } from "../../redux/reducer/productReducer";

export default function Carousel() {
  const keywordRedux = useSelector((state: RootState) => state.keywordReducer)
  const arrIconCarousell:ArrIconCarousel[] = arrIconCarousel
  const dispatch = useAppDispatch()
  useEffect(() =>{
    dispatch(getProductApi(keywordRedux))
    // eslint-disable-next-line
  },[keywordRedux])
  const handleClickSetArrproduct = (itemClick:ArrIconCarousel) => {
    if(itemClick.title === 'Tất cả nhà'){
      dispatch(setKeyword('pageIndex=1&pageSize=20'))
    }
    if(itemClick.title === ''){
      dispatch(setKeyword('pageIndex=1&pageSize=20'))
    }
    if(itemClick.srcId !== '00' && itemClick.title !== ''){
      dispatch(setKeyword(`pageIndex=1&pageSize=20&keyword=${itemClick.title}`))
    }
  }
 
  const renderItemCarousel = () => {
    return arrIconCarousell.map((item: ArrIconCarousel,index) => {
      return <div key={index}>
                <div className="d-flex flex-column justify-content-center align-items-center me-5" style={{ height:"80px", opacity:0.6, cursor:"pointer"}} 
                onClick={() =>{
                  handleClickSetArrproduct(item)
                }}>
                  <img width={24} height={24} src={`./img/home/iconcarousel/iconA${item.srcId}.jpg`} alt="..." />
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
  )
}
