import * as React from "react"
import styled from "styled-components"
import { Button, Dropdown, Label } from "../components"
import { gameDimensions } from "../constants"
import { useDropdown } from "../hooks"
import { gameStore } from "../stores"
import { Dimensions } from "../types"

export const StartScreen: React.FC = props => {
  const gameModeDropdown = useDropdown([
    { value: "beginner", content: "Beginner - 9x9" },
    { value: "advanced", content: "Advanced - 16x16" },
    { value: "expert", content: "Expert - 16x30" }
  ])

  const { selectedEntry } = gameModeDropdown

  const handleStartGame = () => {
    gameStore.setDimensions(gameDimensions[selectedEntry.value])
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
  min-width: 300px;
`

const Hr = styled.hr`
  border-color: rgba(255, 255, 255, 0.01);
  border-width: 1px;
  margin: 32px 0;
`
