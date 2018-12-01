import * as React from "react"
import styled from "styled-components"

export const ChevronDown = () => {
  return (
    <Wrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.829 29.828">
      <Path d="M6,9l8.725,8.725L23.451,9" />
    </Wrapper>
  )
}

const Wrapper = styled.svg`
  opacity: 0.83;
  width: 20px;
`

const Path = styled.path`
  fill: none;
  stroke: #5258d4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
`
