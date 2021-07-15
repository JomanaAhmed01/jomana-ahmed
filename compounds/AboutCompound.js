import styled from "styled-components"
import Avatar from "../components/About/Avatar"

export default function AboutCompound() {
  return (
    <Wrapper>
      <Avatar />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  background: #2b2b2b;
  display: flex;
  justify-content: space-around;
`