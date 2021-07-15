import styled from "styled-components"
import Avatar from "../components/About/Avatar"
import AboutMe from "../components/About/AboutMe"
import ContactDetails from "../components/About/ContactDetails"

export default function AboutCompound() {
  return (
    <Wrapper>
      <ItemsWrapper>
        <Avatar />
        <TextWrapper>
          <AboutMe />
          <ContactDetails />
        </TextWrapper>
      </ItemsWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  background: #2b2b2b;
  padding-top: 50px;
  padding-bottom: 50px;
`

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 70px;
`
