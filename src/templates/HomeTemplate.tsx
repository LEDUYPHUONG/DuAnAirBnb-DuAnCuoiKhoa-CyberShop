import React from 'react'
import { Outlet } from "react-router-dom"

type Props = {
  title?:string
}

export default function HomeTemplate({title}: Props) {
    
  return (
    <div>
      <Outlet />
    </div>
  )
}