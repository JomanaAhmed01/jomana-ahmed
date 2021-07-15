import styled from "styled-components"
import Avatar from "../components/About/Avatar"
import AboutMe from "../components/About/AboutMe"
import ContactDetails from "../components/About/ContactDetails"

export default function AboutCompound() {
  return (
    <Wrapper>
      <Avatar />
      <TextWrapper>
        <AboutMe />
        <ContactDetails />
      </TextWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  background: #2b2b2b;
  display: flex;
  justify-content: space-around;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`