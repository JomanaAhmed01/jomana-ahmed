import styled from "styled-components"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { Link } from "@styled-icons/boxicons-regular/Link"

export default function MyWorks() {
  return (
    <Wrapper>
      <ImageWrapper>
        <Title>NextJS Netflix Website</Title>
        <ImageBillie title="NextJS Netflix Project" src="/images/netflix.png" />
        <IconsWrapper>
          <a
            target="_blank"
            href="#"
            rel="noreferrer"
          >
            <LinkIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/JomanaAhmed01/NextJS-netflix-clone"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </IconsWrapper>
      </ImageWrapper>

      <ImageWrapper>
        <Title>React Netflix Website</Title>
        <ImageBillie title="React Netflix Project" src="/images/netflix-3.png" />
        <IconsWrapper>
          <a
            target="_blank"
            href="#"
            rel="noreferrer"
          >
            <LinkIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/JomanaAhmed01/React-Netflix-Project"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </IconsWrapper>
      </ImageWrapper>

      <ImageWrapper>
        <Title>Tripo Games Website</Title>
        <ImageBillie title="Tripo Games Project" src="/images/tripo-games.png" />
        <IconsWrapper>
          <a
            target="_blank"
            href="https://tripo-games.vercel.app/"
            rel="noreferrer"
          >
            <LinkIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/JomanaAhmed01/tripo-games"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </IconsWrapper>
      </ImageWrapper>

      <ImageWrapper>
        <Title>Crypto Exchange Website</Title>
        <ImageBillie title="Crypto Exchange Project" src="/images/crypto.png" />
        <IconsWrapper>
          <a
            target="_blank"
            href="https://crypto-platform-next.vercel.app/"
            rel="noreferrer"
          >
            <LinkIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/JomanaAhmed01/crypto-platform-next"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </IconsWrapper>
      </ImageWrapper>

      <ImageWrapper>
        <Title>AI Company Website</Title>
        <ImageBillie title="AI Company Project" src="/images/ai-company.png" />
        <IconsWrapper>
          <a
            target="_blank"
            href="https://ai-company-website.vercel.app/"
            rel="noreferrer"
          >
            <LinkIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/JomanaAhmed01/crypto-platform-next"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </IconsWrapper>
      </ImageWrapper>

      <ImageWrapper>
        <Title>Tech Company Website</Title>
        <ImageBillie title="Tech Company Project" src="/images/tech-company.png" />
        <IconsWrapper>
          <a
            target="_blank"
            href="https://tech-company-website-wheat.vercel.app/"
            rel="noreferrer"
          >
            <LinkIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/JomanaAhmed01/tech-company-website"
            rel="noreferrer"
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
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;

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