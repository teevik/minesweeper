import classNames from "classnames"
import { observer } from "mobx-react-lite"
import * as React from "react"
import styled from "styled-components"
import { Square } from "../components"
import { gameStore } from "../stores"

export const Minefield: React.FC = observer(props => {
  const { minefield, gameHasEnded, width, height } = gameStore

  const renderedMinefield = minefield.map((square, id) => (
    <Square key={id} squareModel={square} />
  ))

  const className = classNames({
    gameHasEnded
  })

  return (
    <Wrapper className={className} width={width} height={height}>
      {renderedMinefield}
    </Wrapper>
  )
})

const Wrapper = styled.div<{
  width: number
  height: number
}>`
  display: grid;
  grid-template-columns: repeat(${props => props.width}, 30px);
  grid-template-rows: repeat(${props => props.height}, 30px);
  grid-gap: 1px;

  &.gameHasEnded {
    pointer-events: none;
  }
`
