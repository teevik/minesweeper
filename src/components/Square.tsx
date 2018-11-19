import { FlagIcon } from "icons"
import { observer } from "mobx-react-lite"
import { SquareModel } from "models"
import * as React from "react"
import styled from "styled-components"
import { SquareState } from "types"

interface SquareProps {
  squareModel: SquareModel
}

export const Square: React.FC<SquareProps> = observer(props => {
  const { squareModel } = props

  const onLeftClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (squareModel.isFlagged) return

    squareModel.onOpen()
  }

  const onRightClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    squareModel.toggleFlag()
  }

  return (
    <Wrapper
      state={squareModel.state}
      isFlagged={squareModel.isFlagged}
      onClick={onLeftClick}
      onContextMenu={onRightClick}
    >
      <Choose>
        <When
          condition={
            squareModel.state === SquareState.opened &&
            squareModel.neighborsWithBomb > 0
          }
        >
          {squareModel.neighborsWithBomb}
        </When>
        <When condition={squareModel.isFlagged}>
          <FlagIcon />
        </When>
      </Choose>
    </Wrapper>
  )
})

const Wrapper = styled.button<{ state: SquareState; isFlagged: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none !important;
  border: none;
  cursor: pointer;

  ${({ state }) =>
    state === SquareState.opened
      ? `
    border: none;
  `
      : ""}

  background-color: ${({ state }) =>
    state === SquareState.exploded
      ? "red"
      : state === SquareState.opened
      ? "rgba(0, 0, 0, 0.16)"
      : "rgba(0, 0, 0, 0.36)"};

  color: #5960E4;
  font-size: 15px;
  font-weight: 600;
`
