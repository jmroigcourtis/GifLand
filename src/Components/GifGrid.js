import React from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../Hooks/useFetchGif'


function FetchApi( {categories, rangeValue} ) {

   const {data: images, loading} =  useFetchGifs({categories, rangeValue});    
  return (
    <>

    {loading && <p className='text-center'>Loading</p>}

    <div className='cardGrid'>
      <hr />
      <h2>{images.title}</h2>
      {
        
        images.map(img => (
          <GifGridItem
          key={img.id}
          {...img}
          />
        ))
      
      }

   
    </div>
    </>
  )
}

export default FetchApi