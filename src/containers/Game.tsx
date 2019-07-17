import * as React from "react"
import styled from "styled-components"

type GameProps = React.HTMLAttributes<HTMLElement>

export const Game = (props: GameProps) => {
  return <Wrapper {...props} />
}

const Wrapper = styled.main`
  display: inline-flex;
  flex-direction: column;
  margin: auto;
`
