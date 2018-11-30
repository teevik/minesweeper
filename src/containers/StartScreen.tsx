import * as React from "react"
import styled from "styled-components"
import { Button, Dropdown, Label, NumberInput } from "../components"
import * as S from "../components/styles"
import { boardInfo } from "../constants"
import { useDropdown, useNumberInput } from "../hooks"
import { gameStore } from "../stores"

export const StartScreen: React.FC<
  React.HTMLAttributes<HTMLMainElement>
> = props => {
  const gameModeDropdown = useDropdown([
    { value: "beginner", content: "Beginner - 9x9" },
    { value: "advanced", content: "Advanced - 16x16" },
    { value: "expert", content: "Expert - 30x16" },
    { value: "custom", content: "Custom" }
  ])
  const widthInput = useNumberInput({ defaultValue: 10, min: 1, max: 30 })
  const heightInput = useNumberInput({ defaultValue: 10, min: 1, max: 30 })
  const bombAmountInput = useNumberInput({ defaultValue: 5, min: 1, max: 40 })

  const { selectedEntry } = gameModeDropdown
  const isCustom = selectedEntry.value === "custom"

  // There can't be more bombs than total amount of squares
  const totalAmountOfSquares = widthInput.value * heightInput.value
  if (bombAmountInput.value > totalAmountOfSquares) {
    bombAmountInput.setValue(totalAmountOfSquares)
  }

  const handleStartGame = () => {
    if (isCustom) {
      gameStore.setupGame({
        width: widthInput.value,
        height: heightInput.value,
        bombAmount: bombAmountInput.value
      })
    } else {
      gameStore.setupGame(boardInfo[selectedEntry.value])
    }
    gameStore.onStartGame()
  }

  const customSetup = isCustom && (
    <>
      <Label>Width</Label>
      <NumberInput {...widthInput} />
      <Label>Height</Label>
      <NumberInput {...heightInput} />
      <Label>Amount of mines</Label>
      <NumberInput {...bombAmountInput} />
    </>
  )

  return (
    <Wrapper {...props}>
      <Label>Game mode</Label>
      <Dropdown {...gameModeDropdown} />

      {customSetup}

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

  ${S.Label} {
    margin-bottom: 4px;
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
`

const Hr = styled.hr`
  border-color: rgba(255, 255, 255, 0.01);
  border-width: 1px;
  margin: 32px 0;
`
