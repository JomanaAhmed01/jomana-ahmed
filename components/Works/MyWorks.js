import styled from "styled-components"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { Link } from "@styled-icons/boxicons-regular/Link"

export default function MyWorks() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Title>Netflix NextJS Website Clone</Title>
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
        <Title>Netflix React Website Clone</Title>
        <ImageNetflix2
          title="Netflix React Project"
          src="/images/netflix-3.png"
        />
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
      <ImageWrapper>
        <Title>Crypto Platform Website</Title>
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
        <Title>Billie Eilish Website Clone</Title>
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
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  @media screen and (max-width: 890px) {
    width: 80%;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Title = styled.p`
  font: "opensans-bold", sans-serif;
  color: #000000;
  font-weight: bold;
  text-align: center;
`

export const ImageWrapper = styled.div`
  /* border: 3px solid red; */
`

export const ImageNetflix = styled.img`
  width: 250px;
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
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`

export const ImageCrypto = styled.img`
  width: 250px;
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

    :hover {
      width: 100%;
      transform: scale(1.2);
      transition: 0.5s;
      cursor: pointer;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`

export const ImageBillie = styled.img`
  width: 250px;
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
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`

export const ImageNetflix2 = styled.img`
  width: 250px;
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
      margin-top: 20px;
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