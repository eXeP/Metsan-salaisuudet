import React, { useState } from 'react'
import styled from 'styled-components'

const getHeightFromMode = (mode) => {
  if (mode === 0) return '40px'
  else if (mode === 1) return '150px'
  else return '300px'
}

const Container = styled.div`
  position: absolute;
  height: ${({ mode }) => getHeightFromMode(mode)};
  width: 80%;
  background-color: pink;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`

const InfoContainer = () => {
  const [mode, setMode] = useState(0)
  return (
    <Container onClick={() => setMode(mode + 1)} mode={mode}>

    </Container>
  )
}

export default InfoContainer
