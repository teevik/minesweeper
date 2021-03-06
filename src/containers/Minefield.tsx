import classNames from "classnames"
import { observer } from "mobx-react-lite"
import * as React from "react"
import styled from "styled-components"
import { useGameStore } from "../stores/GameStore"
import { Square } from "./Square"

export const Minefield = observer(() => {
  const { minefield, gameHasEnded, boardWidth, boardHeight } = useGameStore()

  const renderedMinefield = minefield.map((square, id) => (
    <Square key={id} squareModel={square} />
  ))

  const className = classNames({
    gameHasEnded
  })

  return (
    <Wrapper
      className={className}
      boardWidth={boardWidth}
      boardHeight={boardHeight}
    >
      {renderedMinefield}
    </Wrapper>
  )
})

const Wrapper = styled.div<{
  boardWidth: number
  boardHeight: number
}>`
  display: grid;
  grid-template-columns: repeat(${props => props.boardWidth}, 30px);
  grid-template-rows: repeat(${props => props.boardHeight}, 30px);
  grid-gap: 2px;

  &.gameHasEnded {
    pointer-events: none;
  }
`
