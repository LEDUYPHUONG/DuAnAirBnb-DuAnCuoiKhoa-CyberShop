// tsrfc
import React from 'react'
// import Header from '../components/Header/Header'
import { Outlet } from "react-router-dom"

type Props = {
  title?:string
}

export default function HomeTemplate({title}: Props) {
    
  return (
    <>
        {/* <Header /> */}
        <Outlet />
    </>
  )
}