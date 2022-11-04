import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ModalAddAdmin from '../../component/Modal/ModalAdmin/ModalAddAdmin'
import ModalAdmin from '../../component/Modal/ModalAdmin/ModalAdmin'
import { RootState } from '../../redux/configStore'
import { useAppDispatch } from '../../redux/example/hooks'
import { getArrAdminUserApi, setNumberPage } from '../../redux/reducer/adminReducer'


export default function Admin() {
    const { arrAdminUser, numberPage } = useSelector((state: RootState) => state.adminReducer)
    const dispatch = useAppDispatch()
    useEffect(() =>{
        dispatch(getArrAdminUserApi(numberPage))
        console.log(arrAdminUser);
        
      },[numberPage]);
    const renderAdminUserAccount = () => {
        return arrAdminUser.map((item,index) =>{
            return <tr key={index}>
                        <td scope="row"> {item.id} </td>
                        <td>{item.name}</td>
                        <td>
                            <img style={{width:'50px', height:'50px'}} src={item.avatar} alt="..." />
                        </td>
                        <td>{item.phone}</td>
                        <td>{item.gender}</td>
                        <td>{item.role}</td>
                        <td>
                            <button className='btn btn-primary'>Xem thông tin chi tiết</button>
                            <button className='btn btn-warning mx-3 text-dark'>Sửa</button>
                            <button className='btn btn-danger'>x</button>
                        </td>
                    </tr>
            
        })
    }

    const handelClickBtnPrevSetArrAdminUser = () => {
        if(numberPage === 1){
            return null
        } else {
            dispatch(setNumberPage(numberPage - 1))
        }
    }

    const handelClickBtnNextSetArrAdminUser = () => {
        if(arrAdminUser.length === 0){
            return null
        } else {
            dispatch(setNumberPage(numberPage + 1))
        }
    }

  return (
    <div>
        <div className='d-flex justify-content-start align-items-start'>
            <div className='admin-navbar' style={{width:'400px'}}>
                <div className='Dashboard bg-dark text-white text-end p-3 d-flex justify-content-end align-items-center' style={{height:'50px'}}>
                    <span> Dashboard</span>
                    <span className='px-3'><i className="fa-solid fa-bars"></i></span>
                </div>
                <div className='admin-navbar-body' style={{width:'100%'}}>
                    <button className='btn btn-primary mt-1 w-100 rounded-0 text-start' style={{cursor: 'pointer'}}>User management</button>
                    <button className='btn btn-primary mt-1 w-100 rounded-0 text-start' style={{cursor: 'pointer'}}>Location information management</button>
                    <button className='btn btn-primary mt-1 w-100 rounded-0 text-start' style={{cursor: 'pointer'}}>Manage room information</button>
                </div>
            </div>
            <div className='w-100'>
                <div className='admin-header w-100 d-flex justify-content-end align-items-center px-5 py-3 border-bottom' style={{ height: '50px'}}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <span className='pe-3'>Admin</span>
                        <ModalAdmin />
                    </div>
                </div>
                <div className='border-start px-5' style={{height: 'calc(100vh - 50px)'}}>
                    <button className='btn btn-success border-0 my-5' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add admin</button>
                    <ModalAddAdmin />
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
                        <tbody className='w-100'>
                            {renderAdminUserAccount()}
                            
                        </tbody>
                    </table>
                    <div>
                        <div className='' style={{position:'fixed', zIndex:10, bottom:50, right:50}}>
                            <button className='btn btn-primary mx-2'  onClick={() => {
                                handelClickBtnPrevSetArrAdminUser()
                            }}>
                                <i className="fa-solid fa-arrow-left me-2"></i>
                                prev
                            </button>
                            <button className='btn btn-primary mx-2'> {numberPage} </button>
                            <button className='btn btn-primary mx-2' onClick={() => {
                                handelClickBtnNextSetArrAdminUser()
                            }}>
                                
                                next
                                <i className="fa-solid fa-arrow-right ms-2" ></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}