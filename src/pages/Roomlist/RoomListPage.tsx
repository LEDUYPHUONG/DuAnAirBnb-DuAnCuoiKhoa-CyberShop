import React, {useEffect, useState} from 'react'
import RoomListItem from '../../component/RoomListItem/RoomListItem'
import './RoomListPage.css'
import HeaderPage from '../../component/Header/HeaderPage'
import FooterPage from '../../component/Footer/FooterPage'
import { relative } from 'path'
import axios from 'axios'
import { getToken } from '../../data/services/token.service'

const RoomListPage = () => {
  const arr = Array(10).fill(1)
  

  return (
    <>
      <HeaderPage />
      <div className='roomlist-container' style={{display: 'flex', width: "100%",marginTop:"80px"}}>
        <div className="roomlist-item_" style={{width:"40%", padding:"0px 15px"}}>
          <div className="roomlist-item_title" style={{margin:"24px 0px 8px", display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <p style={{marginLeft:"10px",marginBottom:"0",padding:0,fontSize:"15px"}}>Hơn 1.000 nhà ở</p>

            <div>
                  <div style={{padding:"7px 0"}}>
                    <span className='d-flex border rounded-4' style={{padding:"2px 10px", width: 120, height: 50}}>
                      <span style={{ display: 'flex', alignItems: 'center' , marginRight: 20}}>
                        <img src="./img/setting-lines.png" alt="" style={{width:12,height:12}} />
                      </span>
                      <span style={{display: 'flex', alignItems: 'center'}}>Bộ lọc</span>
                    </span>
              </div>
              
            </div>
            
          </div>
          <div className="roomlist-item_content" style={{display:'flex', width:"100%", flexWrap: 'wrap'}}>
            {arr.map((item, index) => (
              <div key={index} style={{ width: '50%', marginTop: 20 }}>
                <RoomListItem />
              </div>
            ))}
          </div>
        </div>
        <div className="roomlist-map" style={{width:"60%"}}>
          <iframe style={{width:"100%", height:"100%", border:0}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.455492242454!2d106.66801531433677!3d10.776383562142328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fef16459c77%3A0xf9ba55fa4f33e17d!2zMTZBIEzDqiBI4buTbmcgUGhvbmcsIFBoxrDhu51uZyAxMiwgUXXhuq1uIDEwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1665331609460!5m2!1svi!2s" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <FooterPage />
    </>
  )
}

export default RoomListPage