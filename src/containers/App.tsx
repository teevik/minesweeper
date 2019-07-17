import { observer } from "mobx-react-lite"
import * as React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { useGameStore } from "../stores/GameStore"
import { BottomBar } from "./BottomBar"
import { Game } from "./Game"
import { Header } from "./Header"
import { Minefield } from "./Minefield"
import { StartScreen } from "./StartScreen"
import { TopBar } from "./TopBar"

export const App = observer(() => {
  const gameStore = useGameStore()

  return (
    <>
      <Wrapper>
        <Header />
        <Game hidden={gameStore.hasStopped}>
          <TopBar />
          <Minefield />
          <BottomBar />
        </Game>
        <StartScreen hidden={!gameStore.hasStopped} />
      </Wrapper>
      <GlobalStyle />
    </>
  )
})

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 32px;
`

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: inherit;
  }
  
  body {
    background-color: #070814;
    font-family: Montserrat, sans-serif;
  }

  [hidden] {
    display: none !important;
  }
`
