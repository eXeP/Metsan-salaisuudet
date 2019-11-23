import React, { useState } from 'react'
import Carousel, { PagingDots } from 'nuka-carousel'

const Card = ({ option: { title } }) => {
  return <p>{title}</p>
}

const CustomCarousel = ({ selectedRoute, setSelectedRoute, options }) => {
  const afterSlide = i => setSelectedRoute(i)

  return (
    <Carousel
      slideIndex={selectedRoute}
      afterSlide={afterSlide}
      renderCenterRightControls={() => null}
      renderCenterLeftControls={() => null}
      renderBottomCenterControls={() => null}
      renderTopCenterControls={props => (
        <div style={{ marginTop: '15px' }}>{true ? null : <PagingDots {...props} />}</div>
      )}
      style={{
        height: '30%',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%)',
        width: '100%',
        backgroundColor: 'white'
      }}
    >
      {options.map((option, i) => {
        return <Card key={i} option={option} />
      })}
    </Carousel>
  )
}

export default CustomCarousel
