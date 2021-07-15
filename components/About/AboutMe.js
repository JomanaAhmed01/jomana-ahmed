import styled from "styled-components"

export default function AboutMe() {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <Subtitle>
        My name is Jomana, I'm a Front-end ReactJS Developer. Currently I'm
        working as an independent programmer.
      </Subtitle>
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
  line-height: 30px;
  color: #7a7a7a;
  width: 80%;
`