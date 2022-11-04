import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
    title?: string
}

export default function HomeMobile({title}: Props) {
  return (
    <div>
      <div>HomeMobile</div>
      <div style={{height:50}}></div>
        <footer className='bg-dark text-white d-flex justify-content-center p-3 w-100 position-fixed bottom-0'>
            <div className="mx-5">
            <NavLink to={'/'}>
                <i className="fa fa-home" /> Home
            </NavLink>
            </div>
            <div className="mx-5">
            <NavLink to={'/detail'}>
                <i className="fa fa-home" /> Detail
            </NavLink>
            </div>
            <div className="mx-5">
            <NavLink to={'/login'}>
                <i className="fa fa-home" /> Login
            </NavLink>
            </div>
        </footer>
    </div>
    
  )
}