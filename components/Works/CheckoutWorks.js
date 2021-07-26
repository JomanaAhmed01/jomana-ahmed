import styled from "styled-components"

export default function CheckoutWorks() {
  return (
    <Wrapper>
      <Title>CHECK OUT SOME OF MY PROJECTS.</Title>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  margin-top: 30px;
`

export const Title = styled.p`
  font: 18px/30px "opensans-bold", sans-serif;
  color: #95a3a3;
  font-weight: bold;
  text-align: center;
  position: relative;
  top: -30px;
`