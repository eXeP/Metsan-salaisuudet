import React, { useState } from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #00b265;
  display: flex;
  justify-content: space-around;
  padding: 10px 5px;
`

const FooterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const FooterButtonIcon = styled.img`
  height: 36px;
  width: 36px;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`

const FooterButtonTitle = styled.span`
  font-size: 12px;
  color: white;
  font-weight: bold;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`

const FooterButton = ({ onClick, icon, content, active = false }) => {
  return (
    <FooterButtonContainer onClick={onClick}>
      <FooterButtonIcon active={active} src={icon} />
      <FooterButtonTitle active={active}>{content}</FooterButtonTitle>
    </FooterButtonContainer>
  )
}

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  return (
    <FooterContainer>
      <FooterButton
        onClick={() => setActiveIndex(0)}
        active={activeIndex === 0}
        icon="compass.svg"
        content="Guided adventures"
      />
      <FooterButton
        onClick={() => setActiveIndex(1)}
        active={activeIndex === 1}
        icon="map.svg"
        content="Own adventures"
      />
      <FooterButton
        onClick={() => setActiveIndex(2)}
        active={activeIndex === 2}
        icon="community.svg"
        content="Community"
      />
    </FooterContainer>
  )
}

export default Footer
