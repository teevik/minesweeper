import { Button, Dropdown, Label } from "components"
import { useDropdown } from "hooks"
import * as React from "react"
import { gameStore } from "stores"
import styled from "styled-components"
import { Dimensions } from "types"

export const StartScreen: React.FC = props => {
  const gameModeDropdown = useDropdown([
    { value: "beginner", content: "Beginner - 9x9" },
    { value: "advanced", content: "Advanced - 16x16" },
    { value: "expert", content: "Expert - 16x30" }
  ])

  const { selectedEntry } = gameModeDropdown

  const handleStartGame = () => {
    const dimensions: Record<string, Dimensions> = {
      beginner: { width: 9, height: 9 },
      advanced: { width: 16, height: 16 },
      expert: { width: 30, height: 16 }
    }

    gameStore.setDimensions(dimensions[selectedEntry.value])
    gameStore.startGame()
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
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 1px;
  margin: 32px 0;
`