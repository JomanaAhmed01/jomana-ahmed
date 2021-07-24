import styled from "styled-components"
import Link from "next/link"
import { Facebook } from "@styled-icons/boxicons-logos/Facebook"
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin"
import { Instagram } from "@styled-icons/icomoon/Instagram"
import { Github } from "@styled-icons/boxicons-logos/Github"

export default function SocialLinks() {
  return (
    <Wrapper>
      <Link href="https://www.linkedin.com/in/jomana-ahmed/">
        <LinkedInIcon />
      </Link>
      <Link href="https://github.com/JomanaAhmed01">
        <GithubIcon />
      </Link>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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

export const LinkedInIcon = styled(Linkedin)`
  color: #ffffff;
  width: 45px;
  height: 45px;
  margin-right: 20px;
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