import styled from "styled-components"
import Avatar from "../components/About/Avatar"
import AboutMe from "../components/About/AboutMe"

export default function AboutCompound() {
  return (
    <Wrapper>
      <Avatar />

      <AboutMe />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  background: #2b2b2b;
  display: flex;
  justify-content: center;
`