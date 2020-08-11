import React from "react"
import styled from "styled-components"
import { Section1, MainContainer } from "components/sections"

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  gap: 20px;
  justify-content: center;
  padding-bottom: 50px;
`

const PostContainer = styled.div`
  border: 1px solid var(--borderColor);
  -webkit-box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);
  box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);

  &:hover {
    cursor: pointer;
  }
`

const PostPreview = styled.div`
  background-color: #fff;
  padding: 15px;
`

const PostTitle = styled.h5`
  color: black;
  margin: 0;
`
const PostIntro = styled.p`
  color: #4b5156;
  font-size: 14px;
`

const Post = ({ title, intro, link }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <PostContainer>
      <PostPreview>
        <PostTitle>{title}</PostTitle>
        <PostIntro>{intro}</PostIntro>
      </PostPreview>
    </PostContainer>
  </a>
)

const Posts = () => {
  return (
    <Section1>
      <MainContainer>
        <h3 style={{ textAlign: "center" }}>Things I wrote...</h3>
        <PostWrapper>
          <Post
            title="Role based access control in React-Redux apps"
            intro="Some insights into dealing with RBAC in React apps."
            link="https://dev.to/tsuki42/role-based-access-control-in-react-redux-apps-2i53"
          />
        </PostWrapper>
      </MainContainer>
    </Section1>
  )
}

export default Posts