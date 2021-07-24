import styled from "styled-components"
import CheckoutWorks from '../components/Works/CheckoutWorks'
import MyWorks from "../components/Works/MyWorks"

export default function WorksCompound() {
  return (
    <Wrapper>
      <CheckoutWorks />
      <MyWorks />
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  
`