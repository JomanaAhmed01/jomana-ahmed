import styled from "styled-components"

export default function AboutWrapper() {
  return (
    <Wrapper>
      <Image src="/images/profile-pic.jpg" />
    </Wrapper>
  )
}

export const Wrapper = styled.div``

export const Image = styled.img`
  border-radius: 50%;
  width: 130px;
`
