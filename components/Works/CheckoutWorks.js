import styled from "styled-components"

export default function AboutMe() {
  return (
    <Wrapper>
      <Title>CHECKOUT SOME OF MY WORKS.</Title>
    </Wrapper>
  )
}

export const Wrapper = styled.div``

export const Title = styled.p`
  font: 18px/30px "opensans-bold", sans-serif;
  color: #95a3a3;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
`