import styled from "styled-components"
import { Facebook } from "@styled-icons/boxicons-logos/Facebook"
// import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin"
import { Instagram } from "@styled-icons/icomoon/Instagram"
import { Github } from "@styled-icons/boxicons-logos/Github"

export default function SocialLinks() {
  return (
    <Wrapper>
      {/* <a
        target="_blank"
        href="https://bit.ly/linkedin-profile01"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a> */}
      {/* <a
        target="_blank"
        href="https://bit.ly/github-profile01"
        rel="noreferrer"
      >
        <GithubIcon />
      </a> */}
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FacebookIcon = styled(Facebook)`
  color: #ffffff;
  width: 45px;
  height: 45px;
  margin-right: 10px;
  cursor: pointer;

  :hover {
    color: #66b3ff;
    transition: 0.5s;
  }
`

export const InstagramIcon = styled(Instagram)`
  color: #ffffff;
  width: 30px;
  height: 30px;
  margin-top: 2px;
  margin-right: 20px;
  cursor: pointer;

  :hover {
    color: #66b3ff;
    transition: 0.5s;
  }
`

export const GithubIcon = styled(Github)`
  color: #ffffff;
  width: 45px;
  height: 45px;
  margin-left: 4px;
  cursor: pointer;

  :hover {
    color: #66b3ff;
    transition: 0.5s;
  }
`