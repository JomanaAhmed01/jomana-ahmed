import styled from "styled-components"
import { Facebook } from "@styled-icons/boxicons-logos/Facebook"
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin"
import { Instagram } from "@styled-icons/icomoon/Instagram"
import { Github } from "@styled-icons/boxicons-logos/Github"

export default function SocialLinks() {
  return (
    <>
      <Wrapper>
        <a target="_blank" href="https://www.linkedin.com/in/jomana-ahmed/">
          <LinkedInIcon />
        </a>
        <a target="_blank" href="https://github.com/JomanaAhmed01">
          <GithubIcon />
        </a>
      </Wrapper>
    </>
  )
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding-bottom: 30px;
`

export const FacebookIcon = styled(Facebook)`
  color: grey;
  width: 45px;
  height: 45px;
  margin-right: 30px;
  cursor: pointer;

  :hover {
    color: #ffffff;
    transition: 0.5s;
  }
`

export const LinkedInIcon = styled(Linkedin)`
  color: grey;
  width: 45px;
  height: 45px;
  margin-right: 20px;
  cursor: pointer;

  :hover {
    color: #ffffff;
    transition: 0.5s;
  }
`

export const InstagramIcon = styled(Instagram)`
  color: grey;
  width: 30px;
  height: 30px;
  margin-top: 2px;
  margin-right: 40px;
  cursor: pointer;

  :hover {
    color: #ffffff;
    transition: 0.5s;
  }
`

export const GithubIcon = styled(Github)`
  color: grey;
  width: 45px;
  height: 45px;
  margin-left: 4px;
  cursor: pointer;

  :hover {
    color: #ffffff;
    transition: 0.5s;
  }
`