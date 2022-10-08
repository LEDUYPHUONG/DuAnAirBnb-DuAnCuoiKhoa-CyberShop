import React from 'react'
import Carousel from '../../component/Carousel/Carousel'
import FooterPage from '../../component/Footer/FooterPage'
import HeaderPage from '../../component/Header/HeaderPage'


type Props = {
    title?: string
}

export default function Home({title}: Props) {
  return (
    <div>
      <HeaderPage />
      <div className='home-container mx-auto' style={{width:"100%", height: "80px", padding:"100px 100px 0" }}>
        <div>
          <Carousel />
        </div>
      </div>
      <FooterPage />
    </div>
  )
}