import classNames from "classnames"
import { observer } from "mobx-react-lite"
import * as React from "react"
import styled from "styled-components"
import { FlagIcon } from "../icons"
import { SquareModel } from "../models"
import { gameStore } from "../stores"

interface SquareProps {
  squareModel: SquareModel
}

export const Square: React.FC<SquareProps> = observer(props => {
  const { squareModel } = props
  const { hasLost } = gameStore
  const { isFlagged, isOpened, isExploded, hasBomb } = squareModel

  const onLeftClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (isFlagged) return

    squareModel.onOpen()
  }

  const onRightClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (!squareModel.isClosed) return

    squareModel.toggleFlag()
  }

  let squareContent: React.ReactNode

  if (isFlagged) squareContent = <FlagIcon />
  if (isOpened && squareModel.neighborsWithBomb > 0)
    squareContent = squareModel.neighborsWithBomb

  const className = classNames({
    isOpened,
    isExploded: isExploded || (hasBomb && hasLost)
  })

  return (
    <Wrapper
      className={className}
      onClick={onLeftClick}
      onContextMenu={onRightClick}
    >
      {squareContent}
    </Wrapper>
  )
})

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none !important;
  border: none;
  cursor: pointer;

  background-color: rgba(0, 0, 0, 0.36);

  &.isOpened,
  &:hover {
    background-color: rgba(0, 0, 0, 0.16);
  }

  &.isExploded {
    background-color: #5960e4;
    border-radius: 50%;
    margin: 4px;
  }

  color: #5960e4;
  font-size: 15px;
  font-weight: 600;
`
