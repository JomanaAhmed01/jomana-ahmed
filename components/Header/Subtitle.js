import styled from "styled-components"

export default function Subtitle() {
  return (
    <Wrapper>
      <SubTitle>
        I'm a skilled <Span>Frontend Web Developer</Span> and I'm always eager to learn ,
        open to change my way in thinking and implementing things, open to learn
        new technologies, frameworks and development techniques everyday!
      </SubTitle>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`

export const SubTitle = styled.p`
  font: 18px/1.9em "librebaskerville-regular", serif;
  color: #a8a8a8;
  text-shadow: 0px 1px 2px rgb(0 0 0 / 50%);
  text-align: center;
`

export const Span = styled.span`
  color: #ffffff;
`