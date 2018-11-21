import * as React from "react"
import styled from "styled-components"

export const Game: React.FC<React.HTMLAttributes<HTMLMainElement>> = props => {
  return <Wrapper {...props} />
}

const Wrapper = styled.main`
  display: inline-flex;
  flex-direction: column;
  margin: auto;
`
