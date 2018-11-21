import * as React from "react"
import styled from "styled-components"
import { Button, Dropdown, Label } from "../components"
import { boardInfo } from "../constants"
import { useDropdown } from "../hooks"
import { gameStore } from "../stores"

export const StartScreen: React.FC<
  React.HTMLAttributes<HTMLMainElement>
> = props => {
  const gameModeDropdown = useDropdown([
    { value: "beginner", content: "Beginner - 9x9" },
    { value: "advanced", content: "Advanced - 16x16" },
    { value: "expert", content: "Expert - 30x16" }
  ])

  const { selectedEntry } = gameModeDropdown

  const handleStartGame = () => {
    gameStore.setupGame(boardInfo[selectedEntry.value])
    gameStore.onStartGame()
  }

  return (
    <Wrapper>
      <Label>Game mode</Label>
      <Dropdown {...gameModeDropdown} />

      <Hr />

      <Button onClick={handleStartGame}>Start game</Button>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: inline-flex;
  flex-direction: column;
  margin: auto;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.36);
  min-width: 350px;
`

const Hr = styled.hr`
  border-color: rgba(255, 255, 255, 0.01);
  border-width: 1px;
  margin: 32px 0;
`
