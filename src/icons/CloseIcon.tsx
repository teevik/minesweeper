import * as React from "react"
import styled from "styled-components"

export const CloseIcon: React.FC = props => {
  return (
    <Wrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.829 29.828">
      <g id="x" transform="translate(-4.586 -4.586)">
        <Line x1="27" y2="27" transform="translate(6 6)" />
        <Line x2="27" y2="27" transform="translate(6 6)" />
      </g>
    </Wrapper>
  )
}

const Wrapper = styled.svg`
  opacity: 0.83;
  height: 27px;
`

const Line = styled.line`
  fill: none;
  stroke: #5258d4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
`
