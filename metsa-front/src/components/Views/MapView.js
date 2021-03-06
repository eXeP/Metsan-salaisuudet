import React, { useState, useEffect } from 'react'
import Map from '../Map'
import Page from '../Page'
import InfoContainer from '../InfoContainer'
import Carousel from '../Carousel'

const slides = [
  {
    title: 'Route 1'
  },
  {
    title: 'Route 2'
  },
  {
    title: 'Route 3'
  }
]

const MapView = () => {
  const [selectedRoute, setSelectedRoute] = useState(0)
  const [showPicker, setShowPicker] = useState(true)
  const [init, setInit] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setInit(true)
    }, 100)
  }, [])

  return (
    <Page>
      <Map />
      {init && (
        <>
          {!showPicker ? (
            <InfoContainer />
          ) : (
            <Carousel
              finish={() => setShowPicker(false)}
              options={slides}
              selectedRoute={selectedRoute}
              setSelectedRoute={setSelectedRoute}
            />
          )}
        </>
      )}
    </Page>
  )
}

export default MapView
