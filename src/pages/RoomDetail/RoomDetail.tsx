import React from 'react'
import RoomComment from './RoomComment'
import RoomInfo from './RoomInfo'

type Props = {}

export default function RoomDetail({}: Props) {
  return (
    <div>
        <h3>RoomDetail</h3>
        <RoomInfo/>
        <RoomComment/>

    </div>
  )
}