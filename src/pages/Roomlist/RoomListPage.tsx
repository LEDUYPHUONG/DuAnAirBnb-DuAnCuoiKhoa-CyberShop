import React from 'react'
import RoomListItem from '../../assets/scss/components/RoomListItem/RoomListItem'
import './RoomListPage.css'

const RoomListPage = () => {
  const arr = Array(10).fill(1)

  return (
    <div className='roomlist-container'>
      <div className="roomlist-item_">
        <div className="roomlist-item_title">
          <p>Hơn 1.000 nhà ở</p>
          <div>Bộ lọc</div>
        </div>
        <div className="roomlist-item_content">
          {arr.map((item, index) => (
            <div key={index} style={{width : '50%', marginTop: 20}}>
              <RoomListItem />
            </div>
          ))}
        </div>
      </div>
      <div className="roomlist-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.455492242454!2d106.66801531433677!3d10.776383562142328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fef16459c77%3A0xf9ba55fa4f33e17d!2zMTZBIEzDqiBI4buTbmcgUGhvbmcsIFBoxrDhu51uZyAxMiwgUXXhuq1uIDEwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1665331609460!5m2!1svi!2s" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default RoomListPage