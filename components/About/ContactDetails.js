import styled from "styled-components"

export default function AboutMe() {
  return (
    <Wrapper>
      <Title>Contact Details</Title>
      <Subtitle>Jomana Ahmed</Subtitle>
      <Subtitle>Cairo, Egypt</Subtitle>
      <Subtitle>ojy.ahmed@outlook.com</Subtitle>
      <a
        href="https://www.linkedin.com/in/jomana-ahmed/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkSubtitle>https://www.linkedin.com/in/jomana-ahmed/</LinkSubtitle>
      </a>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  @media screen and (max-width: 890px) {
    margin-left: -70px;
  }
`

export const Title = styled.p`
  font: 22px/30px "opensans-bold", sans-serif;
  color: #fff;
  margin-bottom: 12px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    margin-left: 70px;
  }
`

export const Subtitle = styled.p`
  line-height: 15px;
  color: #7a7a7a;

  @media screen and (max-width: 768px) {
    margin-left: 70px;
  }
`

export const LinkSubtitle = styled.p`
  line-height: 15px;
  color: #1a53ff;

  :hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    margin-left: 70px;
  }
`
