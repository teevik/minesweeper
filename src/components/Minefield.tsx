import { observer } from "mobx-react-lite"
import * as React from "react"
import styled from "styled-components"
import { Square } from "../components"
import { gameStore } from "../stores"

export const Minefield: React.FC = observer(props => {
  const { minefield, mineHasExploded, width, height } = gameStore
  const gameIsOver = mineHasExploded

  const renderedMinefield = minefield
    .flat()
    .map((square, id) => <Square key={id} squareModel={square} />)

  return (
    <Wrapper width={width} height={height} gameIsOver={gameIsOver}>
      {renderedMinefield}
    </Wrapper>
  )
})

const Wrapper = styled.div<{
  width: number
  height: number
  gameIsOver: boolean
}>`
  display: grid;
  grid-template-columns: repeat(${props => props.width}, 30px);
  grid-template-rows: repeat(${props => props.height}, 30px);
  grid-gap: 1px;
  pointer-events: ${props => (props.gameIsOver ? "none" : "auto")};
`
