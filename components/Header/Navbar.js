import styled from "styled-components"

export default function Navbar() {
  return (
    <Wrapper>
      <LinkSpecial>HOME</LinkSpecial>
      <Link>ABOUT</Link>
      <Link>PROJECTS</Link>
      <Link>CONTACT</Link>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const LinkSpecial = styled.p`
  padding: 8px 13px;
  line-height: 32px;
  text-decoration: none;
  color: #f06000;
  font-weight: bold;
  cursor: pointer;
  

  :hover {
    color: #ffffff;
    transition: 0.5s;
  }
`

export const Link = styled.p`
  padding: 8px 13px;
  line-height: 32px;
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;

  :hover {
    color: #f06000;
    transition: 0.5s;
  }
`
