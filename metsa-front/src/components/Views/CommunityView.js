import React from 'react'
import Map from '../Map'
import Page from '../Page'
import InfoContainer from '../InfoContainer'
import CommunityPost from '../CommunityPost'

const CommunityView = ({ navigation }) => {
  return (
    <Page>
      <Map />
      <InfoContainer>
        <CommunityPost/>
      </InfoContainer>
    </Page>
  )
}

export default CommunityView
