import styled from "styled-components"
import Link from "next/link"

export default function AboutMe() {
  return (
    <Wrapper>
      <Title>Contact Details</Title>
      <Subtitle>Jomana Ahmed</Subtitle>
      <Subtitle>Cairo, Egypt</Subtitle>
      <Subtitle>ojy.ahmed@outlook.com</Subtitle>
      <a href="https://www.linkedin.com/in/jomana-ahmed/" target='_blank'><Subtitle>https://www.linkedin.com/in/jomana-ahmed/</Subtitle></a>
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