import React from 'react'
import './RoomListItem.css'

const RoomListItem = () => {
  return (
    <div className="roomlist-item" style={{margin:"0px 10px", position:'relative'}}>
      <img className="roomlist-item_img" style={{width:"100%",borderRadius:"10px",cursor:'pointer'}} src="https://kientruccb.vn/wp-content/uploads/2020/02/mau-thiet-ke-nha-dep-truyen-cam-hung8.jpg" alt="..." />
      <div className="roomlist-item_name" style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginTop:"10px"}}>
        <h3 style={{fontSize:"15px"}}>Nhà tại Výloboky, ukraina</h3>
        <p>5,0 (51)</p>
      </div>
      <div className="roomlist-item_des">
        <p style={{color:"#746b6b",margin:"0px 0px"}}>Taxi Grove</p>
        <p style={{color:"#746b6b",margin:"0px 0px"}}>1 giường queen</p>
        <p style={{color:"#746b6b",margin:"0px 0px"}}>Ngày 30 tháng 10 - Ngày 04 tháng 11</p>
      </div>
      <p className="roomlist-item_price" style={{fontSize:"15px"}} >$79 <span>đêm</span></p>
      <div className="roomlist-icon_left" style={{position:'absolute',top:"15px",left:"15px",borderRadius:"5px",backgroundColor:"#fafafa",padding:"5px"}}>
        Chủ nhà siêu cấp
      </div>
      <div className="roomlist-icon_right" style={{position:"absolute", top:"15px", right: "15px",  width:"20px", height:"20px",opacity:0.8}}>
        <img width={21 } height={18} src="./img/home/heart.png" alt="..." />
      </div>
    </div>
  )
}

export default RoomListItem