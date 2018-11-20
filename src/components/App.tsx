import { observer } from "mobx-react-lite"
import * as React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Game, Header, Minefield, StartScreen, TopBar } from "../components"
import { gameStore } from "../stores"

const renderStartScreen = () => <StartScreen />

const renderGame = () => (
  <Game>
    <TopBar />
    <Minefield />
  </Game>
)

export const App: React.FC = observer(props => {
  return (
    <>
      <Wrapper>
        <Header />
        {gameStore.gameRunning ? renderGame() : renderStartScreen()}
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
    background-color: #0B0C20;
    font-family: Montserrat, sans-serif;
  }
`
