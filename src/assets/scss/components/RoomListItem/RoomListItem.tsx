import React from 'react'
import './RoomListItem.css'

const RoomListItem = () => {
  return (
    <div className="roomlist-item">
      <img className="roomlist-item_img" src="https://kientruccb.vn/wp-content/uploads/2020/02/mau-thiet-ke-nha-dep-truyen-cam-hung8.jpg" alt="" />
      <div className="roomlist-item_name">
        <h3>Nhà tại Výloboky, ukraina</h3>
        <p>5,0 (51)</p>
      </div>
      <div className="roomlist-item_des">
        <p>Taxi Grove</p>
        <p>1 giường queen</p>
        <p>Ngày 30 tháng 10 - Ngày 04 tháng 11</p>
      </div>
      <p className="roomlist-item_price">$79 <span>đêm</span></p>
      <div className="roomlist-icon_left">
        Chủ nhà siêu cấp
      </div>
      <div className="roomlist-icon_right"></div>
    </div>
  )
}

export default RoomListItem