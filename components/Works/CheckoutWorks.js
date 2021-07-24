import styled from "styled-components"

export default function CheckoutWorks() {
  return (
    <Wrapper>
      <Title>CHECK OUT SOME OF MY WORKS.</Title>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 70px;
`

export const Title = styled.p`
  font: 18px/30px "opensans-bold", sans-serif;
  color: #95a3a3;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
`