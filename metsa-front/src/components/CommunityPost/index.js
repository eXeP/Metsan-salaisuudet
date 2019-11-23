import React, { useState } from 'react'
import styled from 'styled-components'

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px white;
  background-color: #fafafa;
  box-shadow: rgba(0,0,0,0.8) 0 0 5px;
  border-radius: 1em;
  padding: 0em;
  margin: 0.5em;
`

const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 0em 0em 0.5em 0em;
`

const PostTitle = styled.span`
  padding: 0em 0.5em 0.2em 0.5em;
  font-size: 1.5em;
  font-style: bold;
`

const PostText = styled.span`
  padding: 0em 0.5em 0.5em 0.7em;
`

const Poster = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  flex-grow: 1;
`

const PosterImg = styled.img`
  border-radius: 50%;
  width: 2em;
  height: 2em;
  float: left;
  padding: 0em 1em 0em 0.5em;
`

const CommunityPost = () => {

  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>Post test</PostTitle>
        <Poster>
          <PosterImg src='otto.jpg'></PosterImg>
          <p>Otto L.</p>
        </Poster>
      </PostHeader>
      
      <PostText>lorem ipsum</PostText>
    </PostContainer>
  )
}

export default CommunityPost
