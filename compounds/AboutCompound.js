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
  background: #111111;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const ItemsWrapper = styled.div`
  display: flex;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 70px;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`
