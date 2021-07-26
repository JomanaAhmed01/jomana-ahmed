import styled from "styled-components"
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { Link } from "@styled-icons/boxicons-regular/Link"

export default function MyWorks() {
  return (
    <Wrapper>
      <ImageWrapper>
        <ImageNetflix title="Netflix Project" src="/images/netflix.png" />
        <IconsWrapper>
          <a target="_blank" href="#">
            <LinkIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/JomanaAhmed01/NextJS-netflix-clone"
          >
            <GithubIcon />
          </a>
        </IconsWrapper>
      </ImageWrapper>
      <ImageWrapper>
        <ImageCrypto title="Crypto Platform Project" src="/images/crypto.png" />
        <IconsWrapper>
          <a target="_blank" href="#">
            <LinkIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/JomanaAhmed01/crypto-platform-next"
          >
            <GithubIcon />
          </a>
        </IconsWrapper>
      </ImageWrapper>
      <ImageWrapper>
        <ImageBillie title="Billie Eilish Project" src="/images/billie.png" />
        <IconsWrapper>
          <a target="_blank" href="#">
            <LinkIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/JomanaAhmed01/Billie-Eilish-Website"
          >
            <GithubIcon />
          </a>
        </IconsWrapper>
      </ImageWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  @media screen and (max-width: 890px) {
    width: 46%;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`

export const ImageWrapper = styled.div``

export const ImageNetflix = styled.img`
  width: 215px;
  cursor: pointer;

  :hover {
    width: 300px;
    transition: 0.5s;
  }

  :not(:hover) {
    transition: 0.5s;
  }

  @media screen and (max-width: 890px) {
    width: 100%;
    height: 50%;

    :hover {
      width: 100%;
      transform: scale(1.2);
      transition: 0.5s;
      cursor: pointer;
      margin-bottom: 20px;
    }
  }
`

export const ImageCrypto = styled.img`
  width: 215px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;

  :hover {
    width: 300px;
    transition: 0.5s;
  }

  :not(:hover) {
    transition: 0.5s;
  }

  @media screen and (max-width: 890px) {
    width: 100%;
    height: 50%;
    margin-left: 0px;
    margin-right: 0px;

    :hover {
      width: 100%;
      transform: scale(1.2);
      transition: 0.5s;
      cursor: pointer;
      margin-bottom: 20px;
    }
  }
`

export const ImageBillie = styled.img`
  width: 215px;
  cursor: pointer;

  :hover {
    width: 300px;
    transition: 0.5s;
  }

  :not(:hover) {
    transition: 0.5s;
  }

  @media screen and (max-width: 890px) {
    width: 100%;
    height: 50%;

    :hover {
      width: 100%;
      transform: scale(1.2);
      transition: 0.5s;
      cursor: pointer;
      margin-bottom: 20px;
    }
  }
`

export const IconsWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`

export const GithubIcon = styled(Github)`
  color: grey;
  width: 35px;
  height: 35px;
  margin-left: 4px;
  cursor: pointer;

  :hover {
    color: #66b3ff;
    transition: 0.5s;
  }
`

export const LinkIcon = styled(Link)`
  color: grey;
  width: 35px;
  height: 35px;
  margin-right: 10px;
  cursor: pointer;

  :hover {
    color: #66b3ff;
    transition: 0.5s;
  }
`