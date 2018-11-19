import { CloseIcon } from "icons"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { gameStore } from "stores"
import styled from "styled-components"

export const Topbar: React.FC = observer(props => {
  const { bombAmount, flaggedAmount } = gameStore

  const bombsLeft = bombAmount - flaggedAmount

  return (
    <Wrapper>
      <BombsLeft>
        <BombsLeftImportant>{bombsLeft}</BombsLeftImportant>mines left
      </BombsLeft>
      <StopGameButton onClick={() => gameStore.stopGame()}>
        <CloseIcon />
      </StopGameButton>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8px;
`

const BombsLeft = styled.p`
  color: #5960e4;
  font-weight: 600;
  font-size: 15px;
  opacity: 0.75;
  line-height: 0.75;
`

const BombsLeftImportant = styled.span`
  font-weight: 400;
  font-size: 40px;
  margin-right: 2px;
`

const StopGameButton = styled.button`
  all: unset;
  line-height: 0;
  cursor: pointer;
`
