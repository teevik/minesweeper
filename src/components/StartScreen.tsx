import { Button, Dropdown, Label } from "components"
import * as React from "react"
import { gameStore } from "stores"
import styled from "styled-components"

export const StartScreen: React.FC = props => {
  return (
    <Wrapper>
      <Label>Game mode</Label>
      <Dropdown />

      <Hr />

      <Button onClick={() => gameStore.startGame()}>Start game</Button>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: inline-flex;
  flex-direction: column;
  margin: auto;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.36);
  min-width: 300px;
`

const Hr = styled.hr`
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 1px;
  margin: 32px 0;
`
