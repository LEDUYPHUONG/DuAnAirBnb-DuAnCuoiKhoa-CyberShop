import React from 'react'
import FooterPage from '../../component/Footer/FooterPage'
import HeaderPage from '../../component/Header/HeaderPage'

type Props = {
    title?: string
}

export default function Home({title}: Props) {
  return (
    <div className='home_container'>
        <p>welcome to us!</p>
    </div>
  )
}