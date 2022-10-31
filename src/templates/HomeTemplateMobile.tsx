// tsrfc
import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {
    title? :string
}

export default function HomeTemplateMobile({title}: Props) {
  return (
    <>
        <Outlet />
    </>
);
}