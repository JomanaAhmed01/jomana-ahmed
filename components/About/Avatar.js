import styled from "styled-components"

export default function AboutWrapper() {
  return (
    <Wrapper>
      <Image src="/images/profile-pic.jpg" />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  margin-top: 25px;
  margin-left: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Image = styled.img`
  border-radius: 50%;
  width: 180px;

  @media screen and (max-width: 1050px) {
    width: 160px;
  }
`
