import React from 'react'
import { Outlet } from "react-router-dom"
import FooterPage from '../component/Footer/FooterPage'
import HeaderPage from '../component/Header/HeaderPage'

type Props = {
  title?:string
}

export default function HomeTemplate({title}: Props) {
    
  return (
    <div>
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </div>
  )
}