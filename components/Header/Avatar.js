import styled from "styled-components"

export default function AboutWrapper() {
  return (
    <Wrapper>
      <Image src="/images/profile-pic.jpg" />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const Image = styled.img`
  border-radius: 50%;
  width: 180px;

  @media screen and (max-width: 768px) {
    width: 35%;
  }
`