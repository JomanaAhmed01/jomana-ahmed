import styled from "styled-components"
import SocialLinks from '../components/Footer/SocialLinks'

export default function FooterCompound() {
  return (
    <Wrapper>
      <FooterWrapper>
        <SocialLinks />
      </FooterWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div``

export const FooterWrapper = styled.div`
  background-color: #303030;
`
