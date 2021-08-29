import styled from "styled-components"

export default function AboutMe() {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <Subtitle>
        My name is Jomana Ahmed, I am a skilled Frontend Web Developer and I am always eager
        to learn, open to change my way in thinking and implementing things,
        open to learn new technologies, frameworks and development techniques
        everyday!
      </Subtitle>
      <Title>My Coding Skills</Title>
      <Subtitle>
        React.JS | Next.JS | Styled Components | Material-UI | Ant-Design | HTML
        | CSS | JavaScript | Node.JS | Git | Github | Github Flow | VSCode |
        Vercel | Github Pages | JSON | JSX | Responsive Design.
      </Subtitle>
      <Title>My Professional Skills</Title>
      <Subtitle>
        Problem Solving | Time Management | Communications Skills | Remote-Work
        | Creativity | Attention to Details.
      </Subtitle>
    </Wrapper>
  ) 
}

export const Wrapper = styled.div`
`

export const Title = styled.p`
  font: 22px/30px "opensans-bold", sans-serif;
  color: #fff;
  margin-bottom: 12px;
  font-weight: bold;
`

export const Subtitle = styled.p`
  line-height: 30px;
  color: #7a7a7a;
  width: 90%;
`