import * as React from "react"
import styled from "styled-components"

export const Header = () => {
  return (
    <Wrapper>
      <Title>Minesweeper</Title>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  padding: 16px;
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
  color: #5960e4;
  opacity: 0.72;
`
