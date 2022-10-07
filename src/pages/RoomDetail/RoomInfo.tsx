import React from 'react'

type Props = {}

export default function RoomInfo({}: Props) {
  return (
    <div>
        <h4 className='roomName'>Amazing Condotel Relax in Vungtau</h4>
        <div className='roomPhoto'>
            <img src="https://picsum.photos/800/400" alt="roomPhoto" />
        </div>
        <h4 className='roomDes'>
            Toàn bộ căn hộ condotel. Chủ nhà Phong
        </h4>
        <div>
        <span>6 khách - 2 phòng ngủ - 2 giường - 2 phòng tắm</span>

        </div>
        <div className='description'></div>
        <div className='bookingRoom'></div>
        <div className='convenient'></div>


    </div>
  )
}