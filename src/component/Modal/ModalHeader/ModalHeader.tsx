import React, { useEffect, useRef, useState } from 'react'
import 'antd/dist/antd.min.css'
import DatePickerAntd from '../../datePickerAntd/DatePickerAntd'
import { RootState } from '../../../redux/configStore'
import { setKeySearch } from '../../../redux/reducer/keySearchReducer'
import { useAppDispatch } from '../../../redux/example/hooks'
import { useSelector } from 'react-redux'
import { arrLocationSearch } from '../../../data/api/dataDemoSearch'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { ProductModel, setArrProductApi, setProductSearch } from '../../../redux/reducer/productReducer'
import { http } from '../../../util/setting'

export default function ModalHeader() {
    const keySearch =  useSelector((state: RootState) => state.keySearchReducer)
    const {productSearch} =  useSelector((state: RootState) => state.productReducer)
    const arrSearchLocation:ProductModel[] = arrLocationSearch
    const dispatch = useAppDispatch()
    const navigate = useNavigate();


    let keywordRef = useRef("");
    let [searchParams, setSearchParams] = useSearchParams();
    let [arrSearch, setArrSearch] = useState([]);
    const [valueInputSearch,setValueInputSearch] = useState('')
    let timeoutRef = useRef({});
    const getLocationByKeyword = async () => {
        try {
        // lấy keyword từ trên url: url?keyword=abc&type=nike
        let keyword = searchParams.get("keyword");
        console.log('keyword',keyword);
        
        if (keyword?.trim() !== "" && keyword != null) {
            let response = await http.get('/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=5&keyword=' + keyword)
            console.log(response.data.content.data);
            setArrSearch(response.data.content.data);
            clearTimeout(timeoutRef.current as NodeJS.Timeout);
        } else {
            setArrSearch([]);
        }
        } catch (err) {
        }
    };
    
    useEffect(() => {
        // Khi từ khóa có giá trị thì mới chạy
        getLocationByKeyword();
        
    }, [keywordRef.current]);
    
    const handleChange = (e:any) => {
    keywordRef.current = e.target.value;
    timeoutRef.current = setTimeout(() => {
        setSearchParams({ keyword: keywordRef.current });
    }, 1000);
    };

    const handleSubmit = (e:any) => {
    e.preventDefault();
    setSearchParams({ keyword: keywordRef.current });
    };

    const handelClickMoveToRoomListPage = () => {
        navigate('/roomlist')

    }

    const handleClickSetKeySearchLocation = (item:ProductModel) =>{
        console.log(`${item.tenViTri}`);

        setValueInputSearch(item.tenViTri + ', ' + item.tinhThanh + ', ' + item.quocGia)

        dispatch(setProductSearch(item))
        
        console.log('productSearch in productReducer',productSearch);
        
    }

    const renderLocationByKeyword = () => {
        return arrSearch.map((location: ProductModel, index) => {
            return (
                <div className="location-search" key={index}>
                    <button 
                    className='btn btn-outline-light py-2 px-5 text-start d-flex flex-nowrap justify-content-start align-items-center w-100 '
                    onClick={() =>{
                        handleClickSetKeySearchLocation(location)
                    }}
                    onBlur={() =>{
                        setValueInputSearch('')
                    }}
                    >
                        <div className="out-icon-location p-4 rounded-4 text-center text-dark" style={{fontSize:'25px', background:'#ebebeb', width:'60px', height:'60px'}}>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div 
                            className="text-location text-dark ps-4 fst-normal text-wrap" 
                            style={{fontFamily: "Roboto-Regular",fontSize: "18px"}}
                        >{location.tenViTri}, {location.tinhThanh}, {location.quocGia}
                        </div>
                    </button>
                </div>
            );
        });
    };

    const handleClickSetKeySearch = (item:ProductModel) =>{
        if(item.tenViTri === 'Tìm kiếm linh hoạt'){
            dispatch(setKeySearch(''))
        }else{
            dispatch(setKeySearch(`${item.tenViTri}`))
        }
    }

    const renderItemSearch = (arrLocation: ProductModel[]) => {
        return arrLocation.map((item,index) =>{
            return <div key={index} className="col-4 pt-5">
                        <div className="img-out mx-2" style={{cursor: "pointer"}} onClick={() => {
                            handleClickSetKeySearch(item)
                        }}>
                            <div className='img-in border border-dark rounded-5 overflow-hidden'>
                                <img width={'100%'} height={'100%'} src={item.hinhAnh} alt="..." />
                            </div>
                            <div className="title ps-2 pt-3 ">
                                <p className='mb-0' style={{fontFamily: "Roboto-Regular",fontSize: "14px"}}>{item.tenViTri}</p>
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
                                    <form onSubmit={handleSubmit}>
                                        <div className="order-bar-modal rounded-pill" style={{ border: "2px solid rgba(204, 204, 204, 0.5)", overflow:"hidden"}}>
                                            <div className="location d-flex justify-content-between align-items-center" style={{background:"#EBEBEB"}}>
                                                <div style={{width:1, height:0}}></div>
                                                    <button className='btn text-dark d-flex flex-column rounded-pill buttonUserActive buttonUserHover' style={{fontSize: "14px", outline:"none", padding:"10px 25px", width:"300px"}} type='button'>
                                                        <span>Địa điểm</span>
                                                        <input 
                                                            type="text" 
                                                            defaultValue={keySearch}
                                                            value={valueInputSearch} 
                                                            placeholder='Tìm kiếm điểm đến' 
                                                            style={{opacity: 0.5, fontFamily: "Roboto-Regular",fontSize: "14px", outline:"none",borderRadius:"0px", width:'100%'}}
                                                            id="keywordRef"
                                                            onChange={handleChange}
                                                            />
                                                    </button>
                                                <div style={{width:1, height:24, background:"#cccccc"}}></div>
                                                    <button className='btn text-dark d-flex flex-column rounded-pill buttonUserHover' style={{fontSize: "14px", outline:"none", padding:"10px 25px", width:"300px"}}>
                                                        <span>Ngày</span>
                                                        <input className='book-day' type="text" disabled placeholder='Thêm ngày' style={{opacity: 0.5, fontFamily: "Roboto-Regular",fontSize: "14px", outline:"none",borderRadius:"0px"}}/>
                                                    </button>
                                                    <div style={{width:1, height:24, background:"#cccccc"}}></div>
                                                    
                                                        <button type='button' className='btn text-dark d-flex flex-row justify-content-between align-items-center rounded-pill buttonUserHover ' style={{width:"300px", padding: "6px 5px 6px 25px"}} 
                                                        >
                                                            <span className='text-dark d-flex flex-column align-items-start ' style={{fontFamily: "Roboto-Regular",fontSize: "14px"}}>
                                                                <span>Khách</span>
                                                                <input className='book-people' type="text" disabled placeholder='Thêm khách' style={{opacity: 0.5, fontFamily: "Roboto-Regular",fontSize: "14px", outline:"none",borderRadius:"0px"}}/>
                                                            </span>
                                                            <span 
                                                            data-dismiss="modal"
                                                            className='btn d-flex justify-content-center align-items-center' 
                                                            style={{backgroundImage:bgImgBtnSearch, backgroundSize: "200% 200%",border: "none", color: "white", borderRadius: "50px", width: "130px", height: "48px", lineHeight: "14px", textAlign: "center", outline:"none"}}
                                                             onClick={() => {
                                                                handelClickMoveToRoomListPage()
                                                            }}>
                                                                <i className="fa-solid fa-magnifying-glass" style={{fontSize: "14px", lineHeight: "14px", width: "14px", height: "14px"}}></i>
                                                                <span className='ps-3'>Tìm kiếm</span>
                                                            </span>
                                                        </button>
                                                    
                                                </div>
                                            </div>
                                    </form>
                                    <div style={{paddingLeft:"140px"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-content modal-lg  rounded-5 overflow-hidden" style={{width:'600px',zIndex:10, position:"fixed", top: 161, left:'50%', background:'#ffffff', transform: 'translateX(-86%)'}}>
                        <div >
                            <div className="location-container">
                                <div className="location-out">
                                    <div className="location-inner py-5 ps-4 pe-3 overflow-auto" style={{height:'500px'}}>
                                        {renderLocationByKeyword()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none modal-content modal-lg  rounded-5 overflow-hidden" style={{width:'600px',zIndex:10, position:"fixed", top: 161, left:'50%', background:'#ffffff', transform: 'translateX(-86%)'}}>
                        <div >
                            <div className="location-container">
                                <div className="location-out">
                                    <div className="location-inner" style={{padding:'50px'}}>
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