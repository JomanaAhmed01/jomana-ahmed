import styled from "styled-components"

export default function MyWorks() {
  return (
    <Wrapper>
      <ImageNetflix title="Netflix Project" src="/images/netflix-logo.jpg" />
      <ImageCrypto title="Crypto Platform" src="/images/crypto-platform.jpg" />
      <ImageBillie title="Billie Eilish" src="/images/billie-eilish.png" />
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

  @media screen and (max-width: 850px) {
    width: 46%;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`

export const ImageNetflix = styled.img`
  width: 215px;
  height: 132px;
  cursor: pointer;

  @media screen and (max-width: 850px) {
    width: 100%;
    height: 50%;
    margin-bottom: 40px;
  }
`

export const ImageCrypto = styled.img`
  width: 215px;
  height: 132px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;

  @media screen and (max-width: 850px) {
    width: 100%;
    height: 50%;
    margin-bottom: 40px;
    margin-left: 0px;
    margin-right: 0px;
  }
`

export const ImageBillie = styled.img`
  width: 215px;
  height: 132px;
  cursor: pointer;

  @media screen and (max-width: 850px) {
    width: 100%;
    height: 50%;
  }
`
