import React from 'react'


export default function ModalHeader() {
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
                                                <span className='btn buttonGradient' style={{border: "none", color: "white", borderRadius: "50px", width: "130px", height: "48px", lineHeight: "14px", textAlign: "center", outline:"none"}}>
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
                </div>
            </div>
        </div>
    </>
  )
}