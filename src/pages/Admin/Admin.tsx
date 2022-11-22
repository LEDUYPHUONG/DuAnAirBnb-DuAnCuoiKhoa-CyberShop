import React, {useState} from 'react'
import LocationInfoManage from '../../component/Admin/LocationInfoManage'
import ReservationManage from '../../component/Admin/ReservationManage'
import RoomInfoManage from '../../component/Admin/RoomInfoManage'
import UserManage from '../../component/Admin/UserManage'
import DropdownAdmin from '../../component/Dropdown/DropdownAdmin'

export default function Admin() {
    const [isComponent, setIsComponent] = useState(1)
    const handleShowComponentAdmin = () => {
        if(isComponent === 1) {
            return <UserManage />
        } else if(isComponent === 2) {
            return <LocationInfoManage />
        } else if(isComponent === 3) {
            return <RoomInfoManage />
        } else {
            return <ReservationManage />
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
                    <button className='btn btn-primary mt-1 w-100 rounded-0 text-start' style={{cursor: 'pointer'}} onClick={() =>{
                        setIsComponent(1)
                    }}>User management</button>
                    <button className='btn btn-primary mt-1 w-100 rounded-0 text-start' style={{cursor: 'pointer'}} onClick={() =>{
                        setIsComponent(2)
                    }}>Location information management</button>
                    <button className='btn btn-primary mt-1 w-100 rounded-0 text-start' style={{cursor: 'pointer'}} onClick={() =>{
                        setIsComponent(3)
                    }}>Manage room information</button>
                    <button className='btn btn-primary mt-1 w-100 rounded-0 text-start' style={{cursor: 'pointer'}} onClick={() =>{
                        setIsComponent(4)
                    }}>Reservation management</button>
                </div>
            </div>
            <div className='w-100'>
                <div className='admin-header w-100 d-flex justify-content-end align-items-center px-5 py-3 border-bottom' style={{ height: '50px'}}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <span className='pe-3'>Admin</span>
                        <DropdownAdmin />
                    </div>
                </div>
                {handleShowComponentAdmin()}
            </div>
        </div>
    </div>
  )
}