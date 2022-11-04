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
            <div className='admin-navbar' style={{width:'255px'}}>
                <button className='btn btn-primary mt-1 w-100 rounded-0 text-start' style={{cursor: 'pointer'}}>User management</button>
                <button className='btn btn-primary mt-1 w-100 rounded-0 text-start' style={{cursor: 'pointer'}}>Location information management</button>
                <button className='btn btn-primary mt-1 w-100 rounded-0 text-start' style={{cursor: 'pointer'}}>Manage room information</button>
            </div>
            <div className='px-5 border-start' style={{width: '-webkit-fill-available', height:'calc(100vh - 55px)'}}>
                <p className='my-5'>Add admin</p>
                <div className='pb-3' style={{width:'100%'}}>
                    <input className='border-bottom' style={{border:'none', outline:'none', width:'400px'}} type="text" placeholder='Enter account or username'/>
                    <button type="button" className="btn btn-primary me-5 ms-2"> Find</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        <tr>
                            <td scope="row"> 1 </td>
                            <td>Hùng</td>
                            <td>
                                <img style={{width:'50px', height:'50px'}} src="https://i.pravatar.cc/" alt="..." />
                            </td>
                            <td>0900000biết</td>
                            <td>men</td>
                            <td>
                                Admin
                            </td>
                            <td>
                                <button className='btn btn-primary'>Xem thông tin chi tiết</button>
                                <button className='btn btn-warning mx-3 text-dark'>Sửa</button>
                                <button className='btn btn-danger'>x</button>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row"> 2 </td>
                            <td>Phong</td>
                            <td>
                                <img style={{width:'50px', height:'50px'}} src="https://i.pravatar.cc/" alt="..." />
                            </td>
                            <td>090000đéobiết</td>
                            <td>woman</td>
                            <td>
                                User
                            </td>
                            <td>
                                <button className='btn btn-primary'>Xem thông tin chi tiết</button>
                                <button className='btn btn-warning mx-3 text-dark'>Sửa</button>
                                <button className='btn btn-danger'>x</button>
                            </td>
                            
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