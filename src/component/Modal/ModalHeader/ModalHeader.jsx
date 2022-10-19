import React from 'react'


export default function ModalHeader() {
    const backgroundImageIconSearch = 'radial-gradient(circle at left right, rgb(255, 56, 92) 0%, rgb(230, 30, 77) 27.5%, rgb(227, 28, 95) 40%, rgb(215, 4, 102) 57.5%, rgb(189, 30, 89) 75%, rgb(189, 30, 89) 100%)'
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
                                    <div className="order-bar">
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
                                    <div className="order-bar rounded-pill" style={{ border: "2px solid rgba(204, 204, 204, 0.5)", overflow:"hidden"}}>
                                        <div className="location d-flex justify-content-between align-items-center" style={{background:"#EBEBEB"}}>
                                            <div style={{width:1, height:0}}></div>
                                            <button className='btn text-dark d-flex flex-column rounded-pill buttonUserActive buttonUserHover' style={{fontSize: "14px", outline:"none", padding:"10px 25px", width:"300px"}} type='button'>
                                                <span>Địa điểm</span>
                                                <span style={{opacity: 0.5, fontFamily: "Roboto-Regular",fontSize: "14px", outline:"none",borderRadius:"0px"}}>Tìm kiếm điểm đến</span>
                                            </button>
                                            <div style={{width:1, height:24, background:"#cccccc"}}></div>
                                                <button className='btn text-dark d-flex flex-column rounded-pill buttonUserHover' style={{fontSize: "14px", outline:"none", padding:"10px 25px", width:"300px"}}>
                                                    <span>Ngày</span>
                                                    <span style={{opacity: 0.5, fontFamily: "Roboto-Regular",fontSize: "14px", outline:"none",borderRadius:"0px"}}>Thêm ngày</span>
                                                </button>
                                                <div style={{width:1, height:24, background:"#cccccc"}}></div>
                                                <button className='btn text-dark d-flex flex-row justify-content-between align-items-center rounded-pill buttonUserHover' style={{width:"300px", padding: "6px 5px 6px 25px"}}>
                                                    <span className='text-dark d-flex flex-column align-items-start' style={{fontFamily: "Roboto-Regular",fontSize: "14px"}}>
                                                        <span>Khách</span>
                                                        <span style={{opacity: 0.5, fontFamily: "Roboto-Regular",fontSize: "14px", outline:"none",borderRadius:"0px"}}>Thêm khách</span>
                                                    </span>
                                                    <span className='d-flex justify-content-center align-items-center' style={{backgroundSize:'200% 200%',backgroundImage: backgroundImageIconSearch,border: "none", color: "white", borderRadius: "50px", width: "130px", height: "48px", lineHeight: "14px", textAlign: "center", outline:"none"}}>
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
                    <div className="modal-dialog modal-lg  rounded-5 overflow-hidden d-none" id="myModal" role="dialog" style={{zIndex:10, position:"fixed", top: 161, left:'50%', background:'#ffffff', transform: 'translateX(-65%)'}}>
                        <div>
                            <div className="location-container">
                                <div className="location-out">
                                    <div className="location-inner p-5">
                                        <p className='ps-2'>Tìm kiếm theo khu vực</p>
                                        <div className="location-map d-flex flex-wrap">
                                        <div className="col-4 pt-5">
                                            <div className="img-out mx-1 border border-dark rounded-5 overflow-hidden ">
                                                <img width={'100%'} height={'100%'} src="./img/home/map/timKiemLinhHoat.jpg" alt="..." />
                                            </div>
                                            <div className="title ps-2 pt-3">
                                                <p className='mb-0'>Tìm kiếm linh hoạt</p>
                                            </div>
                                        </div>
                                        <div className="col-4 pt-5">
                                            <div className="img-out mx-1 border border-dark rounded-5 overflow-hidden ">
                                                <img width={'100%'} height={'100%'} src="./img/home/map/chauAu.jpg" alt="..." />
                                            </div>
                                            <div className="title ps-2 pt-3">
                                                <p className='mb-0'>Châu Âu</p>
                                            </div>
                                        </div>
                                        <div className="col-4 pt-5">
                                            <div className="img-out mx-1 border border-dark rounded-5 overflow-hidden ">
                                                <img width={'100%'} height={'100%'} src="./img/home/map/thaiLan.jpg" alt="..." />
                                            </div>
                                            <div className="title ps-2 pt-3">
                                                <p className='mb-0'>Thái Lan</p>
                                            </div>
                                        </div>
                                        <div className="col-4 pt-5">
                                            <div className="img-out mx-1 border border-dark rounded-5 overflow-hidden ">
                                                <img width={'100%'} height={'100%'} src="./img/home/map/phap.jpg" alt="..." />
                                            </div>
                                            <div className="title ps-2 pt-3">
                                                <p className='mb-0'>Pháp</p>
                                            </div>
                                        </div>
                                        <div className="col-4 pt-5">
                                            <div className="img-out mx-1 border border-dark rounded-5 overflow-hidden ">
                                                <img width={'100%'} height={'100%'} src="./img/home/map/hoaKy.jpg" alt="..." />
                                            </div>
                                            <div className="title ps-2 pt-3">
                                                <p className='mb-0'>Hoa Kỳ</p>
                                            </div>
                                        </div>
                                        <div className="col-4 pt-5">
                                            <div className="img-out mx-1 border border-dark rounded-5 overflow-hidden ">
                                                <img width={'100%'} height={'100%'} src="./img/home/map/hanQuoc.jpg" alt="..." />
                                            </div>
                                            <div className="title ps-2 pt-3">
                                                <p className='mb-0'>Hàn Quốc</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='modal-dialog modal-lg  rounded-5 overflow-hidden' id="myModal" role="dialog" style={{zIndex:10, position:"fixed", top: 161, left:'50%', background:'#ffffff', transform: 'translateX(-65%)'}}>
                        <div className="date-checkIn">
                        </div>
                        <div className="date-checkOut">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}