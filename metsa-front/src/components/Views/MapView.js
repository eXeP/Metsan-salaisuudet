import React from 'react'
import Map from '../Map'
import Page from '../Page'
import InfoContainer from '../InfoContainer'

const MapView = ({ navigation }) => {
  return (
    <Page>
      <Map />
      <InfoContainer />
    </Page>
  )
}

export default MapView
