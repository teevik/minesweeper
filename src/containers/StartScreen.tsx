import * as React from "react"
import styled from "styled-components"
import { Button } from "../components/Button"
import { Dropdown } from "../components/Dropdown"
import { Label } from "../components/Label"
import { NumberInput } from "../components/NumberInput"
import * as S from "../components/styles"
import { boardInfo } from "../constants/boardInfo"
import { useDropdown } from "../hooks/useDropdown"
import { useNumberInput } from "../hooks/useNumberInput"
import { useGameStore } from "../stores/GameStore"

type StartScreenProps = React.HTMLAttributes<HTMLElement>

export const StartScreen = (props: StartScreenProps) => {
  const gameStore = useGameStore()
  const gameModeDropdown = useDropdown([
    { value: "beginner", content: "Beginner - 9x9" },
    { value: "advanced", content: "Advanced - 16x16" },
    { value: "expert", content: "Expert - 30x16" },
    { value: "custom", content: "Custom" }
  ])
  const widthInput = useNumberInput({ defaultValue: 10, min: 1, max: 30 })
  const heightInput = useNumberInput({ defaultValue: 10, min: 1, max: 30 })
  const bombAmountInput = useNumberInput({ defaultValue: 20, min: 1, max: 100 })

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
  background-color: #0c0d1f;
  min-width: 350px;

  ${S.Label} {
    margin-bottom: 4px;
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
`

const Hr = styled.hr`
  border-color: rgba(255, 255, 255, 0.03);
  border-width: 1.5px;
  margin: 32px 0;
`
