import React, { useState } from 'react'
import styled from 'styled-components'

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px white;
  background-color: #fafafa;
  box-shadow: rgba(0,0,0,0.8) 0 0 10px;
  border-radius: 1em;
  padding: 0em;
  margin: 0.5em;
`

const PostTitle = styled.span`
  padding: 0.5em;
  font-size: 1.5em;
  font-style: bold;
`

const PostText = styled.span`
  padding: 0.5em;

`

const CommunityPost = () => {

  return (
    <PostContainer>
      <PostTitle>Post test</PostTitle>
      <PostText>lorem ipsum</PostText>
    </PostContainer>
  )
}

export default CommunityPost
