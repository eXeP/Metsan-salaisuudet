import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const getMapOptions = () => {
  return {
    streetViewControl: false,
    scaleControl: true,
    fullscreenControl: false,
    styles: [
      {
        featureType: 'poi.business',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      }
    ],
    gestureHandling: 'greedy',
    disableDoubleClickZoom: true,
    minZoom: 11,
    maxZoom: 18,
    mapTypeId: 'satellite',
    zoomControl: true,
    clickableIcons: false
  }
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

const SimpleMap = () => {
  const center = {
    lat: 59.95,
    lng: 30.33
  }
  const zoom = 11
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={getMapOptions()}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap
