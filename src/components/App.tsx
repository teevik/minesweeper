import { Game, Header, Minefield, StartScreen, Topbar } from "components"
import { observer } from "mobx-react-lite"
import * as React from "react"
import { gameStore } from "stores"
import styled, { createGlobalStyle } from "styled-components"

const renderStartScreen = () => <StartScreen />

const renderGame = () => (
  <Game>
    <Topbar />
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
