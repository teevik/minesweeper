import { observer } from "mobx-react-lite"
import * as React from "react"
import { useContext } from "react"
import styled from "styled-components"
import { GameStoreContext } from "../contexts"

export const BottomBar = observer(() => {
  const gameStore = useContext(GameStoreContext)
  const { hasWon, hasLost } = gameStore

  let resultContent: React.ReactNode

  if (hasWon) resultContent = "You won!"
  if (hasLost) resultContent = "You lost!"

  return (
    <Wrapper>
      <Result>{resultContent}</Result>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0;
`

const Result = styled.p`
  color: #5960e4;
  font-size: 30px;
  font-weight: 500;
`
