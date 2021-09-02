import styled from "styled-components"
import Avatar from '../components/Header/Avatar'
import Title from "../components/Header/Title"
import Subtitle from "../components/Header/Subtitle"
import SocialLinks from "../components/Header/SocialLinks"

export default function HeaderCompound() {
  return (
    <Wrapper>
      <Avatar />
      <Title />
      <Subtitle />
      <SocialLinks />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  background-image: url("/images/header-background.jpg");
  position: relative;
  height: 700px;
  min-height: 500px;
  width: 100%;
  background-size: cover !important;
  -webkit-background-size: cover !important;
  background-repeat: no-repeat;
  border: 1px solid black;
`
