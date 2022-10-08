import React from 'react'

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