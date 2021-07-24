import styled from "styled-components"
import SocialLinks from "../components/Footer/SocialLinks"

export default function FooterCompound() {
  return (
    <Wrapper>
      <SocialLinks />
      <Title>Created & Modified with love by Jomana Ahmed ♥️</Title>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  background-color: #202020;
  border: 3px solid #202020;
`

export const Title = styled.p`
  color: grey;
  text-align: center;

  @media screen and (max-width: 450px) {
    font-size: 13px;
  }
`