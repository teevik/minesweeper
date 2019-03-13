import { observer } from "mobx-react-lite"
import * as React from "react"
import { useContext } from "react"
import styled from "styled-components"
import { GameStoreContext } from "../contexts"
import { CloseIcon, RefreshIcon } from "../icons"

export const TopBar = observer(() => {
  const gameStore = useContext(GameStoreContext)
  const { bombAmount, flaggedAmount } = gameStore

  const bombsLeft = bombAmount - flaggedAmount

  return (
    <Wrapper>
      <BombsLeft>
        <BombsLeftImportant>{bombsLeft}</BombsLeftImportant>mines left
      </BombsLeft>
      <GameButton onClick={() => gameStore.onStartGame()}>
        <RefreshIcon />
      </GameButton>
      <GameButton onClick={() => gameStore.onStopGame()}>
        <CloseIcon />
      </GameButton>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
`

const BombsLeft = styled.p`
  color: #5960e4;
  font-weight: 600;
  font-size: 15px;
  opacity: 0.75;
  line-height: 0.75;

  margin-right: auto;
`

const BombsLeftImportant = styled.span`
  font-weight: 400;
  font-size: 40px;
  margin-right: 2px;
`

const GameButton = styled.button`
  all: unset;
  line-height: 0;
  cursor: pointer;

  &:hover * {
    opacity: 1;
  }

  & + & {
    margin-left: 8px;
  }
`
