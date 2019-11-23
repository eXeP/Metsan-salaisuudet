import React, { useState } from 'react'
import Map from '../Map'
import Page from '../Page'
import InfoContainer from '../InfoContainer'
import Carousel from '../Carousel'

const slides = [
  {
    title: 'Title 1'
  },
  {
    title: 'Title 2'
  },
  {
    title: 'Title 3'
  }
]

const MapView = () => {
  const [selectedRoute, setSelectedRoute] = useState(0)
  const [showPicker, setShowPicker] = useState(false)
  return (
    <Page>
      <Map />
      {showPicker ? (
        <InfoContainer />
      ) : (
        <Carousel options={slides} selectedRoute={selectedRoute} setSelectedRoute={setSelectedRoute} />
      )}
    </Page>
  )
}

export default MapView
