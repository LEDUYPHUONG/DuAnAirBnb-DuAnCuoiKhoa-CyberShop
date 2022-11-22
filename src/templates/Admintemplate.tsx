import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import DropdownAdmin from '../component/Dropdown/DropdownAdmin'

export default function Admintemplate() {
   
  return (
    <div>
        <div className='d-flex justify-content-start align-items-start'>
            <div className='admin-navbar' style={{width:'400px'}}>
                <div className='Dashboard bg-dark text-white text-end p-3 d-flex justify-content-end align-items-center' style={{height:'50px'}}>
                    <span> Dashboard</span>
                    <span className='px-3'><i className="fa-solid fa-bars"></i></span>
                </div>
                <div className='admin-navbar-body' style={{width:'100%'}}>
                    <NavLink to='/admin/usermanage' className='text-decoration-none'>
                        <button className='btn btn-primary mt-1 w-100 rounded-0 text-start' style={{cursor: 'pointer'}}>User management</button>
                    </NavLink>
                    <NavLink to='/admin/locationinfomanage' className='text-decoration-none'>
                        <button className='btn btn-primary mt-1 w-100 rounded-0 text-start' style={{cursor: 'pointer'}}>Location information management</button>
                    </NavLink>
                    <NavLink to='/admin/roominfomanage' className='text-decoration-none'>
                        <button className='btn btn-primary mt-1 w-100 rounded-0 text-start' style={{cursor: 'pointer'}}>Manage room information</button>
                    </NavLink>
                    <NavLink to='/admin/reservationmanage' className='text-decoration-none'>
                        <button className='btn btn-primary mt-1 w-100 rounded-0 text-start' style={{cursor: 'pointer'}}>Reservation management</button>
                    </NavLink>
                </div>
            </div>
            <div className='w-100'>
                <div className='admin-header w-100 d-flex justify-content-end align-items-center px-5 py-3 border-bottom' style={{ height: '50px'}}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <span className='pe-3'>Admin</span>
                        <DropdownAdmin />
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    </div>
  )
}