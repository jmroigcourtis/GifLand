import React from 'react'
import Card from 'react-bootstrap/Card'
import 'animate.css'

export const GifGridItem = ( { id, title, img } ) => {
  return (
  <div className='card m-2 flex-wrap animate__animated animate__fadeIn animate__slower' key={id}>
    <Card className='shadow'>
      <Card.Title><p>{title}</p></Card.Title>
      <Card.Img variant="top" src={img} />
    </Card>
  </div>
  )
}
