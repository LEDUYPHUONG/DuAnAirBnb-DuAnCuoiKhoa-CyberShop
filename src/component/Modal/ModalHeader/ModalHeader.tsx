import React from 'react'
import 'antd/dist/antd.min.css'
import DatePickerAntd from '../../datePickerAntd/DatePickerAntd'
import { RootState } from '../../../redux/configStore'
import { setKeySearch } from '../../../redux/reducer/keySearchReducer'
import { useAppDispatch } from '../../../redux/example/hooks'
import { useSelector } from 'react-redux'
import { arrLocationSearch, LocationSearchModel } from '../../../data/api/dataDemoSearch'

export default function ModalHeader() {
    const keySearch =  useSelector((state: RootState) => state.keySearchReducer)
    const arrSearchLocation:LocationSearchModel[] = arrLocationSearch
    const dispatch = useAppDispatch()

    const handleClickSetKeySearch = (item:LocationSearchModel) =>{
        dispatch(setKeySearch(`${item.title}`))
    }

    const renderItemSearch = (arrLocation: LocationSearchModel[]) => {
        return arrLocation.map((item,index) =>{
            return <div key={index} className="col-4 pt-5">
                        <div className="img-out mx-1" style={{cursor: "pointer"}} onClick={() => {
                            handleClickSetKeySearch(item)
                        }}>
                            <div className='img-in border border-dark rounded-5 overflow-hidden'>
                                <img width={'100%'} height={'100%'} src={item.srcImage} alt="..." />
                            </div>
                            <div className="title ps-2 pt-3">
                                <p className='mb-0' style={{fontFamily: "Roboto-Regular",fontSize: "14px"}}>{item.title}</p>
                            </div>
                        </div>
                    </div>
        })
    }
    // style for background of 1 button (button search modal)
    const bgImgBtnSearch = 'radial-gradient(circle at center right, rgb(189, 30, 89) 0%, rgb(189, 30, 89) 27.5%, rgb(215, 4, 102) 40%, rgb(227, 28, 95) 57.5%, rgb(230, 30, 77) 75%, rgb(255, 56, 92) 100%)'

  return (

    <>
        <div className="modal-container">
            <div className="modal fade px-0 " id="myModal" role="dialog">
                <div className="modal-fullscreen-sm-down" >
                    <div className="modal-content border border-0 rounded-0" >
                        <div className='header-container' style={{position: 'fixed', top:0, left:0, width:"100%", background: "#ffffff", borderBottom:"1px solid #cccccc", zIndex:10}}>
                            <div className="header-top m-auto" style={{  height:"80px", padding: "0 48px"}}>
                                <div className="header d-flex justify-content-between align-items-center" >
                                    <div className="header_logo d-flex justify-content-center align-items-center" style={{height:"80px"}}>
                                        <div className="header_logo d-none">
                                        <img style={{height:"33px", cursor: "pointer"}} src="/img/home/logo.png" alt="..." />
                                        </div>
                                        <div className="header_logo-text d-block">
                                        <img style={{height:"33px", cursor: "pointer"}} src="/img/home/logo-text.png" alt="..." />
                                        </div>
                                    </div>
                                    <div className="order-bar-modal">
                                        <div className="location d-flex justify-content-between align-items-center" style={{padding: "5px 7px"}}>
                                        <div style={{width:1, height:0}}></div>
                                        <button className='btn text-dark' type='button'><span style={{fontFamily: "Roboto-Regular",fontSize: "16px", outline:"none",borderRadius:"0px"}} >Chổ ở</span></button>
                                        <button className='btn text-dark'><span style={{fontFamily: "Roboto-Regular",fontSize: "16px", outline:"none",borderRadius:"0px"}}>Trải nghiệm</span></button>
                                        <button className='btn text-dark'><span style={{fontFamily: "Roboto-Regular",fontSize: "16px", outline:"none",borderRadius:"0px"}}>Trải nghiệm trực tuyến</span></button>
                                        </div>
                                    </div>
                                    <div className="singin-singout">
                                        <div className="location d-flex justify-content-between align-items-center">
                                        <div style={{width:1, height:0}}></div>
                                        <button className='btn text-dark p-0' style={{fontSize: "14px", outline:"none"}}>Trở thành chủ nhà</button>
                                        <button className='btn text-dark' style={{outline:"none"}}><i className="fa-solid fa-globe"></i></button>
                                        <button className='btn rounded-pill d-flex justify-content-between align-items-center' style={{border: "1px solid rgba(204, 204, 204, 0.5)", outline:"none"}}>
                                            <i className="fa-solid fa-bars pe-3 text-dark"></i>
                                            <i className="fa-solid fa-circle-user text-dark" style={{width:30, height:30,lineHeight:"30px", fontSize:30}} ></i>
                                        </button>
                                        <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-main m-auto">
                                <div className="header d-flex justify-content-between align-items-center pb-4" >
                                    <div></div>
                                    <div className="order-bar-modal rounded-pill" style={{ border: "2px solid rgba(204, 204, 204, 0.5)", overflow:"hidden"}}>
                                        <div className="location d-flex justify-content-between align-items-center" style={{background:"#EBEBEB"}}>
                                            <div style={{width:1, height:0}}></div>
                                            <button className='btn text-dark d-flex flex-column rounded-pill buttonUserActive buttonUserHover' style={{fontSize: "14px", outline:"none", padding:"10px 25px", width:"300px"}} type='button'>
                                                <span>Địa điểm</span>
                                                <input type="text" defaultValue={keySearch} placeholder='Tìm kiếm điểm đến' style={{opacity: 0.5, fontFamily: "Roboto-Regular",fontSize: "14px", outline:"none",borderRadius:"0px"}}/>
                                            </button>
                                            <div style={{width:1, height:24, background:"#cccccc"}}></div>
                                                <button className='btn text-dark d-flex flex-column rounded-pill buttonUserHover' style={{fontSize: "14px", outline:"none", padding:"10px 25px", width:"300px"}}>
                                                    <span>Ngày</span>
                                                    <input className='book-day' type="text" disabled placeholder='Thêm ngày' style={{opacity: 0.5, fontFamily: "Roboto-Regular",fontSize: "14px", outline:"none",borderRadius:"0px"}}/>
                                                </button>
                                                <div style={{width:1, height:24, background:"#cccccc"}}></div>
                                                <button className='btn text-dark d-flex flex-row justify-content-between align-items-center rounded-pill buttonUserHover' style={{width:"300px", padding: "6px 5px 6px 25px"}}>
                                                    <span className='text-dark d-flex flex-column align-items-start' style={{fontFamily: "Roboto-Regular",fontSize: "14px"}}>
                                                        <span>Khách</span>
                                                        <input className='book-people' type="text" disabled placeholder='Thêm khách' style={{opacity: 0.5, fontFamily: "Roboto-Regular",fontSize: "14px", outline:"none",borderRadius:"0px"}}/>
                                                    </span>
                                                    <span className='btn d-flex justify-content-center align-items-center' style={{backgroundImage:bgImgBtnSearch, backgroundSize: "200% 200%",border: "none", color: "white", borderRadius: "50px", width: "130px", height: "48px", lineHeight: "14px", textAlign: "center", outline:"none"}}>
                                                        <i className="fa-solid fa-magnifying-glass" style={{fontSize: "14px", lineHeight: "14px", width: "14px", height: "14px"}}></i>
                                                        <span className='ps-3'>Tìm kiếm</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    <div style={{paddingLeft:"140px"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-content modal-lg  rounded-5 overflow-hidden" style={{width:'600px',zIndex:10, position:"fixed", top: 161, left:'50%', background:'#ffffff', transform: 'translateX(-86%)'}}>
                        <div >
                            <div className="location-container">
                                <div className="location-out">
                                    <div className="location-inner p-5">
                                        <p className='ps-2 mb-0'>Tìm kiếm theo khu vực</p>
                                        <div className="location-map d-flex flex-wrap">
                                            {renderItemSearch(arrSearchLocation)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-none modal-content'>
                        <div className="date-picker border-0 rounded-5" style={{width:'900px', height:'500px', textAlign:'center',zIndex:10, position:"fixed", top: 163, left:'50%', background:'#ffffff', transform: 'translateX(-58%)'}}>
                            <DatePickerAntd />
                        </div>
                    </div>
                    <div className='d-none modal-content'>
                        <div className="book-amount border-0 rounded-5 p-5" style={{width:'400px', height:'350px', textAlign:'center',zIndex:10, position:"fixed", top: 163, left:'50%', background:'#ffffff'}}>
                            <div className="item-bookamount d-flex justify-content-between align-items-center border-bottom border-1">
                                <div className="category text-start">
                                    <p>Người lớn</p>
                                    <p>Từ 13 tuổi trở lên</p>
                                </div>
                                <div>
                                    <button className='btn btn-primary'>-</button>
                                    <span> 1 </span>
                                    <button className='btn btn-primary'>+</button>
                                </div>
                            </div>
                            <div className="item-bookamount d-flex justify-content-between align-items-center border-bottom border-1">
                                <div className="category text-start">
                                    <p>Trẻ em</p>
                                    <p>Từ 2 đến 12 tuổi</p>
                                </div>
                                <div>
                                    <button className='btn btn-primary'>-</button>
                                    <span> 1 </span>
                                    <button className='btn btn-primary'>+</button>
                                </div>
                            </div>
                            <div className="item-bookamount d-flex justify-content-between align-items-center border-bottom border-1">
                                <div className="category text-start">
                                    <p>Em bé</p>
                                    <p>Dưới 2 tuổi</p>
                                </div>
                                <div>
                                    <button className='btn btn-primary'>-</button>
                                    <span> 1 </span>
                                    <button className='btn btn-primary'>+</button>
                                </div>
                            </div>
                            <div className="item-bookamount d-flex justify-content-between align-items-center border-bottom border-1">
                                <div className="category text-start">
                                    <p>Thú cưng</p>
                                    <p style={{width:'200px'}}>Bạn sẽ mang theo động vật phục vụ?</p>
                                </div>
                                <div>
                                    <button className='btn btn-primary'>-</button>
                                    <span> 1 </span>
                                    <button className='btn btn-primary'>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}