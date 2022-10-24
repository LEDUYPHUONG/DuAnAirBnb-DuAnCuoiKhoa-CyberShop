import React from 'react'
import ModalAdmin from '../../component/Modal/ModalAdmin/ModalAdmin'


export default function Admin() {
  return (
    <div>
        <div className='admin-header w-full d-flex justify-content-between align-items-center px-5 py-3 border-bottom'>
            <div className='Dashboard d-flex justify-content-end align-items-center' style={{width:'200px'}}>
                <span >Dashboard</span>
                <span className='px-3'><i className="fa-solid fa-bars"></i></span>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <span className='pe-3'>Admin</span>
                <ModalAdmin />
            </div>
        </div>
        <div className='admin-body w-full d-flex justify-content-start align-items-start'>
            <div className='admin-navbar mx-5' style={{width:'200px'}}>
                <div className='pt-5' style={{cursor: 'pointer'}}>Quản lý người dùng</div>
                <div className='pt-5' style={{cursor: 'pointer'}}>Quản lý thông tin vị trí</div>
                <div className='pt-5' style={{cursor: 'pointer'}}>Quản lý thông tin phòng</div>
                <div className='pt-5' style={{cursor: 'pointer'}}>Quản lý đặt phòng</div>
            </div>
            <div className='px-5 border-start' style={{width: '-webkit-fill-available', height:'calc(100vh - 55px)'}}>
                <p className='my-5'>Thêm phòng</p>
                <div className='pb-3' style={{width:'100%'}}>
                    <input className='border-bottom' style={{border:'none', outline:'none', width:'400px'}} type="text" placeholder='Nhập vào tên phòng'/>
                    <button type="button" className="btn btn-primary me-5 ms-2"> Tìm</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã phòng</th>
                            <th>Tên phòng</th>
                            <th>Hình ảnh</th>
                            <th>Location</th>
                            <th>Guesmax</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        <tr>
                            <td scope="row"> 1 </td>
                            <td>place 1</td>
                            <td>
                                <img style={{width:'50px', height:'50px'}} src="https://i.pravatar.cc/" alt="..." />
                            </td>
                            <td>dreamLand</td>
                            <td>4</td>
                            <td>
                                <button className='btn btn-primary'>Xem thông tin chi tiết</button>
                            </td>
                            <td>Sửa</td>
                            <td><button className='btn btn-danger'>x</button></td>
                        </tr>
                        <tr>
                            <td scope="row"> 1 </td>
                            <td>place 1</td>
                            <td>
                                <img style={{width:'50px', height:'50px'}} src="https://i.pravatar.cc/" alt="..." />
                            </td>
                            <td>dreamLand</td>
                            <td>4</td>
                            <td>
                                <button className='btn btn-primary'>Xem thông tin chi tiết</button>
                            </td>
                            <td>Sửa</td>
                            <td><button className='btn btn-danger'>x</button></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <div className='' style={{position:'fixed', zIndex:10, bottom:50, right:50}}>
                        <button className='btn btn-primary mx-2'><i className="fa-solid fa-arrow-left"></i> prev</button>
                        <button className='btn btn-primary mx-2'> 1 </button>
                        <button className='btn btn-primary mx-2'> 2 </button>
                        <button className='btn btn-primary mx-2'> 3 </button>
                        <button className='btn btn-primary mx-2'> 4 </button>
                        <button className='btn btn-primary mx-2'> 5 </button>
                        <button className='btn btn-primary mx-2'> 6 </button>
                        <button className='btn btn-primary mx-2'> 7 </button>
                        <button className='btn btn-primary mx-2'> 8 </button>
                        <button className='btn btn-primary mx-2'> 9 </button>
                        <button className='btn btn-primary mx-2'> 10 </button>
                        <button className='btn btn-primary mx-2'><i className="fa-solid fa-arrow-right"></i> next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}