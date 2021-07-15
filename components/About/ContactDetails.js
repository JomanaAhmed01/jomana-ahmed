import styled from "styled-components"

export default function AboutMe() {
  return (
    <Wrapper>
      <Title>Contact Details</Title>
      <Subtitle>Jomana Ahmed</Subtitle>
      <Subtitle>123 Fake St.</Subtitle>
      <Subtitle>Cairo, Egypt</Subtitle>
      <Subtitle>+1234567890</Subtitle>
      <Subtitle>ojy.ahmed@outlook.com</Subtitle>
    </Wrapper>
  )
}

export const Wrapper = styled.div``

export const Title = styled.p`
  font: 22px/30px "opensans-bold", sans-serif;
  color: #fff;
  margin-bottom: 12px;
  font-weight: bold;
`

export const Subtitle = styled.p`
  line-height: 15px;
  color: #7a7a7a;
`