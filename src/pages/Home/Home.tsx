import { iteratorSymbol } from 'immer/dist/internal'
import React, { useState } from 'react'
import Carousel from '../../component/Carousel/Carousel'
import FooterPage from '../../component/Footer/FooterPage'
import HeaderPage from '../../component/Header/HeaderPage'
import ItemProduct from '../../component/ItemProduct/ItemProduct'
import { arrIconCarousel } from '../../data/api/dataDemo'


type Props = {
    title?: string
}

export default function Home({title}: Props) {
  const arrItemProduct = arrIconCarousel;
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

  const renderItem = () => {
    return arrItemProduct.map((item,index) => {
      // {renderItem()}
      return null
    })
  }




  return (
    <div>
      <HeaderPage />
      <div className="modal-container">
        <div className="modal fade px-0 " id="myModal" role="dialog">
          <div className="modal-fullscreen-sm-down " >
            <div className="modal-content border border-0 rounded-0" >
              <div className="modal-header">
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
                <p>This is a small modal.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
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