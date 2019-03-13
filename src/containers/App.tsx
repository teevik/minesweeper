import { observer } from "mobx-react-lite"
import * as React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { BottomBar, Game, Header, Minefield, StartScreen, TopBar } from "."
import { GameStoreContext } from "../contexts"
import { useStore } from "../hooks"
import { GameStore } from "../stores"

export const App = observer(() => {
  const gameStore = useStore(GameStore)

  return (
    <GameStoreContext.Provider value={gameStore}>
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
    </GameStoreContext.Provider>
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
    background-color: #0B0C20;
    font-family: Montserrat, sans-serif;
  }

  [hidden] {
    display: none !important;
  }
`
