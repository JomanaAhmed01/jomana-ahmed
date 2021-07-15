import styled from "styled-components"
import Avatar from "../components/About/Avatar"
import TextWrapper from "../components/About/TextWrapper"

export default function AboutCompound() {
  return (
    <Wrapper>
      <Avatar />

      <TextWrapper />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  background: #2b2b2b;
  display: flex;
  justify-content: center;
`