import styled from "styled-components"

export default function Navbar() {
  return (
    <Wrapper>
      <Title>I am Jomana Ahmed Hussein Reyad Mohamed</Title>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
`

export const Title = styled.p`
  font: 90px/1.1em "opensans-bold", sans-serif;
  font-weight: bold;
  color: #fff;
  letter-spacing: -2px;
  margin: 0 auto 18px auto;
  text-shadow: 0px 1px 3px rgb(0 0 0 / 80%);
  width: 800px;

  @media screen and (max-width: 900px) {
    font: 70px/1.1em "opensans-bold", sans-serif;
    font-weight: bold;
    width: 100%;
  }

  /* @media screen and (max-width: 600px) {
    font: 80px/1.1em "opensans-bold", sans-serif;
    font-weight: bold;
  } */

  @media screen and (max-width: 470px) {
    font: 50px/1.1em "opensans-bold", sans-serif;
    font-weight: bold;
  }
`
