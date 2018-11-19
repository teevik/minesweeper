import * as React from "react"
import styled from "styled-components"

export const Game: React.FC = props => {
  return <Wrapper>{props.children}</Wrapper>
}

const Wrapper = styled.main`
  display: inline-flex;
  flex-direction: column;
  margin: auto;
`
