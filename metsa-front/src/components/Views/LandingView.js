import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import Page from '../Page'

const LandingView = () => {
  return (
    <Page>
      <p>123</p>
      <Link to={{
        pathname: '/map',
        state: {
          prev: true
        }
      }}>gogo</Link>
    </Page>
  )
}
export default LandingView
