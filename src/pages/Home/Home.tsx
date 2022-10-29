import React, { useState } from 'react'
import Carousel from '../../component/Carousel/Carousel'
import FooterPage from '../../component/Footer/FooterPage'
import HeaderPage from '../../component/Header/HeaderPage'
import ItemProduct from '../../component/ItemProduct/ItemProduct'
import ModalHeader from '../../component/Modal/ModalHeader/ModalHeader'



type Props = {
    title?: string
}

export default function Home({title}: Props) {

  const [heightCarousel,setHeightCarousel] = useState('100px')
  const [heightHeader,setHeightHeader] = useState('180px')

  const scrollDownSetHeightCarousel = () => {
    if(window.scrollY > 0) {
      setHeightCarousel("80px");
    }else{
      setHeightCarousel("100px");
    }
  }

  const scrollDownSetHeightHeader = () => {
    if(window.scrollY > 0) {
      setHeightHeader("160px");
    }else{
      setHeightHeader("180px");
    }
  }

  window.onscroll = () =>{
    scrollDownSetHeightCarousel();
    scrollDownSetHeightHeader();
  }
  return (
    <div>
      <HeaderPage />
      <ModalHeader />
      <div className='home-container mx-auto' style={{ position:"fixed", background:"#ffffff",width:"100%", height:`${heightHeader}`,margin:"0 48px", padding:`${heightCarousel} 48px 0`,zIndex:9}}>
        <div>
          <Carousel />
        </div>
      </div>
      <div className='home-body-container' style={{position:"relative",width:"100%", height: "100%", padding:"180px 48px 50px" }}>
        <div className='home-body-row d-flex justify-content-between'>
          <ItemProduct />
        </div>
      </div>
      <FooterPage />
    </div>
  )
}