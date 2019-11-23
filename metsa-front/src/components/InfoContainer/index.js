import React, { useState } from 'react'
import Draggable from 'react-draggable'
import styled from 'styled-components'

const MENU_MAX_HEIGHT = 0.8
const MENU_WIDTH = 1
const MENU_MIN_HEIGHT = 60

const Container = styled.div`
  position: absolute;
  height: ${MENU_MAX_HEIGHT * 100}%;
  width: 100%;
  bottom: 0;
`

const Menu = styled.div`
  position: relative;
  height: 100%;
  width: ${MENU_WIDTH * 100}%;
  background-color: #fafafa;
  bottom: 0;
  ${({ isDragging }) => !isDragging ? 'transition: transform .4s;' : ''}
`

const InfoContainer = () => {
  const levels = {
    0: -1,
    1: Math.floor(MENU_MAX_HEIGHT * window.screen.height) - 40,
    2: Math.floor((MENU_MAX_HEIGHT / 2) * window.screen.height),
    3: 0
  }

  const [x, setX] = useState(Math.floor(0.5 * window.screen.width) - Math.floor((MENU_WIDTH / 2) * window.screen.width))
  const [y, setY] = useState(Math.floor(MENU_MAX_HEIGHT * window.screen.height) - MENU_MIN_HEIGHT)
  const [isDragging, setIsDragging] = useState(false)

  const bottom = Math.floor(0.8 * window.screen.height) - MENU_MIN_HEIGHT

  const getNearestLevel = () => {
    let minLevel = 0
    Object.entries(levels).forEach(([level, value]) => {
      if (Math.abs(y - levels[minLevel]) > Math.abs(y - value)) {
        minLevel = level
      }
    })
    return levels[minLevel]
  }

  const onDrag = (_, position) => {
    setY(position.y)
    console.log('position', position.y)
  }

  const onStart = () => {
    setIsDragging(true)
  }

  const onStop = () => {
    setIsDragging(false)
    setY(getNearestLevel())
    console.log('lul', getNearestLevel())
  }

  return (
    <Container>
      <Draggable
        onStart={onStart}
        onStop={onStop}
        bounds={{ top: 0, bottom }}
        axis="y"
        onDrag={onDrag}
        position={{ x, y }}
      >
        <Menu isDragging={isDragging}></Menu>
      </Draggable>
    </Container>
  )
}

export default InfoContainer
